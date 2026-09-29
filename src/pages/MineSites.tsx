import { useState } from "react";
import { MapPin, ArrowLeft } from "lucide-react";
import { sites, inquiryLink } from "../data";
import { useRoute, Link } from "../router";
import {
  PageHero,
  SectionTitle,
  Photo,
  Tags,
  ButtonLink,
  Card,
  Eyebrow,
  Empty,
} from "../components/UI";
export function MineSites() {
  const { path } = useRoute();
  const slug = path.split("/")[2];
  const initial = sites.find((s) => s.id === slug);
  const [selected, setSelected] = useState(initial || sites[0]);
  if (slug && !initial)
    return (
      <>
        <PageHero
          label="Mine sites"
          title="Site not found"
          description="That mine site is not in our current directory."
        />
        <div className="container section">
          <ButtonLink href="/mine-sites">View all mine sites</ButtonLink>
        </div>
      </>
    );
  const current = initial || selected;
  return (
    <>
      <PageHero
        label="Mine sites"
        title={initial ? initial.name : "Our Mine Sites"}
        description={
          initial
            ? initial.detailLocation
            : "Exploring opportunities across the mountain regions of Gilgit-Baltistan, Pakistan."
        }
      />
      <section className="section">
        <div className="container">
          {!initial ? (
            <>
              <SectionTitle
                label="Site explorer"
                title="Gilgit-Baltistan Mine Areas"
                description="Select an area to view its mineral potential and inquiry options."
              />
              <div className="map-panel">
                <div className="map-label">
                  GILGIT-BALTISTAN, PAKISTAN
                  <small>Karakoram · Himalaya · Hindu Kush</small>
                </div>
                <svg
                  className="map-art"
                  viewBox="0 0 1000 400"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M0 300 120 110 230 270 390 30 530 230 680 80 820 240 930 100 1000 250V400H0Z"
                    fill="#dcd9cf"
                  />
                  <path
                    d="M0 380 210 230 350 330 540 180 710 300 860 230 1000 330V400H0Z"
                    fill="#cecec0"
                  />
                  <path
                    d="M250 0C300 130 520 220 500 400M750 0C700 160 770 260 650 400"
                    fill="none"
                    stroke="#bacbc9"
                    strokeWidth="4"
                  />
                </svg>
                {sites.map((s) => (
                  <button
                    className={`map-pin ${current.id === s.id ? "selected" : ""}`}
                    style={{ left: `${s.x}%`, top: `${s.y}%` }}
                    key={s.id}
                    aria-pressed={current.id === s.id}
                    onClick={() => setSelected(s)}
                  >
                    <span />
                    <strong>{s.name}</strong>
                  </button>
                ))}
                <small className="map-note">
                  Schematic explorer · not a geographic or cadastral map
                </small>
              </div>
            </>
          ) : (
            <Link className="text-link" href="/mine-sites">
              <ArrowLeft size={17} />
              All mine sites
            </Link>
          )}
          <article className="site-detail split" aria-live="polite">
            <div>
              <Eyebrow>{current.location}</Eyebrow>
              <h2>{current.name}</h2>
              <p className="location">
                <MapPin size={16} />
                {current.detailLocation}
              </p>
              <h3>Site overview</h3>
              <p>{current.description}</p>
              <h3>Mineral potential</h3>
              <Tags items={current.minerals} />
              <ButtonLink href={inquiryLink("Mine Leasing", current.name)}>
                Inquire About This Site
              </ButtonLink>
            </div>
            <div className="detail-photo">
              <Photo src={current.photo} alt={current.name} />
            </div>
          </article>
          <div className="grid four">
            {sites.map((s) => (
              <Card
                key={s.id}
                title={s.name}
                photo={s.photo}
                description={s.location}
                href={`/mine-sites/${s.id}`}
                cta="View Site Details"
              >
                <Tags items={s.minerals} />
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export function Leasing() {
  const [filter, setFilter] = useState("All");
  const visible = sites.filter((s) => filter === "All" || s.status === filter);
  return (
    <>
      <PageHero
        label="Mine area leasing"
        title="Explore Mining Opportunities"
        description="Selected mining-area opportunities for lease and partnership, connecting suitable locations with serious business partners."
      />
      <section className="section">
        <div className="container">
          <SectionTitle
            label="Mine opportunity directory"
            title="Available Opportunities"
            description="Reference listings for discussion. Current availability, mineral potential and lease terms must be confirmed with the team."
          />
          <div className="filters" role="group" aria-label="Opportunity status">
            {["All", "Available", "Under Review", "Partnership"].map((x) => (
              <button
                key={x}
                onClick={() => setFilter(x)}
                aria-pressed={filter === x}
                className={filter === x ? "selected" : ""}
              >
                {x}
              </button>
            ))}
          </div>
          <div className="grid two">
            {visible.map((s) => (
              <Card
                key={s.id}
                title={s.name}
                photo={s.photo}
                label={s.status}
                href={inquiryLink("Mine Leasing", s.name)}
                cta="Request Details"
              >
                <dl>
                  <div>
                    <dt>Location</dt>
                    <dd>{s.location}</dd>
                  </div>
                  <div>
                    <dt>Opportunity</dt>
                    <dd>{s.type}</dd>
                  </div>
                  <div>
                    <dt>Mineral potential</dt>
                    <dd>{s.minerals.join(", ")}</dd>
                  </div>
                </dl>
              </Card>
            ))}
          </div>
          {!visible.length && (
            <Empty>No opportunities match this selection.</Empty>
          )}
        </div>
      </section>
    </>
  );
}
