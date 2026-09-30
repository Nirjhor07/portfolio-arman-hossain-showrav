"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "./Section";
import SpotlightCard from "./ui/SpotlightCard";
import { certifications } from "@/data/portfolioData";
import { Search, Award, Calendar, Hash, X, CheckCircle2 } from "lucide-react";

const categories = [
  "All",
  "Clinical",
  "Safety",
  "Compliance",
  "Professional Development",
];

export default function Certifications() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedCert, setSelectedCert] = useState(null);

  // Filter certifications based on search term and category
  const filteredCerts = certifications.filter((cert) => {
    const matchesCategory =
      activeCategory === "All" || cert.category === activeCategory;
    const matchesSearch =
      cert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="certifications" className="w-full">
      <Section
        id="certifications-inner"
        title="Professional Credentials"
        subtitle="Certifications & Licensing"
      >
        {/* Search & Filter Controls Panel */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-10 w-full">
          {/* Categories Tab Row */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase border transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-primary text-black border-primary shadow-lg shadow-primary/20"
                    : "bg-foreground/5 text-on-surface-variant border-foreground/5 hover:border-foreground/20 hover:text-display"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input Card */}
          <div className="relative w-full md:w-80">
            <span className="absolute inset-y-0 left-4 flex items-center text-on-surface-variant pointer-events-none">
              <Search className="w-4 h-4" />
            </span>
            <input
              type="text"
              placeholder="Search credentials..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-2.5 rounded-full text-xs font-medium bg-foreground/5 border border-foreground/5 hover:border-foreground/10 focus:border-primary/40 focus:bg-foreground/10 outline-none text-display transition-all duration-300"
            />
          </div>
        </div>

        {/* Grid List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={cert.name}
                onClick={() => setSelectedCert(cert)}
                className="cursor-pointer group"
              >
                <SpotlightCard
                  className="border border-foreground/5 p-6 h-full flex flex-col justify-between hover:border-primary/20 transition-all duration-300 bg-surface-dim/40 rounded-2xl relative"
                  spotlightColor={
                    idx % 2 === 0
                      ? "rgba(56, 189, 248, 0.05)"
                      : "rgba(13, 148, 136, 0.05)"
                  }
                >
                  <div>
                    {/* Badge Icon & Category */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                        <Award className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded bg-foreground/5 border border-foreground/5 text-on-surface-variant">
                        {cert.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-display font-bold text-display group-hover:text-primary transition-colors duration-300 mb-2 leading-snug line-clamp-2">
                      {cert.name}
                    </h3>

                    {/* Issuer */}
                    <p className="text-xs text-on-surface-variant font-light mb-4">
                      {cert.issuer}
                    </p>
                  </div>

                  {/* Issue Date Footer */}
                  <div className="flex items-center gap-2 pt-4 border-t border-foreground/5 text-on-surface-variant/80 text-[10px] font-medium uppercase tracking-wider">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    <span>Issued {cert.date}</span>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Empty Search Result Fallback */}
          {filteredCerts.length === 0 && (
            <div className="col-span-full py-20 text-center glass-card border border-foreground/5 rounded-2xl">
              <Award className="w-12 h-12 text-on-surface-variant/40 mx-auto mb-4" />
              <h4 className="text-base font-display font-bold text-display mb-1">
                No credentials found
              </h4>
              <p className="text-xs text-on-surface-variant font-light">
                Try adjusting your filters or search terms.
              </p>
            </div>
          )}
        </div>

        {/* Credentials Overlay Modal */}
        <AnimatePresence>
          {selectedCert && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-3 sm:px-6 py-4 sm:py-0">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedCert(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ type: "spring", damping: 25, stiffness: 350 }}
                className="relative w-full max-w-2xl sm:max-w-4xl glass-card bg-surface-dim border border-foreground/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl z-10 text-left overflow-hidden max-h-[90vh] sm:max-h-none overflow-y-auto sm:overflow-y-visible"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full border border-foreground/5 hover:border-foreground/20 bg-foreground/5 text-on-surface-variant hover:text-display transition-colors duration-300 flex items-center justify-center z-20"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Content Grid - Certificate Image + Details */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                  {/* Certificate Image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="flex items-center justify-center bg-black/20 rounded-xl sm:rounded-2xl border border-foreground/10 overflow-hidden min-h-60 sm:min-h-80"
                  >
                    <img
                      src={`/images/${selectedCert.imageLink}`}
                      alt={selectedCert.name}
                      className="w-full h-full max-h-64 sm:max-h-96 object-contain p-2 sm:p-4"
                    />
                  </motion.div>

                  {/* Details Section */}
                  <div className="flex flex-col justify-between gap-4">
                    {/* Badge Indicator */}
                    <div className="space-y-3 sm:space-y-4">
                      <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider">
                        <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        Verified Certification
                      </div>

                      {/* Title */}
                      <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-display leading-tight">
                        {selectedCert.name}
                      </h3>

                      {/* Issuer */}
                      <p className="text-xs sm:text-sm font-medium text-primary">
                        {selectedCert.issuer}
                      </p>

                      {/* Details list */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 py-3 sm:py-4 px-3 sm:px-4 rounded-lg sm:rounded-xl border border-foreground/5 bg-foreground/[0.02]">
                        <div className="flex flex-col">
                          <span className="text-[8px] sm:text-[10px] uppercase font-bold tracking-widest text-on-surface-variant mb-1 flex items-center gap-1">
                            <Calendar className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-tertiary" />{" "}
                            Issue Year
                          </span>
                          <span className="text-xs sm:text-xs font-semibold text-display">
                            {selectedCert.date}
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[8px] sm:text-[10px] uppercase font-bold tracking-widest text-on-surface-variant mb-1 flex items-center gap-1">
                            <Hash className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-tertiary" />{" "}
                            Credential ID
                          </span>
                          <span className="text-xs sm:text-xs font-mono font-semibold text-display truncate">
                            {selectedCert.credentialId}
                          </span>
                        </div>
                      </div>

                      {/* Syllabus Description */}
                      <div className="flex flex-col">
                        <h4 className="text-[8px] sm:text-xs uppercase font-bold tracking-widest text-on-surface-variant mb-2">
                          Scope of Competency
                        </h4>
                        <p className="text-xs sm:text-sm text-on-surface-variant font-light leading-relaxed">
                          {selectedCert.description}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Button */}
                    <div className="flex justify-end pt-3 sm:pt-4 border-t border-foreground/5">
                      <button
                        onClick={() => setSelectedCert(null)}
                        className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border border-foreground/10 hover:border-foreground/30 text-display font-semibold uppercase tracking-wider text-[10px] sm:text-xs bg-foreground/5 hover:bg-foreground/10 transition-all duration-300 whitespace-nowrap"
                      >
                        Close Window
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </Section>
    </section>
  );
}
