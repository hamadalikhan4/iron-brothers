import { PageHero, SectionTitle, Card, ButtonLink } from "../components/UI";
import { minerals, inquiryLink } from "../data";
export function Mining() {
  return (
    <>
      <PageHero
        label="Mining & minerals"
        title="Unlocking the Value Beneath the Mountains"
        description="Mineral categories and exploration opportunities across Gilgit-Baltistan and beyond."
      />
      <section className="section">
        <div className="container">
          <SectionTitle
            label="Mineral categories"
            title="Mineral Opportunities"
            description="Presented for exploration and partnership. Site-specific mineral potential is subject to geological assessment and supporting documentation."
          />
          <div className="grid three">
            {minerals.map((m) => (
              <div id={m.name.toLowerCase()} key={m.name}>
                <Card
                  title={m.name}
                  photo={m.photo}
                  description={m.description}
                  href={inquiryLink("Mining Inquiry", m.name)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section soft">
        <div className="container">
          <SectionTitle
            label="Our process"
            title="From Exploration to Opportunity"
          />
          <div className="pipeline five">
            {[
              ["Explore", "Site identification"],
              ["Assess", "Geological review"],
              ["Develop", "Planning and preparation"],
              ["Mine", "Responsible operations"],
              ["Trade", "Connecting to markets"],
            ].map(([t, d], i) => (
              <div key={t}>
                <span>0{i + 1}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
          <div className="center">
            <ButtonLink href="/mine-sites">View Mine Sites</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
