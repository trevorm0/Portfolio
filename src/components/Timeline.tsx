import { milestones } from '../content';

export default function Timeline() {
  return (
    <section id="journey" className="section">
      <div className="container">
        <header className="section-head">
          <p className="eyebrow">Path</p>
          <h2>Journey</h2>
        </header>

        {milestones.length === 0 ? (
          <p className="muted">Add milestones in <code>src/content/journey.ts</code>.</p>
        ) : (
          <ol className="timeline">
            {milestones.map((m) => (
              <li key={m.id} className="timeline-item">
                <div className="timeline-marker" />
                <div className="timeline-body">
                  <time className="timeline-date">{m.date}</time>
                  <h3>{m.title}</h3>
                  <p>{m.description}</p>
                  {m.kind && <span className="chip chip-sm">{m.kind}</span>}
                </div>
              </li>
            ))}
          </ol>
        )}
      </div>
    </section>
  );
}
