import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import styles from './Process.module.css';

const STEPS = [
  {
    num: '01',
    title: 'Conversa inicial gratuita',
    desc: 'Uma conversa de 30 minutos para nos conhecermos, entender seus objetivos e avaliar como a mentoria pode te ajudar. Sem compromisso.',
  },
  {
    num: '02',
    title: 'Sessoes personalizadas',
    desc: 'Encontros individuais focados nos seus desafios especificos — autoconhecimento, posicionamento, preparacao para entrevistas e planejamento de carreira.',
  },
  {
    num: '03',
    title: 'Acompanhamento e resultado',
    desc: 'Suporte continuo entre sessoes, revisao de documentos e material de apoio para voce chegar ao proximo passo com confianca e clareza.',
  },
];

export default function Process() {
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
          <p className={styles.label}>Como funciona</p>
          <h2 className={styles.heading}>Tres etapas para a sua transformacao</h2>
        </motion.div>

        <div className={styles.steps} ref={ref}>
          {STEPS.map(({ num, title, desc }, i) => (
            <motion.div
              key={num}
              className={styles.step}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.13, ease: 'easeOut' }}
            >
              <span className={styles.num}>{num}</span>
              <div className={styles.connector} aria-hidden="true" />
              <h3 className={styles.stepTitle}>{title}</h3>
              <p className={styles.stepDesc}>{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
