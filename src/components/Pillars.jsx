import { motion } from 'framer-motion';
import { Compass, MessageSquare, Star, Map } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import styles from './Pillars.module.css';

const PILLARS = [
  {
    icon: Compass,
    title: 'Autoconhecimento e direcionamento',
    desc: 'Entenda seus objetivos pessoais e profissionais com clareza. O ponto de partida e saber quem voce e e o que realmente quer construir.',
  },
  {
    icon: MessageSquare,
    title: 'Preparacao para entrevistas',
    desc: 'Treino pratico e estruturado para entrevistas de estagio. Do pitch pessoal ao comportamento em dinâmicas de grupo.',
  },
  {
    icon: Star,
    title: 'Confianca e posicionamento',
    desc: 'Descubra o que torna voce unica e aprenda a comunicar isso com autenticidade — no curriculo, no LinkedIn e nas entrevistas.',
  },
  {
    icon: Map,
    title: 'Planejamento com proposito',
    desc: 'Trace um caminho claro para o futuro. Com metas realistas, acoes concretas e uma perspectiva estrategica sobre sua carreira.',
  },
];

export default function Pillars() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="mentoria" className={`section ${styles.section}`}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <p className={styles.label}>O que a mentoria cobre</p>
          <h2 className={styles.heading}>Os pilares do nosso trabalho</h2>
          <p className={styles.sub}>
            Cada sessao e construida em torno desses quatro eixos, adaptados
            ao momento e ao objetivo especifico de cada mentorada.
          </p>
        </motion.div>

        <div className={styles.grid} ref={ref}>
          {PILLARS.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              className={styles.card}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1, ease: 'easeOut' }}
            >
              <Icon size={24} className={styles.icon} aria-hidden="true" />
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardDesc}>{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
