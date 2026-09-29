import { useEffect, useRef, type ReactNode } from "react";
import { ArrowUpRight, X, Mountain, ArrowRight } from "lucide-react";
import { Link } from "../router";
export function Brand() {
  return (
    <Link href="/" className="brand" aria-label="Iron Brothers home">
      <span className="brand-symbol">
        <Mountain size={24} />
      </span>
      <span>
        <strong>IRON BROTHERS</strong>
        <small>MINING · MINERALS · TRADE</small>
      </span>
    </Link>
  );
}
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="eyebrow">
      <span />
      {children}
    </div>
  );
}
export function ButtonLink({
  href,
  children,
  outline = false,
}: {
  href: string;
  children: ReactNode;
  outline?: boolean;
}) {
  return (
    <Link href={href} className={`button ${outline ? "outline" : ""}`}>
      {children}
      <ArrowRight size={17} />
    </Link>
  );
}
export function SectionTitle({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-title">
      <Eyebrow>{label}</Eyebrow>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
export function PageHero({
  label,
  title,
  description,
  children,
}: {
  label: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="page-hero">
      <div className="container">
        <Eyebrow>{label}</Eyebrow>
        <h1 tabIndex={-1}>{title}</h1>
        <p>{description}</p>
        {children && <div className="actions">{children}</div>}
      </div>
      <div className="hero-lines" aria-hidden="true" />
    </section>
  );
}
export function Photo({
  src,
  alt,
  className = "",
  eager = false,
}: {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
}) {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      onError={(e) => {
        e.currentTarget.style.visibility = "hidden";
        e.currentTarget.parentElement?.classList.add("image-unavailable");
      }}
    />
  );
}
export function Tags({ items }: { items: string[] }) {
  return (
    <div className="tags">
      {items.map((t) => (
        <span key={t}>{t}</span>
      ))}
    </div>
  );
}
export function Card({
  title,
  photo,
  description,
  children,
  href,
  cta = "Explore opportunity",
  label,
}: {
  title: string;
  photo?: string;
  description?: string;
  children?: ReactNode;
  href?: string;
  cta?: string;
  label?: string;
}) {
  return (
    <article className="card">
      {photo && (
        <div className="card-image">
          <Photo src={photo} alt={title} />
          {label && <span className="badge">{label}</span>}
        </div>
      )}
      <div className="card-body">
        <h3>{title}</h3>
        {description && <p>{description}</p>}
        {children}
        {href && (
          <Link className="text-link" href={href}>
            {cta}
            <ArrowUpRight size={18} />
          </Link>
        )}
      </div>
    </article>
  );
}
export function Filters({
  values,
  selected,
  onChange,
  label = "Filter results",
}: {
  values: string[];
  selected: string;
  onChange: (v: string) => void;
  label?: string;
}) {
  return (
    <div className="filters" role="group" aria-label={label}>
      {values.map((v) => (
        <button
          key={v}
          type="button"
          aria-pressed={v === selected}
          className={v === selected ? "selected" : ""}
          onClick={() => onChange(v)}
        >
          {v}
        </button>
      ))}
    </div>
  );
}
export function Empty({ children }: { children: ReactNode }) {
  return (
    <div className="empty" role="status">
      <Mountain size={30} />
      <p>{children}</p>
    </div>
  );
}
export function Modal({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = ref.current;
    const previous = document.activeElement as HTMLElement | null;
    dialog?.showModal();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
      dialog?.close();
      previous?.focus();
    };
  }, []);
  return (
    <dialog
      ref={ref}
      className="modal"
      aria-labelledby="modal-title"
      onCancel={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-inner">
        <button
          autoFocus
          className="icon-button close"
          aria-label="Close dialog"
          onClick={onClose}
        >
          <X />
        </button>
        <h2 id="modal-title">{title}</h2>
        {children}
      </div>
    </dialog>
  );
}
