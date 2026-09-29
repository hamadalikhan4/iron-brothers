import { useState } from "react";
import { UserRound } from "lucide-react";
import { roles, inquiryLink } from "../data";
import { PageHero, SectionTitle, Filters, ButtonLink } from "../components/UI";
export function Team() {
  const [group, setGroup] = useState("Leadership");
  return (
    <>
      <PageHero
        label="Our team"
        title="The People Behind Iron Brothers"
        description="Building a professional team across mining, operations and international trade."
      />
      <section className="section">
        <div className="container">
          <Filters
            values={[
              "Leadership",
              "Management",
              "Technical Team",
              "Trading Team",
            ]}
            selected={group}
            onChange={setGroup}
          />
          <SectionTitle
            label="Our people"
            title={group === "Leadership" ? "Leadership Team" : group}
          />
          <div className="grid three">
            {roles
              .filter((r) => r.group === group)
              .map((r) => (
                <article className="card team-card" key={r.role}>
                  <div className="team-avatar">
                    <UserRound size={64} strokeWidth={1} />
                    <span>PROFILE COMING SOON</span>
                  </div>
                  <div className="card-body">
                    <span className="kicker">{r.group}</span>
                    <h3>{r.role}</h3>
                    <p>{r.description}</p>
                  </div>
                </article>
              ))}
          </div>
          <div className="join-panel">
            <h2>Join Iron Brothers</h2>
            <p>
              Bring your expertise in mining, trade or operations. We’d love to
              connect.
            </p>
            <ButtonLink
              href={inquiryLink("General Inquiry", "Career opportunity")}
            >
              Get In Touch
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
