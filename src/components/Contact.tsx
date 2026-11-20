import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { site, real } from '../content';

export default function Contact() {
  const email = real(site.email);
  const github = real(site.social.github);
  const linkedin = real(site.social.linkedin);

  return (
    <section id="contact" className="section">
      <div className="container contact-grid">
        <div>
          <header className="section-head">
            <p className="eyebrow">Contact</p>
            <h2>Let’s talk</h2>
          </header>
          <p className="contact-lead">
            Open to attachment opportunities.
          </p>

          <div className="contact-links">
            {email && (
              <a href={`mailto:${email}`}>
                <Mail size={18} /> {email}
              </a>
            )}
            {github && (
              <a href={github} target="_blank" rel="noreferrer">
                <GithubIcon size={18} /> GitHub
              </a>
            )}
            {linkedin && (
              <a href={linkedin} target="_blank" rel="noreferrer">
                <LinkedinIcon size={18} /> LinkedIn
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}