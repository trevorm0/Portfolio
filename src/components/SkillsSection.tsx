import { skillCategories } from '../content';

export default function SkillsSection() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <header className="section-head">
          <p className="eyebrow">Capabilities</p>
          <h2>Skills</h2>
        </header>

        <div className="skills-grid">
          {skillCategories.map((cat) => (
            <div key={cat.id} className="skill-card">
              <h3>{cat.title}</h3>
              <ul>
                {cat.skills.map((s) => (
                  <li key={s.name}>
                    <span className="skill-name">{s.name}</span>
                    {s.note && <span className="skill-note muted">{s.note}</span>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
