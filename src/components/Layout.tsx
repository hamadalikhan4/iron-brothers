import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  ArrowUpRight,
  MessageCircle,
  ArrowUp,
} from "lucide-react";
import { navigation, inquiryLink, company } from "../data";
import { Link, useRoute } from "../router";
import { Brand, Eyebrow, ButtonLink } from "./UI";
export function Header() {
  const { path } = useRoute();
  const [menu, setMenu] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(window.scrollY > 30);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  useEffect(() => {
    setMenu(false);
    setDropdown(false);
  }, [path]);
  useEffect(() => {
    if (!menu) return;
    const fn = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenu(false);
        document.getElementById("menu-toggle")?.focus();
      }
    };
    document.addEventListener("keydown", fn);
    return () => document.removeEventListener("keydown", fn);
  }, [menu]);
  return (
    <header
      className={`header ${path === "/" && !scrolled && !menu ? "transparent" : ""}`}
    >
      <div className="nav-wrap">
        <Brand />
        <button
          id="menu-toggle"
          className="icon-button menu-toggle"
          aria-label={menu ? "Close navigation" : "Open navigation"}
          aria-expanded={menu}
          aria-controls="main-nav"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <X /> : <Menu />}
        </button>
        <nav
          id="main-nav"
          aria-label="Main navigation"
          className={menu ? "nav open" : "nav"}
        >
          {navigation.map(([name, url]) =>
            url === "/mining" ? (
              <div
                className="nav-dropdown"
                key={url}
                onKeyDown={(e) => {
                  if (e.key === "Escape") setDropdown(false);
                }}
              >
                <button
                  className={
                    path === "/mining" || path === "/leasing"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  aria-expanded={dropdown}
                  aria-controls="mining-nav"
                  onClick={() => setDropdown(!dropdown)}
                >
                  {name}
                  <ChevronDown size={13} />
                </button>
                {dropdown && (
                  <div className="dropdown-menu" id="mining-nav">
                    {[
                      ["Mining Overview", "/mining"],
                      ["Mine Sites", "/mine-sites"],
                      ["Mine Leasing", "/leasing"],
                    ].map(([n, u]) => (
                      <Link
                        href={u}
                        key={u}
                        onClick={() => {
                          setDropdown(false);
                          setMenu(false);
                        }}
                      >
                        {n}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={url}
                className={`nav-link ${path === url ? "active" : ""}`}
                href={url}
                aria-current={path === url ? "page" : undefined}
                onClick={() => setMenu(false)}
              >
                {name}
              </Link>
            ),
          )}
          <Link
            href="/leasing"
            className="nav-cta"
            onClick={() => setMenu(false)}
          >
            Explore Opportunities
            <ArrowUpRight size={15} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
export function Footer() {
  return (
    <>
      <section className="cta-band">
        <div className="container cta-inner">
          <div>
            <Eyebrow>Partnership & investment</Eyebrow>
            <h2>Have an opportunity in mind?</h2>
            <p>
              From mining and leasing to international trade, let’s build
              something valuable together.
            </p>
          </div>
          <div className="actions">
            <ButtonLink href={inquiryLink("Partnership")}>
              Start a Conversation
            </ButtonLink>
            <ButtonLink href="/leasing" outline>
              Explore Opportunities
            </ButtonLink>
          </div>
        </div>
      </section>
      <footer>
        <div className="container footer-grid">
          <div className="footer-intro">
            <Brand />
            <p>
              Mining Resources.
              <br />
              Creating Global Opportunities.
            </p>
            <span>
              Based in {company.region}.<br />
              Expanding globally.
            </span>
          </div>
          {[
            {
              title: "Company",
              items: [
                ["About Us", "/about"],
                ["Mine Sites", "/mine-sites"],
                ["Portfolio", "/portfolio"],
                ["Our Team", "/team"],
              ],
            },
            {
              title: "Business",
              items: [
                ["Mining & Minerals", "/mining"],
                ["Mine Leasing", "/leasing"],
                ["Import & Trading", "/trading"],
                ["Partnerships", inquiryLink("Partnership")],
              ],
            },
            {
              title: "Connect",
              items: [
                ["Media & Gallery", "/media"],
                ["Get in Touch", "/contact"],
                ["Send an Inquiry", "/contact"],
                ["Investment", inquiryLink("Investment Inquiry")],
              ],
            },
          ].map((group) => (
            <div key={group.title}>
              <h3>{group.title}</h3>
              {group.items.map(([label, url]) => (
                <Link key={label} href={url}>
                  {label}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="container footer-bottom">
          <span>
            © {new Date().getFullYear()} Iron Brothers. All rights reserved.
          </span>
          <span>Gilgit-Baltistan, Pakistan</span>
          <button
            className="back-top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Back to top
            <ArrowUp size={14} />
          </button>
        </div>
      </footer>
      <Link href="/contact" className="help" aria-label="Contact Iron Brothers">
        <MessageCircle size={19} />
        <span>Let’s talk</span>
      </Link>
    </>
  );
}
