import { site, real, realList, education } from '../content';

export default function AboutSection() {
  const intro = site.about.intro.map(real).filter(Boolean);
  const interests = realList(site.about.interests);
  const learning = realList(site.about.currentlyLearning);
  const goals = real(site.about.goals);

  return (
    <section id="about" className="section">
      <div className="container">
        <header className="section-head">
          <p className="eyebrow">About</p>
          <h2>{site.about.headline}</h2>
        </header>

        <div className="about-grid">
          <div className="about-copy">
            {intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            {goals && <p className="about-goals">{goals}</p>}
          </div>

          <aside className="about-side">
            {interests.length > 0 && (
              <div className="about-block">
                <h3>Interests</h3>
                <ul className="chip-list">
                  {interests.map((t) => (
                    <li key={t} className="chip">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {education.length > 0 && (
              <div className="about-block">
                <h3>Education</h3>
                {education.map((e, i) => (
                  <div key={i} className="edu-item">
                    <strong>{real(e.institution) || e.institution}</strong>
                    <span>{real(e.qualification) || e.qualification}</span>
                    {real(e.period) && <span className="muted">{e.period}</span>}
                    {real(e.details) && <p className="muted">{e.details}</p>}
                  </div>
                ))}
              </div>
            )}

            {learning.length > 0 && (
              <div className="about-block">
                <h3>Currently learning</h3>
                <ul className="chip-list">
                  {learning.map((t) => (
                    <li key={t} className="chip chip-muted">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {site.about.approach.length > 0 && (
              <div className="about-block">
                <h3>Approach</h3>
                <ul className="approach-list">
                  {site.about.approach.map((a) => (
                    <li key={a.title}>
                      <strong>{a.title}</strong>
                      <span>{a.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}
