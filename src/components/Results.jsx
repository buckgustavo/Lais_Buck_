import { motion } from 'framer-motion';
import { Users, Globe, Target, BarChart2 } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import styles from './Results.module.css';

const ITEMS = [
  {
    icon: Users,
    title: 'Liderança estrategica',
    desc: 'Coordena e desenvolve equipes de alta performance, com foco em colaboracao e resultados sustentaveis.',
  },
  {
    icon: Globe,
    title: 'Visao global',
    desc: 'Experiencia em multinacionais, atuando em ambientes diversos, internacionais e dinamicos.',
  },
  {
    icon: Target,
    title: 'Visao estrategica',
    desc: 'Apoia na clareza de objetivos, tomada de decisoes e no desenvolvimento do potencial de cada pessoa.',
  },
  {
    icon: BarChart2,
    title: 'Resultados que geram impacto',
    desc: 'Tomada de decisao baseada em dados, analise de indicadores e foco continuo em performance.',
  },
];

export default function Results() {
  const [ref, inView] = useInView(0.1);

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <p className={styles.label}>Diferenciais</p>
          <h2 className={styles.heading}>O que Lais traz para a sua jornada</h2>
        </motion.div>

        <ul className={styles.list} ref={ref}>
          {ITEMS.map(({ icon: Icon, title, desc }, i) => (
            <motion.li
              key={title}
              className={styles.item}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
            >
              <Icon size={22} className={styles.icon} aria-hidden="true" />
              <div className={styles.itemContent}>
                <h3 className={styles.itemTitle}>{title}</h3>
                <p className={styles.itemDesc}>{desc}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
