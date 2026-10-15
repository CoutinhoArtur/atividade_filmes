import { useState } from "react";

const links = [
  { label: "Filmes", href: "/" },
  { label: "Categoria", href: "/" },
  { label: "Sobre", href: "/" },
  { label: "Contato", href: "/" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <h1>MovieCity</h1>
      </div>

      <nav className={`navigation ${menuOpen ? "open" : ""}`}>
        <ul>
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="header-actions">
        <div className="btn">
          <button type="button">Login</button>
        </div>

        <button
          type="button"
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Header;