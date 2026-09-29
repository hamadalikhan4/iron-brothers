import {
  createContext,
  useContext,
  type AnchorHTMLAttributes,
  type MouseEvent,
} from "react";
export const RouteContext = createContext({ path: "/", search: "" });
export function useRoute() {
  return useContext(RouteContext);
}
export function navigate(to: string) {
  window.history.pushState({}, "", to);
  window.dispatchEvent(new PopStateEvent("popstate"));
}
export function Link({
  href = "/",
  onClick,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
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
  return <a href={href} onClick={handleClick} {...props} />;
}
