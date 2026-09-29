import { useState } from "react";
import { projects, inquiryLink } from "../data";
import {
  PageHero,
  Filters,
  Photo,
  Modal,
  ButtonLink,
  Empty,
} from "../components/UI";
export function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<(typeof projects)[number] | null>(
    null,
  );
  const visible = projects.filter(
    (p) => filter === "All" || p.category === filter,
  );
  return (
    <>
      <PageHero
        label="Portfolio"
        title="Our Portfolio"
        description="Projects, operations and opportunities across mining, trading and natural resources."
      />
      <section className="section">
        <div className="container">
          <Filters
            values={[
              "All",
              "Mining",
              "Mine Sites",
              "Trading",
              "Import",
              "Infrastructure",
              "Partnerships",
            ]}
            selected={filter}
            onChange={setFilter}
          />
          <p className="result-count" role="status">
            {visible.length} projects
          </p>
          <div className="grid three">
            {visible.map((p) => (
              <article className="card" key={p.id}>
                <div className="card-image">
                  <Photo src={p.photo} alt={p.name} />
                  <span className="badge">{p.status}</span>
                </div>
                <div className="card-body">
                  <span className="kicker">
                    {p.category} · {p.year}
                  </span>
                  <h3>{p.name}</h3>
                  <p>{p.description}</p>
                  <button className="text-link" onClick={() => setSelected(p)}>
                    View Project ↗
                  </button>
                </div>
              </article>
            ))}
          </div>
          {!visible.length && (
            <Empty>No projects published in this category yet.</Empty>
          )}
        </div>
      </section>
      {selected && (
        <Modal title={selected.name} onClose={() => setSelected(null)}>
          <div className="modal-photo">
            <Photo src={selected.photo} alt={selected.name} />
          </div>
          <p className="kicker">
            {selected.category} · {selected.location} · {selected.year}
          </p>
          <p>{selected.description}</p>
          <p className="muted">
            Project summaries follow the supplied design reference. Ask our team
            for current supporting information.
          </p>
          <div onClick={() => setSelected(null)}>
            <ButtonLink href={inquiryLink("Partnership", selected.name)}>
              Discuss This Project
            </ButtonLink>
          </div>
        </Modal>
      )}
    </>
  );
}
