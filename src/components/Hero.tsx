import { motion } from 'framer-motion';
import { ArrowDownRight, Mail } from 'lucide-react';
import { site, real } from '../content';
import { scrollToSection } from '../lib/hooks';

export default function Hero() {
  const name = real(site.name) || site.name;

  return (
    <section id="home" className="hero section">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-orb hero-orb-a" />
        <div className="hero-orb hero-orb-b" />
        <div className="hero-grid" />
        <svg className="hero-core" viewBox="0 0 400 400" fill="none">
          <defs>
            <radialGradient id="core-glow">
              <stop offset="0" stopColor="#3fe0ff" />
              <stop offset="1" stopColor="#3fe0ff" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="200" cy="200" r="90" fill="url(#core-glow)" opacity=".55" />
          <circle cx="200" cy="200" r="28" fill="#3fe0ff" />
          <polygon
            points="200,100 280,145 280,235 200,280 120,235 120,145"
            stroke="#3fe0ff"
            strokeOpacity=".5"
            fill="none"
          />
          <ellipse
            cx="200"
            cy="200"
            rx="150"
            ry="48"
            stroke="#9fb4ff"
            strokeOpacity=".4"
            transform="rotate(-18 200 200)"
            fill="none"
          />
          <ellipse
            cx="200"
            cy="200"
            rx="170"
            ry="62"
            stroke="#c9bbff"
            strokeOpacity=".25"
            transform="rotate(28 200 200)"
            fill="none"
          />
        </svg>
      </div>

      <div className="container hero-content">
        <motion.p
          className="hero-eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {site.title}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          {name}
        </motion.h1>

        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16 }}
        >
          {site.tagline}
        </motion.p>

        {site.availability && (
          <motion.p
            className="hero-status"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.28 }}
          >
            <span className="status-dot" />
            {site.availability}
          </motion.p>
        )}

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.32 }}
        >
          <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
            View projects
            <ArrowDownRight size={18} aria-hidden="true" />
          </button>
          <button className="btn btn-ghost" onClick={() => scrollToSection('contact')}>
            <Mail size={18} aria-hidden="true" />
            Contact
          </button>
        </motion.div>
      </div>
    </section>
  );
}
