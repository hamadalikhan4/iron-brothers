import {
  createContext,
  useContext,
  type AnchorHTMLAttributes,
  type MouseEvent,
} from "react";

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

export const RouteContext = createContext({ path: "/", search: "" });

export function useRoute() {
  return useContext(RouteContext);
}

function toBrowserPath(to: string) {
  if (!to.startsWith("/")) return to;
  return `${basePath}${to === "/" ? "/" : to}`;
}

export function navigate(to: string) {
  window.history.pushState({}, "", toBrowserPath(to));
  window.dispatchEvent(new PopStateEvent("popstate"));
}

export function Link({
  href = "/",
  onClick,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const browserHref = href.startsWith("/") ? toBrowserPath(href) : href;

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    onClick?.(e);
    if (
      !e.defaultPrevented &&
      href.startsWith("/") &&
      !e.metaKey &&
      !e.ctrlKey &&
      !e.shiftKey &&
      !e.altKey &&
      e.button === 0 &&
      !props.target &&
      !props.download
    ) {
      e.preventDefault();
      navigate(href);
    }
  }

  return <a href={browserHref} onClick={handleClick} {...props} />;
}
