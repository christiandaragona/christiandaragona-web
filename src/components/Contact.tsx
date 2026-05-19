"use client";

import { useActionState } from "react";
import { submitContact, type FormState } from "@/app/actions";

const initial: FormState = { status: "idle" };

export default function Contact() {
  const [state, action, pending] = useActionState(submitContact, initial);

  return (
    <section id="contact" className="contact-strip">
      <div className="col-label">Get In Touch</div>
      <div className="contact-layout">
        <div className="contact-intro">
          <h2>Let&apos;s Talk.</h2>
          <p>
            Free consultation. No commitment. Tell me about your business and what you need —
            I&apos;ll come back with a clear scope and price, no pressure.
          </p>

          <div style={{ marginTop: "1.75rem" }}>
            <div className="contact-detail">
              <div className="contact-dot" />
              <span><strong>Location</strong> Saugerties, New York</span>
            </div>
            <div className="contact-detail">
              <div className="contact-dot" />
              <span><strong>Serves</strong> All of Ulster County & the Catskills</span>
            </div>
            <div className="contact-detail">
              <div className="contact-dot" />
              <span><strong>Phone</strong> <a href="tel:8453800344" style={{ color: "inherit", textDecoration: "none" }}>(845) 380-0344</a></span>
            </div>
            <div className="contact-detail">
              <div className="contact-dot" />
              <span><strong>Email</strong> christian.p.daragona@outlook.com</span>
            </div>
            <div className="contact-detail">
              <div className="contact-dot" />
              <span><strong>Response</strong> Within 24 hours</span>
            </div>
          </div>
        </div>

        <form action={action}>
          <div className="form-grid">
            <div className="form-field">
              <label htmlFor="name">Your Name</label>
              <input id="name" name="name" type="text" placeholder="Jane Smith" required />
            </div>
            <div className="form-field">
              <label htmlFor="business">Business Name</label>
              <input id="business" name="business" type="text" placeholder="The Red Barn Café" />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email Address</label>
              <input id="email" name="email" type="email" placeholder="jane@example.com" required />
            </div>
            <div className="form-field">
              <label htmlFor="phone">Phone (optional)</label>
              <input id="phone" name="phone" type="tel" placeholder="(845) 555-0100" />
            </div>
            <div className="form-field">
              <label htmlFor="service">What are you interested in?</label>
              <select id="service" name="service">
                <option value="">— Select a service —</option>
                <option value="Website">Website Design</option>
                <option value="Domain">Domain Registration / Management</option>
                <option value="App">Custom App / Web App</option>
                <option value="All">All of the above</option>
                <option value="Not sure">Not sure yet — let's talk</option>
              </select>
            </div>
            <div className="form-field full">
              <label htmlFor="message">Tell me about your project</label>
              <textarea
                id="message"
                name="message"
                placeholder="What does your business do, what's missing from your online presence, and what would you love to have?"
                required
              />
            </div>

            {state.status === "success" && (
              <div className="form-success">
                <p>Got it — I&apos;ll be in touch within 24 hours. Talk soon.</p>
              </div>
            )}

            {state.status === "error" && (
              <div className="form-error">
                {state.message ?? "Something went wrong. Email me directly at christian.p.daragona@outlook.com"}
              </div>
            )}

            {state.status !== "success" && (
              <button type="submit" className="form-submit" disabled={pending}>
                <span>{pending ? "Sending…" : "Send Message"}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
