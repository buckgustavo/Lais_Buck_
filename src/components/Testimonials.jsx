import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import styles from './Testimonials.module.css';

const TESTIMONIALS = [
  {
    name: 'Beatriz Ferreira',
    area: 'Engenharia de Producao — UNESP',
    text: 'A mentoria com a Lais mudou completamente a minha relacao com entrevistas. Aprendi a falar sobre as minhas experiencias de um jeito que realmente conecta com o que as empresas buscam. Em tres semanas ja tinha uma oferta de estagio em maos.',
  },
  {
    name: 'Carolina Mendes',
    area: 'Administracao — FGV',
    text: 'Eu me sentia perdida sobre o que fazer depois da formatura. A Lais me ajudou a enxergar com clareza meus pontos fortes e a tratar o planejamento de carreira como algo real e possivel. Foi um divisor de aguas.',
  },
  {
    name: 'Mariana Oliveira',
    area: 'Comercio Exterior — UNIP',
    text: 'Nunca achei que conseguiria passar num processo seletivo de multinacional logo no inicio da carreira. A Lais me preparou para cada etapa, desde o curriculo ate a entrevista final. Hoje estou no estagio dos meus sonhos.',
  },
];

export default function Testimonials() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="depoimentos" className={`section ${styles.section}`}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <p className={styles.label}>Depoimentos</p>
          <h2 className={styles.heading}>O que dizem as mentoradas</h2>
        </motion.div>

        <div className={styles.grid} ref={ref}>
          {TESTIMONIALS.map(({ name, area, text }, i) => (
            <motion.article
              key={name}
              className={styles.card}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.12, ease: 'easeOut' }}
            >
              <span className={styles.openQuote} aria-hidden="true">&ldquo;</span>
              <p className={styles.text}>{text}</p>
              <footer className={styles.footer}>
                <span className={styles.name}>{name}</span>
                <span className={styles.area}>{area}</span>
              </footer>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
