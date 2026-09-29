import { useState } from "react";
import { Search } from "lucide-react";
import { products, inquiryLink } from "../data";
import {
  PageHero,
  SectionTitle,
  Card,
  Filters,
  Empty,
  ButtonLink,
} from "../components/UI";
export function Trading() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const filtered = products.filter(
    (p) =>
      (category === "All" || p.category === category) &&
      `${p.name} ${p.category}`
        .toLowerCase()
        .includes(query.toLowerCase().trim()),
  );
  return (
    <>
      <PageHero
        label="Import & trading"
        title="Connecting Markets. Moving Opportunities."
        description="Connecting international suppliers with local distribution, retail and commercial markets."
      >
        <ButtonLink href={inquiryLink("Import & Trading")}>
          Request Import Inquiry
        </ButtonLink>
        <a className="button outline" href="#products">
          Browse Products ↓
        </a>
      </PageHero>
      <section className="section">
        <div className="container">
          <SectionTitle
            label="How it works"
            title="International Trade Pipeline"
          />
          <div className="pipeline">
            {[
              ["Source", "International supplier networks"],
              ["Import", "Shipping and clearance"],
              ["Distribution", "Local and regional delivery"],
              ["Market", "Retail and trade channels"],
            ].map(([t, d], i) => (
              <div key={t}>
                <span>0{i + 1}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="products" className="section soft">
        <div className="container">
          <SectionTitle
            label="Product marketplace"
            title="Browse Our Products"
            description="Explore product categories and request current specifications, availability and pricing."
          />
          <label className="search">
            <Search size={20} />
            <span className="sr-only">Search products</span>
            <input
              type="search"
              placeholder="Search products or categories…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
          <Filters
            values={[
              "All",
              "Glassware",
              "Industrial",
              "Commercial",
              "Consumer",
              "E-Commerce",
              "Other",
            ]}
            selected={category}
            onChange={setCategory}
          />
          <p className="result-count" role="status">
            {filtered.length} product{filtered.length === 1 ? "" : "s"} found
          </p>
          <div className="grid three">
            {filtered.map((p) => (
              <Card
                key={p.name}
                title={p.name}
                photo={p.photo}
                label={p.category}
                description="Specifications and availability on request."
                href={inquiryLink("Import & Trading", p.name)}
                cta="Request Quote"
              />
            ))}
          </div>
          {!filtered.length && (
            <Empty>
              No products match your search. Try a different category or search
              term.
            </Empty>
          )}
        </div>
      </section>
    </>
  );
}
