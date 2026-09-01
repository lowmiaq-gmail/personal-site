"use client";

import { motion } from "framer-motion";
import { Github, Mail, ExternalLink } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const packages = [
  { name: "fast-dotenv-rs", version: "0.1.1", pypi: "https://pypi.org/project/fast-dotenv-rs/" },
  { name: "fast-dotenv-rs-backend", version: "0.1.1", pypi: "https://pypi.org/project/fast-dotenv-rs-backend/" },
  { name: "fast-semver-rs", version: "0.1.1", pypi: "https://pypi.org/project/fast-semver-rs/" },
  { name: "fast-iso8601-rs", version: "0.1.0", pypi: "https://pypi.org/project/fast-iso8601-rs/" },
  { name: "fast-roman-rs", version: "0.1.0", pypi: "https://pypi.org/project/fast-roman-rs/" },
  { name: "fast-mdurl-rs", version: "0.1.0", pypi: "https://pypi.org/project/fast-mdurl-rs/" },
  { name: "fast-base58-rs", version: "0.1.0", pypi: "https://pypi.org/project/fast-base58-rs/" },
  { name: "fast-rfc3339-validator-rs", version: "0.1.0", pypi: "https://pypi.org/project/fast-rfc3339-validator-rs/" },
];

const upstreamContributions = [
  { repo: "python-semver", issue: "#474", url: "https://github.com/python-semver/python-semver/issues/474" },
  { repo: "python-dotenv", issue: "#693", url: "https://github.com/theskumar/python-dotenv/issues/693" },
  { repo: "python-dotenv", pr: "#694", url: "https://github.com/theskumar/python-dotenv/pull/694" },
];

const githubRepos = [
  "fast-dotenv-rs",
  "fast-semver-rs",
  "fast-iso8601-rs",
  "fast-roman-rs",
  "fast-mdurl-rs",
  "fast-base58-rs",
  "fast-rfc3339-validator-rs",
  "aep-completion-profile",
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.querySelectorAll(".hero-text"),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-32">
        <section ref={heroRef} className="mb-32">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="hero-text text-6xl font-bold tracking-tight md:text-8xl">
              Low M.
            </h1>
            <p className="hero-text text-xl text-gray-400 md:text-2xl max-w-2xl">
              Rewriting popular Python libraries<br />in Rust for AI infrastructure
            </p>
            <p className="hero-text text-lg text-gray-500 max-w-xl">
              Performance · Open Source · Contribution first
            </p>
            <div className="hero-text flex gap-6 pt-4">
              <a
                href="https://github.com/lowmiaq-gmail"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a
                href="mailto:lowmiaq@gmail.com"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Mail size={20} />
                <span>Contact</span>
              </a>
            </div>
          </motion.div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-32"
        >
          <h2 className="text-3xl font-bold mb-8 text-gray-200">Published Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {packages.map((pkg, index) => (
              <motion.a
                key={pkg.name}
                href={pkg.pypi}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="group relative border border-gray-800 bg-gray-900/30 p-6 rounded-lg hover:border-gray-600 transition-all"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-mono text-lg font-semibold text-gray-100 group-hover:text-white transition-colors">
                      {pkg.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">v{pkg.version}</p>
                  </div>
                  <ExternalLink size={16} className="text-gray-600 group-hover:text-gray-400 transition-colors" />
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-xs text-gray-600">PyPI</span>
                </div>
              </motion.a>
            ))}
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-300">GitHub Repositories</h3>
            <div className="flex flex-wrap gap-2">
              {githubRepos.map((repo) => (
                <a
                  key={repo}
                  href={`https://github.com/lowmiaq-gmail/${repo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-mono bg-gray-900 border border-gray-800 rounded-md hover:border-gray-600 hover:bg-gray-800 transition-all"
                >
                  {repo}
                  <ExternalLink size={12} />
                </a>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-32"
        >
          <h2 className="text-3xl font-bold mb-8 text-gray-200">Upstream Contributions</h2>
          <div className="space-y-4">
            {upstreamContributions.map((contrib, index) => (
              <motion.a
                key={contrib.url}
                href={contrib.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                className="group flex items-center justify-between border border-gray-800 bg-gray-900/30 p-5 rounded-lg hover:border-gray-600 transition-all"
              >
                <div className="flex items-center gap-4">
                  <Github size={20} className="text-gray-600" />
                  <div>
                    <span className="font-mono text-gray-100 group-hover:text-white transition-colors">
                      {contrib.repo}
                    </span>
                    <span className="ml-3 text-gray-500">
                      {contrib.issue || contrib.pr}
                    </span>
                  </div>
                </div>
                <ExternalLink size={16} className="text-gray-600 group-hover:text-gray-400 transition-colors" />
              </motion.a>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-200">Approach</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-gray-400 leading-relaxed">
              Providing faster, more reliable Rust native backends for the Python ecosystem.
              Rewriting critical libraries (dotenv, semver, iso8601, etc.) to pave the way for next-generation AI infrastructure.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed mt-4">
              Contribution first, technical credibility builds naturally. Monetization follows.
            </p>
          </div>
        </motion.section>

        <footer className="border-t border-gray-900 pt-8 pb-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <p>© 2026 Low M. Built with MIT-licensed open source template.</p>
            <div className="flex gap-6">
              <a href="https://github.com/lowmiaq-gmail" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
                GitHub
              </a>
              <a href="mailto:lowmiaq@gmail.com" className="hover:text-gray-400 transition-colors">
                Email
              </a>
            </div>
          </div>
        </footer>
      </div>

      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-black to-black opacity-50" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      </div>
    </main>
  );
}
