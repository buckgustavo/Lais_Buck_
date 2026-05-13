import { ExternalLink, Mail, MessageCircle } from 'lucide-react';
import styles from './Footer.module.css';

const NAV = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Mentoria', href: '#mentoria' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <a href="#inicio" className={styles.logo}>
            <span className={styles.logoName}>Lais Buck</span>
            <span className={styles.logoSub}>Mentoria de Carreira</span>
          </a>
          <p className={styles.tagline}>
            Apoiando universitarias a conquistar o primeiro passo
            na carreira com confianca e clareza.
          </p>
        </div>

        <nav className={styles.nav} aria-label="Links rapidos no rodape">
          <p className={styles.navTitle}>Links rapidos</p>
          <ul className={styles.navList}>
            {NAV.map((l) => (
              <li key={l.href}>
                <a href={l.href} className={styles.navLink}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.contact}>
          <p className={styles.navTitle}>Contato</p>
          <a
            href="mailto:laisbuck@gmail.com"
            className={styles.contactLink}
          >
            <Mail size={15} aria-hidden="true" />
            laisbuck@gmail.com
          </a>
          <a
            href="https://wa.me/5516992424117"
            className={styles.contactLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={15} aria-hidden="true" />
            (16) 99242-4117
          </a>
          <a
            href="https://www.linkedin.com/in/la%C3%ADs-guimar%C3%A3es-buck-654338107/"
            className={styles.contactLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={15} aria-hidden="true" />
            LinkedIn
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copy}>
          &copy; 2025 Lais Buck &middot; Mentoria de Carreira
        </p>
      </div>
    </footer>
  );
}
