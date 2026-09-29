import { test, before, after } from "node:test";
import assert from "node:assert/strict";
import { createServer } from "vite";
import { createElement } from "react";
import { renderToString } from "react-dom/server";
let server;
let App;
before(async () => {
  server = await createServer({
    server: { middlewareMode: true },
    appType: "custom",
  });
  ({ default: App } = await server.ssrLoadModule("/src/App.tsx"));
});
after(async () => {
  await server?.close();
});
function render(path, search = "") {
  globalThis.window = { location: { pathname: path, search }, scrollY: 0 };
  return renderToString(createElement(App));
}
for (const [path, heading] of [
  ["/", "Mining Resources."],
  ["/about", "From Natural Resources"],
  ["/mining", "Unlocking the Value"],
  ["/mine-sites", "Our Mine Sites"],
  ["/mine-sites/kargah-nala", "Kargah Nala"],
  ["/mine-sites/shigar", "Shigar"],
  ["/mine-sites/bathrait-nala", "Bathrait Nala"],
  ["/mine-sites/darel", "Darel"],
  ["/leasing", "Explore Mining Opportunities"],
  ["/trading", "Connecting Markets."],
  ["/portfolio", "Our Portfolio"],
  ["/media", "Iron Brothers Media"],
  ["/team", "The People Behind"],
  ["/contact", "Let’s Build the Next Opportunity"],
]) {
  test(`route ${path} renders its heading and shared navigation`, () => {
    const html = render(path);
    assert.match(html, /<h1[^>]*>/);
    assert.ok(html.includes(heading));
    assert.ok(html.includes('aria-label="Main navigation"'));
    assert.ok(html.includes("<footer>"));
    assert.equal((html.match(/<h1\b/g) || []).length, 1);
  });
}
test("unknown routes and unknown mines have recovery links", () => {
  assert.match(render("/unknown"), /This page could not be found/);
  assert.match(render("/mine-sites/unknown"), /Site not found/);
});
test("quote inquiry preserves product context and category", () => {
  const html = render(
    "/contact",
    "?type=Import+%26+Trading&subject=Premium+Glassware+Set",
  );
  assert.ok(html.includes('value="Premium Glassware Set"'));
  assert.match(html, /<option selected="">Import &amp; Trading<\/option>/);
});
test("lease inquiry exposes the requested site and investment fields", () => {
  const html = render("/contact", "?type=Mine+Leasing&subject=Kargah+Nala");
  assert.match(html, /name="investmentInterest"/);
  assert.match(html, /<option selected="">Kargah Nala<\/option>/);
});
test("unconfigured form does not advertise working submission", () => {
  const html = render("/contact");
  assert.match(html, /Online submission is not available yet/);
  assert.match(html, /Download Inquiry Draft/);
});
