import { site, real } from '../content';

export default function Footer() {
  const year = new Date().getFullYear();
  const name = real(site.name) || site.name;

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {year} {name}
        </p>
        <p className="muted">Built with React · Vite · TypeScript</p>
      </div>
    </footer>
  );
}
