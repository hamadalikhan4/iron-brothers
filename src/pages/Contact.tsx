import { useState, useEffect, type FormEvent } from "react";
import { MapPin, Mail, ArrowRight, Download, CheckCircle2 } from "lucide-react";
import { company, inquiryTypes, sites } from "../data";
import { useRoute, navigate } from "../router";
import { PageHero, SectionTitle, Filters } from "../components/UI";
const endpoint = import.meta.env.VITE_INQUIRY_ENDPOINT?.trim();
export function Contact() {
  const { search } = useRoute();
  const params = new URLSearchParams(search);
  const initialType = params.get("type") || "General Inquiry";
  const subject = params.get("subject") || "";
  const [type, setType] = useState(
    inquiryTypes.includes(initialType) ? initialType : "General Inquiry",
  );
  const [status, setStatus] = useState<
    "idle" | "pending" | "sent" | "downloaded" | "error"
  >("idle");
  const [error, setError] = useState("");
  useEffect(() => {
    const value = new URLSearchParams(search).get("type") || "General Inquiry";
    setType(inquiryTypes.includes(value) ? value : "General Inquiry");
  }, [search]);
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    const data = Object.fromEntries(new FormData(form));
    if (String(data.website || "")) return;
    delete data.website;
    setStatus("pending");
    setError("");
    if (!endpoint) {
      const content = `IRON BROTHERS — INQUIRY DRAFT\nNot submitted online\n\n${Object.entries(
        data,
      )
        .map(([k, v]) => `${k}: ${v}`)
        .join("\n\n")}\n`;
      const url = URL.createObjectURL(
        new Blob([content], { type: "text/plain;charset=utf-8" }),
      );
      const a = document.createElement("a");
      a.href = url;
      a.download = "iron-brothers-inquiry.txt";
      a.click();
      window.setTimeout(() => URL.revokeObjectURL(url), 1000);
      setStatus("downloaded");
      return;
    }
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        signal: AbortSignal.timeout(15000),
      });
      if (!response.ok) throw new Error("Unable to submit");
      const result = await response.json();
      if (result.accepted !== true || typeof result.inquiryId !== "string")
        throw new Error("Unconfirmed delivery");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
      setError(
        "Your inquiry was not confirmed. Please try again. Your entries have been kept.",
      );
    }
  }
  return (
    <>
      <PageHero
        label="Contact us"
        title="Let’s Build the Next Opportunity"
        description="Mining opportunities, mine leasing, import partnerships or investment discussions — start a conversation with our team."
      />
      <section className="section">
        <div className="container">
          <Filters
            values={inquiryTypes}
            selected={type}
            onChange={(value) => {
              setType(value);
              const next = new URLSearchParams(search);
              next.set("type", value);
              navigate(`/contact?${next}`);
            }}
            label="Inquiry category"
          />
          <div className="contact-grid">
            <aside>
              <SectionTitle
                label="Reach out"
                title="We’re Here to Help You Grow"
                description="Tell us what you are looking for, and help us connect you with the right opportunity."
              />
              <div className="contact-detail">
                <MapPin />
                <div>
                  <small>OUR REGION</small>
                  <strong>{company.region}</strong>
                  <p>Mining · Minerals · Trade</p>
                </div>
              </div>
              {company.email && (
                <div className="contact-detail">
                  <Mail />
                  <div>
                    <small>EMAIL</small>
                    <a href={`mailto:${company.email}`}>{company.email}</a>
                  </div>
                </div>
              )}
              <div className="contact-landscape">
                <span>
                  Rooted in the mountains.
                  <br />
                  Connected to the world.
                </span>
              </div>
            </aside>
            <form className="inquiry-form" onSubmit={submit}>
              <h2>Send an Inquiry</h2>
              <p>Share your requirements with our team.</p>
              {!endpoint && (
                <div className="form-notice">
                  Online submission is not available yet. You can prepare and
                  download your inquiry below.
                </div>
              )}
              <div className="form-grid">
                <label>
                  Full Name <span>*</span>
                  <input
                    name="name"
                    autoComplete="name"
                    required
                    maxLength={100}
                  />
                </label>
                <label>
                  Company
                  <input
                    name="company"
                    autoComplete="organization"
                    maxLength={150}
                  />
                </label>
                <label>
                  Email <span>*</span>
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={254}
                  />
                </label>
                <label>
                  Phone / WhatsApp
                  <input
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    maxLength={40}
                  />
                </label>
                <label>
                  Country
                  <input
                    name="country"
                    autoComplete="country-name"
                    maxLength={100}
                  />
                </label>
                <label>
                  Inquiry Type
                  <select
                    name="type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  >
                    {inquiryTypes.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </label>
                {type === "Mine Leasing" && (
                  <>
                    <label>
                      Interested Mine Area
                      <select
                        name="mineArea"
                        defaultValue={
                          sites.some((s) => s.name === subject) ? subject : ""
                        }
                      >
                        <option value="">Select an area</option>
                        {sites.map((s) => (
                          <option key={s.id}>{s.name}</option>
                        ))}
                        <option>General Inquiry</option>
                      </select>
                    </label>
                    <label>
                      Investment Interest
                      <select name="investmentInterest">
                        <option value="">Select an interest</option>
                        {[
                          "Mine Area Lease",
                          "Joint Venture",
                          "Investment",
                          "Exploration Partnership",
                          "Other",
                        ].map((t) => (
                          <option key={t}>{t}</option>
                        ))}
                      </select>
                    </label>
                  </>
                )}
                <label className="full">
                  Subject
                  <input
                    name="subject"
                    defaultValue={subject}
                    maxLength={200}
                  />
                </label>
                <label className="full">
                  Message <span>*</span>
                  <textarea
                    name="message"
                    required
                    minLength={10}
                    maxLength={5000}
                    rows={5}
                    placeholder="Tell us about your requirements, preferred site or product, and timeline…"
                  />
                </label>
              </div>
              <div className="honey" aria-hidden="true">
                <label>
                  Website
                  <input name="website" tabIndex={-1} autoComplete="off" />
                </label>
              </div>
              <label className="consent">
                <input type="checkbox" name="consent" value="yes" required />
                <span>
                  I agree to share these details with Iron Brothers for
                  responding to my inquiry.
                </span>
              </label>
              <button className="button submit" disabled={status === "pending"}>
                {status === "pending"
                  ? "Processing…"
                  : endpoint
                    ? "Send Inquiry"
                    : "Download Inquiry Draft"}
                {endpoint ? <ArrowRight size={17} /> : <Download size={17} />}
              </button>
              {status === "sent" && (
                <p className="form-success" role="status">
                  <CheckCircle2 size={18} />
                  Your inquiry has been received.
                </p>
              )}
              {status === "downloaded" && (
                <p className="form-success" role="status">
                  Your inquiry draft was downloaded. It has not been sent to
                  Iron Brothers.
                </p>
              )}
              {error && (
                <p className="form-error" role="alert">
                  {error}
                </p>
              )}
              <small className="muted">
                Fields marked * are required. Please do not include confidential
                documents or financial details.
              </small>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
