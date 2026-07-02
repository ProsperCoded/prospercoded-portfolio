"use client";

import React, { useState } from "react";
import Link from "next/link";
import { certifications } from "@/data/ResumeData";
import { specializations } from "@/data/SpecializationsData";
import { courses } from "@/data/CoursesData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

export default function CertificationsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const allSpecializations = Object.values(specializations);
  const nonEssentialCourses = Object.values(courses).filter((course) => !course.isEssential);

  // Filter specializations
  const filteredSpecializations = allSpecializations.filter(
    (spec) =>
      spec.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      spec.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      spec.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Filter resume certifications
  const filteredCertifications = certifications
    .filter(
      (cert) =>
        !allSpecializations.some(
          (spec) =>
            spec.name.toLowerCase().includes(cert.title.toLowerCase()) ||
            cert.title.toLowerCase().includes(spec.name.toLowerCase())
        )
    )
    .filter(
      (cert) =>
        cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.org.toLowerCase().includes(searchQuery.toLowerCase())
    );

  // Filter non-essential courses
  const filteredCourses = nonEssentialCourses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const hasResults =
    filteredSpecializations.length > 0 ||
    filteredCertifications.length > 0 ||
    filteredCourses.length > 0;

  return (
    <main className="min-h-screen bg-black text-gray-100 font-sans selection:bg-indigo-500/30">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 sm:py-20 relative">
        {/* Back Navigation */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-200 group mb-8 sm:mb-12"
        >
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1"
          />
          <span>Back to Home</span>
        </Link>

        {/* Header */}
        <header className="mb-10 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Credentials & Certifications
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            A comprehensive list of my professional specializations - certifications - and courses.
          </p>
        </header>

        {/* Search Bar */}
        <div className="mb-12 max-w-md">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search credentials - courses - or issuers..."
              className="w-full px-5 py-3.5 bg-gray-900/60 border border-gray-800 focus:border-indigo-500/50 rounded-2xl text-white placeholder-gray-500 focus:outline-none transition-all duration-300 backdrop-blur-md shadow-lg shadow-black/25 text-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 text-xs font-semibold px-2 py-1 rounded bg-gray-800/50 border border-gray-700/50"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Search results fallback */}
        {!hasResults && (
          <div className="text-center py-16 bg-gray-900/10 border border-dashed border-gray-800 rounded-2xl">
            <p className="text-gray-400 mb-2">No matching credentials found</p>
            <p className="text-gray-600 text-sm">Try searching for a different keyword or issuer</p>
          </div>
        )}

        {/* Section: Core Specializations */}
        {filteredSpecializations.length > 0 && (
          <section className="mb-16">
            <h2 className="text-xl sm:text-2xl font-bold text-white border-b border-gray-800 pb-4 mb-6 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"></span>
              Core Specializations
            </h2>

            <div className="grid gap-6">
              {filteredSpecializations.map((spec, index) => (
                <div
                  key={index}
                  className="group relative bg-gray-900/30 border border-gray-800 hover:border-gray-700 rounded-2xl p-6 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-200 mb-1">
                        {spec.name}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                        <span>{spec.issuer}</span>
                        <span>•</span>
                        <span>{spec.date}</span>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed max-w-3xl">
                        {spec.description}
                      </p>
                    </div>

                    {spec.links?.credentialUrl && (
                      <a
                        href={spec.links.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white font-medium text-xs rounded-xl transition-all duration-200 self-start border border-gray-700/50"
                      >
                        <span>Verify</span>
                        <FontAwesomeIcon icon={faExternalLinkAlt} className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Section: Professional Courses & Certifications */}
        {filteredCertifications.length > 0 && (
          <section className="mb-16">
            <h2 className="text-xl sm:text-2xl font-bold text-white border-b border-gray-800 pb-4 mb-6 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></span>
              Professional Certifications & Courses
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">
              {filteredCertifications.map((cert, index) => (
                <div
                  key={index}
                  className="group bg-gray-900/20 border border-gray-900 hover:border-gray-800 rounded-xl p-5 transition-all duration-300 hover:bg-gray-900/30"
                >
                  <div className="flex flex-col justify-between h-full gap-4">
                    <div>
                      <h3 className="text-base font-semibold text-white group-hover:text-indigo-400 transition-colors duration-200 mb-1 leading-snug">
                        {cert.title}
                      </h3>
                      <div className="text-xs text-gray-400">
                        {cert.org}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-800/50">
                      <span className="text-xs text-gray-500">{cert.date}</span>
                      {cert.link && cert.link !== "#" && (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
                        >
                          <span>Verify</span>
                          <FontAwesomeIcon icon={faExternalLinkAlt} className="w-2.5 h-2.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Section: Additional Specialized Training */}
        {filteredCourses.length > 0 && (
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-white border-b border-gray-800 pb-4 mb-6 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-gradient-to-b from-teal-500 to-emerald-500 rounded-full"></span>
              Additional Specialized Training
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">
              {filteredCourses.map((course, index) => (
                <div
                  key={index}
                  className="group bg-gray-900/20 border border-gray-900 hover:border-gray-800 rounded-xl p-5 transition-all duration-300 hover:bg-gray-900/30"
                >
                  <div className="flex flex-col justify-between h-full gap-4">
                    <div>
                      <h3 className="text-base font-semibold text-white group-hover:text-indigo-400 transition-colors duration-200 mb-1 leading-snug">
                        {course.name}
                      </h3>
                      <div className="text-xs text-gray-400 mb-3">
                        {course.issuer}
                      </div>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        {course.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-800/50">
                      <span className="text-xs text-gray-500">{course.date}</span>
                      {course.url && (
                        <a
                          href={course.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
                        >
                          <span>Verify</span>
                          <FontAwesomeIcon icon={faExternalLinkAlt} className="w-2.5 h-2.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
