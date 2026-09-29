import { useState } from "react";
import { Play } from "lucide-react";
import { gallery } from "../data";
import {
  PageHero,
  SectionTitle,
  Filters,
  Photo,
  Modal,
  Empty,
} from "../components/UI";
export function Media() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<(typeof gallery)[number] | null>(
    null,
  );
  const visible = gallery.filter(
    (p) => filter === "All" || p.category === filter,
  );
  return (
    <>
      <PageHero
        label="Media center"
        title="Iron Brothers Media"
        description="Our mountain regions, mineral opportunities and the Iron Brothers story in pictures."
      />
      <section className="section">
        <div className="container">
          <SectionTitle label="Media library" title="Explore Our Gallery" />
          <Filters
            values={[
              "All",
              "Mine Sites",
              "Mountains",
              "Minerals",
              "Machinery",
              "Trading",
              "Videos",
            ]}
            selected={filter}
            onChange={setFilter}
          />
          {filter === "Videos" ? (
            <Empty>
              <Play size={22} /> Company videos will appear here when published.
            </Empty>
          ) : (
            <div className="gallery-grid">
              {visible.map((p) => (
                <button
                  key={p.name}
                  className="gallery-item"
                  onClick={() => setSelected(p)}
                  aria-label={`Open image: ${p.name}`}
                >
                  <Photo src={p.photo} alt={p.name} />
                  <div>
                    <small>{p.category}</small>
                    <h3>{p.name}</h3>
                    <span>View image ↗</span>
                  </div>
                </button>
              ))}
            </div>
          )}
          <p className="media-note">
            Illustrative photography from the supplied design reference.
            Official site media will be added when available.
          </p>
        </div>
      </section>
      {selected && (
        <Modal title={selected.name} onClose={() => setSelected(null)}>
          <div className="lightbox-photo">
            <Photo src={selected.photo} alt={selected.name} eager />
          </div>
          <p>{selected.category}</p>
          <div className="actions">
            <button
              className="button outline-dark"
              onClick={() =>
                setSelected(
                  gallery[
                    (gallery.indexOf(selected) + gallery.length - 1) %
                      gallery.length
                  ],
                )
              }
            >
              ← Previous
            </button>
            <button
              className="button"
              onClick={() =>
                setSelected(
                  gallery[(gallery.indexOf(selected) + 1) % gallery.length],
                )
              }
            >
              Next →
            </button>
          </div>
        </Modal>
      )}
    </>
  );
}
