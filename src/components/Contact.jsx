"use client";

import { useState } from "react";
import Section from "./Section";
import SpotlightCard from "./ui/SpotlightCard";
import MagneticButton from "./ui/MagneticButton";
import { Mail, MapPin, Phone, Send, ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          name: formState.name,
          email: formState.email,
          subject: formState.subject,
          message: formState.message,
          from_name: "Portfolio Contact",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormState({ name: "", email: "", subject: "", message: "" });
        }, 4000);
      } else {
        setError(result.message || "Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setError(
        "An error occurred. Please check your connection and try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section id="contact" title="Get In Touch" subtitle="Contact Me">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        {/* Left Column: Details */}
        <div className="lg:col-span-5 flex flex-col justify-between text-left gap-6">
          <div className="flex flex-col gap-6">
            <h3 className="text-xl md:text-3xl font-display font-bold text-display tracking-tight leading-tight">
              Let's connect.
            </h3>

            <p className="text-sm font-light text-on-surface-variant leading-relaxed">
              If you have any care support opportunities, want to request
              service details, or discuss community volunteer coordination, feel
              free to send a message. I am always happy to discuss how I can
              assist.
            </p>
          </div>

          {/* Contact Coordinates */}
          <div className="flex flex-col gap-3">
            {/* Phone item */}
            <div className="flex items-center gap-4 p-4 rounded-2xl border border-foreground/5 bg-surface-dim/30">
              <div className="w-10 h-10 rounded-xl bg-foreground/5 border border-foreground/5 flex items-center justify-center text-primary">
                <Phone className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
                  Call directly
                </span>
                <a
                  href={`tel:${personalInfo.socials.phone}`}
                  className="text-xs sm:text-sm font-semibold text-display hover:text-tertiary transition-colors duration-300"
                >
                  {personalInfo.socials.phone}
                </a>
              </div>
            </div>

            {/* Email item */}
            <div className="flex items-center gap-4 p-4 rounded-2xl border border-foreground/5 bg-surface-dim/30">
              <div className="w-10 h-10 rounded-xl bg-foreground/5 border border-foreground/5 flex items-center justify-center text-primary">
                <Mail className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
                  Write me
                </span>
                <a
                  href={`mailto:${personalInfo.socials.email}`}
                  className="text-xs sm:text-sm font-semibold text-display hover:text-tertiary transition-colors duration-300"
                >
                  {personalInfo.socials.email}
                </a>
              </div>
            </div>

            {/* Location item */}
            <div className="flex items-center gap-4 p-4 rounded-2xl border border-foreground/5 bg-surface-dim/30">
              <div className="w-10 h-10 rounded-xl bg-foreground/5 border border-foreground/5 flex items-center justify-center text-tertiary">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
                  Location
                </span>
                <span className="text-xs sm:text-sm font-semibold text-display">
                  15 Brenchley Close, TN23 5SP
                </span>
              </div>
            </div>
          </div>

          {/* Google Maps Iframe */}
          <div className="rounded-2xl overflow-hidden border border-foreground/5 h-48 w-full shadow-inner opacity-80 hover:opacity-100 transition-opacity duration-300">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.56942921074!2d-0.05260172337672288!3d51.52110297181617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761d3bf73cb109%3A0xe5a363db88caee31!2s106A%20Mile%20End%20Rd%2C%20London%20E1%204UN!5e0!3m2!1sen!2suk!4v1716123456789!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "grayscale(20%) contrast(100%) opacity(85%)",
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Quick legal/HUD disclaimer */}
          <span className="text-[10px] font-mono uppercase tracking-widest text-on-surface-variant/40 hidden lg:block">
            Secure connection active // SSL certified
          </span>
        </div>

        {/* Right Column: High Tech Glass Form */}
        <div className="lg:col-span-7 w-full">
          <SpotlightCard
            className="border border-foreground/10 p-6 md:p-8 flex flex-col justify-start h-full"
            spotlightColor="rgba(14, 165, 233, 0.05)"
          >
            {submitted ? (
              <div className="flex-1 flex flex-col justify-center items-center py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400 mb-6 animate-pulse">
                  <Send className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-display font-bold text-display mb-2">
                  Message Sent Successfully!
                </h4>
                <p className="text-xs text-on-surface-variant max-w-xs font-light">
                  Thank you for reaching out, Arman will get in touch with you
                  shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5 text-left w-full h-full"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="form-name"
                      className="text-[10px] font-mono uppercase tracking-widest text-on-surface-variant font-bold"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="form-name"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      placeholder="e.g. John Doe"
                      className="w-full bg-background border border-foreground/10 focus:border-primary/50 text-display rounded-xl px-4 py-3.5 text-sm outline-none transition-colors duration-300"
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="form-email"
                      className="text-[10px] font-mono uppercase tracking-widest text-on-surface-variant font-bold"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="form-email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      placeholder="e.g. john@example.com"
                      className="w-full bg-background border border-foreground/10 focus:border-primary/50 text-display rounded-xl px-4 py-3.5 text-sm outline-none transition-colors duration-300"
                    />
                  </div>
                </div>

                {/* Subject field */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="form-subject"
                    className="text-[10px] font-mono uppercase tracking-widest text-on-surface-variant font-bold"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="form-subject"
                    required
                    value={formState.subject}
                    onChange={(e) =>
                      setFormState({ ...formState, subject: e.target.value })
                    }
                    placeholder="e.g. Project Collaboration"
                    className="w-full bg-background border border-foreground/10 focus:border-primary/50 text-display rounded-xl px-4 py-3.5 text-sm outline-none transition-colors duration-300"
                  />
                </div>

                {/* Message field */}
                <div className="flex flex-col gap-2 flex-1">
                  <label
                    htmlFor="form-message"
                    className="text-[10px] font-mono uppercase tracking-widest text-on-surface-variant font-bold"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="form-message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    placeholder="Describe your project, timeline, or inquiries..."
                    className="w-full bg-background border border-foreground/10 focus:border-primary/50 text-display rounded-xl px-4 py-3.5 text-sm outline-none transition-colors duration-300 resize-none flex-1 min-h-[120px]"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  {error && (
                    <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs">
                      {error}
                    </div>
                  )}
                  <MagneticButton className="w-full sm:w-auto">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 bg-foreground hover:bg-tertiary text-background hover:text-black font-semibold uppercase tracking-wider text-xs px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-tertiary/20 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? "Sending..." : "Send Message"}
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </MagneticButton>
                </div>
              </form>
            )}
          </SpotlightCard>
        </div>
      </div>
    </Section>
  );
}
