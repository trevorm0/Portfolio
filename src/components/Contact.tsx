import { useState, type FormEvent } from 'react';
import { Mail, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { site, real } from '../content';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const formspreeId = import.meta.env.VITE_FORMSPREE_ID as string | undefined;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formspreeId) {
      setStatus('error');
      return;
    }
    setStatus('sending');
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('sent');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

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
            Open to attachment opportunities. Drop a message or reach out
            directly.
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

        <form className="contact-form" onSubmit={onSubmit}>
          <label>
            Name
            <input name="name" type="text" required autoComplete="name" />
          </label>
          <label>
            Email
            <input name="email" type="email" required autoComplete="email" />
          </label>
          <label>
            Message
            <textarea name="message" rows={5} required />
          </label>
          <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
            <Send size={16} />
            {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Sent' : 'Send message'}
          </button>
          {status === 'error' && (
            <p className="form-note error">
              {formspreeId
                ? 'Something went wrong. Try again or email me directly.'
                : 'Add VITE_FORMSPREE_ID to .env to enable the form.'}
            </p>
          )}
          {status === 'sent' && <p className="form-note success">Thanks — I’ll get back to you soon.</p>}
        </form>
      </div>
    </section>
  );
}
