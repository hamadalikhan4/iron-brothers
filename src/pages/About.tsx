import {
  ShieldCheck,
  Globe2,
  Leaf,
  Zap,
  Handshake,
  Mountain,
} from "lucide-react";
import {
  PageHero,
  SectionTitle,
  Photo,
  ButtonLink,
  Eyebrow,
} from "../components/UI";
import { photos } from "../data";
export function About() {
  return (
    <>
      <PageHero
        label="About Iron Brothers"
        title="From Natural Resources to Global Opportunities"
        description="Building a bridge between Pakistan’s natural wealth and global markets."
      />
      <section className="section">
        <div className="container split">
          <div className="story-photo">
            <Photo src={photos.mountain} alt="Mountain landscape" />
          </div>
          <div>
            <SectionTitle
              label="Our story"
              title="Building a Mining & Trading Company from Gilgit-Baltistan"
            />
            <p>
              Iron Brothers brings mining, minerals, mine-area leasing and
              international trade together under one vision: connecting the
              resource potential of Gilgit-Baltistan with organized business
              opportunity.
            </p>
            <p>
              Our approach focuses on qualified partnerships, responsible
              development and professional trade channels that create lasting
              value for the region.
            </p>
            <ButtonLink href="/contact">Connect With Us</ButtonLink>
          </div>
        </div>
      </section>
      <section className="section soft">
        <div className="container grid two">
          <article className="value-panel">
            <Eyebrow>Our vision</Eyebrow>
            <h2>A Globally Recognized Mining Company</h2>
            <p>
              Connect Pakistan’s natural resources with international
              opportunity, creating sustainable value for communities and
              partners.
            </p>
          </article>
          <article className="value-panel">
            <Eyebrow>Our mission</Eyebrow>
            <h2>Bridging Resources to Markets</h2>
            <p>
              Build transparent, professional connections between mineral
              resources, mining areas and global markets.
            </p>
          </article>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionTitle label="Brand values" title="What We Stand For" />
          <div className="grid three">
            {[
              [
                Mountain,
                "Powerful",
                "Ambition and purpose across every business line.",
              ],
              [
                Leaf,
                "Sustainable",
                "Responsible development and long-term value.",
              ],
              [
                Globe2,
                "Global",
                "Connecting regional resources to international opportunity.",
              ],
              [
                ShieldCheck,
                "Trustworthy",
                "Transparency and integrity in every relationship.",
              ],
              [
                Zap,
                "Innovative",
                "Modern approaches to exploration and trade.",
              ],
              [
                Handshake,
                "Reliable",
                "A dependable partner throughout the value chain.",
              ],
            ].map(([Icon, title, text]) => {
              const I = Icon as typeof Mountain;
              return (
                <article className="value-card" key={String(title)}>
                  <I />
                  <h3>{String(title)}</h3>
                  <p>{String(text)}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
