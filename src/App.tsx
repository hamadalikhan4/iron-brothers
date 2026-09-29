import { useState, useEffect, Component, type ReactNode } from "react";
import { RouteContext } from "./router";
import { navigation } from "./data";
import { Header, Footer } from "./components/Layout";
import { PageHero, ButtonLink } from "./components/UI";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Mining } from "./pages/Mining";
import { MineSites, Leasing } from "./pages/MineSites";
import { Trading } from "./pages/Trading";
import { Portfolio } from "./pages/Portfolio";
import { Media } from "./pages/Media";
import { Team } from "./pages/Team";
import { Contact } from "./pages/Contact";

class ErrorBoundary extends Component<
  { children: ReactNode },
  { error: boolean }
> {
  state = { error: false };

  static getDerivedStateFromError() {
    return { error: true };
  }

  render() {
    return this.state.error ? (
      <div className="container section">
        <h1>Something went wrong</h1>
        <p>Please reload the page to continue.</p>
        <button className="button" onClick={() => window.location.reload()}>
          Reload page
        </button>
      </div>
    ) : (
      this.props.children
    );
  }
}

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

const getLocation = () => {
  const pathname = window.location.pathname;
  const logicalPath =
    basePath && (pathname === basePath || pathname.startsWith(`${basePath}/`))
      ? pathname.slice(basePath.length) || "/"
      : pathname;

  return {
    path: logicalPath.replace(/\/$/, "") || "/",
    search: window.location.search,
  };
};

export default function App() {
  const [route, setRoute] = useState(getLocation);

  useEffect(() => {
    const handle = () => setRoute(getLocation());
    window.addEventListener("popstate", handle);
    return () => window.removeEventListener("popstate", handle);
  }, []);

  useEffect(() => {
    const name =
      navigation.find(([, u]) => u === route.path)?.[0] ||
      (route.path.startsWith("/mine-sites/")
        ? "Mine Site"
        : route.path === "/leasing"
          ? "Mine Leasing"
          : "Page Not Found");

    document.title =
      route.path === "/"
        ? "Iron Brothers | Mining · Minerals · Trade"
        : `${name} | Iron Brothers`;

    const frame = requestAnimationFrame(() => {
      if (window.location.hash) {
        document
          .getElementById(decodeURIComponent(window.location.hash.slice(1)))
          ?.scrollIntoView();
      } else {
        window.scrollTo(0, 0);
        document
          .querySelector<HTMLElement>("h1")
          ?.focus({ preventScroll: true });
      }
    });

    return () => cancelAnimationFrame(frame);
  }, [route.path]);

  const pages: Record<string, ReactNode> = {
    "/": <Home />,
    "/about": <About />,
    "/mining": <Mining />,
    "/leasing": <Leasing />,
    "/trading": <Trading />,
    "/portfolio": <Portfolio />,
    "/media": <Media />,
    "/team": <Team />,
    "/contact": (
      <Contact
        key={new URLSearchParams(route.search).get("subject") || "contact"}
      />
    ),
  };

  const page =
    route.path === "/mine-sites" || route.path.startsWith("/mine-sites/") ? (
      <MineSites key={route.path} />
    ) : (
      pages[route.path] || (
        <>
          <PageHero
            label="404"
            title="This page could not be found"
            description="Explore our mining, trading and partnership opportunities from the homepage."
          />
          <div className="container section">
            <ButtonLink href="/">Return Home</ButtonLink>
          </div>
        </>
      )
    );

  return (
    <ErrorBoundary>
      <RouteContext.Provider value={route}>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{page}</main>
        <Footer />
      </RouteContext.Provider>
    </ErrorBoundary>
  );
}
