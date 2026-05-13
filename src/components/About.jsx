import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Briefcase, Globe, TrendingUp } from 'lucide-react';
import styles from './About.module.css';

const CREDENTIALS = [
  { icon: Briefcase, label: 'Cargo atual', value: 'Coordenadora de Cadeia de Suprimentos' },
  { icon: Globe, label: 'Experiencia', value: 'Multinacionais de grande porte' },
  { icon: TrendingUp, label: 'Foco', value: 'Liderança, performance e desenvolvimento de equipes' },
];

export default function About() {
  const [ref, inView] = useInView(0.15);

  return (
    <section id="sobre" className={`section ${styles.about}`}>
      <div className={`container ${styles.inner}`}>
        <motion.div
          ref={ref}
          className={styles.text}
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className={styles.label}>Sobre a mentora</p>
          <h2 className={styles.heading}>
            Trajetória construída com propósito
          </h2>
          <p className={styles.body}>
            Sou Laís Buck — coordenadora de cadeia de suprimentos com experiência em ambientes
            multinacionais, onde lidero equipes, tomo decisões baseadas em dados e busco
            resultados com impacto real.
          </p>
          <p className={styles.body}>
            Ao longo da carreira, percebi como a transição da universidade para o mercado pode
            ser desafiadora — especialmente para quem está começando. Não ter uma referência,
            não saber como se posicionar, não entender o que recrutadores realmente buscam.
          </p>
          <p className={styles.body}>
            Foi por isso que decidi ser mentora. Porque já estive aí. E porque acredito que
            com o suporte certo, cada universitária pode entrar no mercado com muito mais
            clareza, confiança e preparo.
          </p>

          <blockquote className={styles.quote}>
            "Você não precisa fazer esse caminho sozinha. Já estive aí. Sei como é.
            Posso te ajudar a enxergar novas possibilidades."
          </blockquote>
        </motion.div>

        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
        >
          <p className={styles.cardLabel}>Perfil profissional</p>
          <ul className={styles.credentialList}>
            {CREDENTIALS.map(({ icon: Icon, label, value }) => (
              <li key={label} className={styles.credentialItem}>
                <Icon size={18} className={styles.credIcon} aria-hidden="true" />
                <div>
                  <span className={styles.credLabel}>{label}</span>
                  <span className={styles.credValue}>{value}</span>
                </div>
              </li>
            ))}
          </ul>

          <div className={styles.divider} />

          <p className={styles.cardNote}>
            Com atuacao em empresas de alcance global, Lais traz uma visao de carreira
            que une estrategia, empatia e resultados concretos.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
