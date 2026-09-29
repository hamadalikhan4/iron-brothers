import {
  Mountain,
  Pickaxe,
  Globe2,
  Handshake,
  Ship,
  MapPin,
} from "lucide-react";
import { photos, services, sites, minerals, products } from "../data";
import { Link } from "../router";
import {
  Eyebrow,
  ButtonLink,
  SectionTitle,
  Card,
  Photo,
  Tags,
} from "../components/UI";
export function Home() {
  return (
    <>
      <section
        className="home-hero"
        style={{
          backgroundImage: `linear-gradient(90deg,rgba(9,31,26,.8),rgba(9,31,26,.4)),linear-gradient(0deg,rgba(9,31,26,.7),transparent),url('${photos.hero}')`,
        }}
      >
        <div className="container hero-content">
          <Eyebrow>Building value from the earth</Eyebrow>
          <h1 tabIndex={-1}>
            Mining Resources.
            <br />
            <em>Creating Global</em>
            <br />
            Opportunities.
          </h1>
          <p>
            Iron Brothers connects valuable mineral resources, mining
            opportunities, mine leasing and international trade to create
            sustainable business opportunities across Pakistan and the global
            market.
          </p>
          <div className="actions">
            <ButtonLink href="/mining">Explore Our Mining</ButtonLink>
            <ButtonLink href="/mine-sites" outline>
              View Mine Sites
            </ButtonLink>
          </div>
          <div className="hero-chips">
            {[
              [Pickaxe, "Mining & Minerals", "/mining"],
              [Mountain, "Mine Leasing", "/leasing"],
              [Ship, "Import & Trading", "/trading"],
              [Globe2, "Global Expansion", "/contact?type=Partnership"],
            ].map(([Icon, label, href]) => {
              const I = Icon as typeof Pickaxe;
              return (
                <Link key={String(label)} href={String(href)}>
                  <I size={16} />
                  {String(label)}
                </Link>
              );
            })}
          </div>
        </div>
        <span className="scroll-hint">
          SCROLL TO EXPLORE <span>↓</span>
        </span>
      </section>
      <section className="section reach">
        <div className="container">
          <SectionTitle
            label="Our reach"
            title="Iron Brothers by the Numbers"
          />
          <div className="stats">
            {[
              ["4+", "Mine areas", "Across Gilgit-Baltistan"],
              ["6+", "Business lines", "Mining, trading and leasing"],
              ["100+", "Opportunities", "Minerals and product categories"],
              ["1", "Home region", "Pakistan. Global ambition."],
            ].map(([v, l, d]) => (
              <div key={l}>
                <strong>{v}</strong>
                <h3>{l}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <div className="story-photo">
            <Photo
              src={photos.mountain}
              alt="Mountain landscape from the reference design"
            />
            <div className="photo-caption">
              <MapPin size={19} />
              <div>
                <small>BASED IN</small>
                <strong>Gilgit-Baltistan, Pakistan</strong>
              </div>
            </div>
          </div>
          <div>
            <SectionTitle
              label="About Iron Brothers"
              title="From Natural Resources to Global Opportunities"
              description="We operate at the intersection of mining, minerals, mine-area leasing and international trade, connecting the natural resources of Pakistan’s mountain regions with global markets."
            />
            <div className="feature-list">
              {[
                [
                  Pickaxe,
                  "Resource",
                  "Discovering and developing mineral opportunities.",
                ],
                [
                  Handshake,
                  "Opportunity",
                  "Connecting mine areas with qualified partners.",
                ],
                [
                  Globe2,
                  "Global Trade",
                  "Building international networks for sustainable growth.",
                ],
              ].map(([Icon, title, desc]) => {
                const I = Icon as typeof Pickaxe;
                return (
                  <div key={String(title)}>
                    <span>
                      <I size={21} />
                    </span>
                    <div>
                      <h3>{String(title)}</h3>
                      <p>{String(desc)}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <ButtonLink href="/about">Discover Our Story</ButtonLink>
          </div>
        </div>
      </section>
      <section className="section soft">
        <div className="container">
          <SectionTitle
            label="Our business"
            title="Integrated Mining, Leasing & Global Trade Solutions"
            description="From mineral exploration to international trade, discover our services across the natural resources value chain."
          />
          <div className="grid three">
            {services.map((s, i) => (
              <Card
                key={s.title}
                title={s.title}
                photo={s.photo}
                description={s.description}
                href={s.link}
                cta={s.cta}
                label={`0${i + 1}`}
              >
                <Tags items={s.tags} />
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="section dark">
        <div className="container">
          <div className="section-row">
            <SectionTitle
              label="Our mine sites"
              title="Exploring Opportunities Across Mountain Regions"
              description="Discover our areas of interest across Gilgit-Baltistan, Pakistan."
            />
            <ButtonLink href="/mine-sites" outline>
              Explore All Sites
            </ButtonLink>
          </div>
          <div className="grid four">
            {sites.map((s) => (
              <Link
                className="site-tile"
                href={`/mine-sites/${s.id}`}
                key={s.id}
              >
                <Photo src={s.photo} alt={s.name} />
                <div>
                  <span>GILGIT-BALTISTAN</span>
                  <h3>{s.name}</h3>
                  <p>Explore site →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <div>
            <SectionTitle
              label="Mining & minerals"
              title="Unlocking the Value Beneath the Mountains"
              description="Explore mineral categories and opportunities for qualified buyers, investors and partners."
            />
            <Tags items={minerals.map((m) => m.name)} />
            <ButtonLink href="/mining">Explore Mining & Minerals</ButtonLink>
          </div>
          <div className="mineral-mosaic">
            {minerals.slice(1, 5).map((m) => (
              <Link href={`/mining#${m.name.toLowerCase()}`} key={m.name}>
                <Photo src={m.photo} alt={m.name} />
                <span>{m.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section soft">
        <div className="container">
          <SectionTitle
            label="Import & trading"
            title="Connecting Markets. Moving Opportunities."
            description="Products and sourcing opportunities across international supply chains and local distribution."
          />
          <div className="pipeline">
            {["Source", "Import", "Distribution", "Market"].map((x, i) => (
              <div key={x}>
                <span>0{i + 1}</span>
                <h3>{x}</h3>
              </div>
            ))}
          </div>
          <div className="grid three compact-products">
            {products.slice(0, 3).map((p) => (
              <Card
                key={p.name}
                title={p.category}
                photo={p.photo}
                href="/trading"
                cta="Explore products"
              />
            ))}
          </div>
          <div className="center">
            <ButtonLink href="/trading">Explore Import & Trading</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
