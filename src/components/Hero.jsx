import { motion } from 'framer-motion';
import laisPhoto from '../assets/laisPhotoData.js';
import styles from './Hero.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: 'easeOut' } }),
};

export default function Hero() {
  return (
    <section id="inicio" className={`section ${styles.hero}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <motion.p
            className={styles.eyebrow}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            Mentoria individual de carreira
          </motion.p>

          <motion.h1
            className={styles.heading}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.12}
          >
            Você não precisa fazer
            <br />
            esse caminho{' '}
            <em className={styles.headingItalic}>sozinha.</em>
          </motion.h1>

          <motion.p
            className={styles.sub}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.24}
          >
            Mentoria para universitárias no último ano que querem se preparar
            para entrevistas de estágio e dar o próximo passo com mais confiança.
          </motion.p>

          <motion.div
            className={styles.ctas}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.36}
          >
            <a
              href="https://wa.me/5516992424117"
              className={styles.btnPrimary}
              target="_blank"
              rel="noopener noreferrer"
            >
              Quero iniciar minha mentoria
            </a>
            <a href="#mentoria" className={styles.btnGhost}>
              Saber mais
            </a>
          </motion.div>
        </div>

        <motion.div
          className={styles.photoWrapper}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        >
          <LeafDecor position="topLeft" />
          <LeafDecor position="bottomRight" />
          <div className={styles.photoFrame}>
            <img
              src={laisPhoto}
              alt="Laís Buck — Coordenadora de Cadeia de Suprimentos e mentora de carreira"
              className={styles.photo}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function LeafDecor({ position }) {
  const isTop = position === 'topLeft';
  return (
    <svg
      className={`${styles.leaf} ${isTop ? styles.leafTopLeft : styles.leafBottomRight}`}
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d={
          isTop
            ? 'M10 70 C10 40 30 10 70 10 C70 40 50 70 10 70Z'
            : 'M70 10 C70 40 50 70 10 70 C10 40 30 10 70 10Z'
        }
        fill="var(--color-primary)"
        fillOpacity="0.18"
      />
      <path
        d={isTop ? 'M40 40 L10 70' : 'M40 40 L70 10'}
        stroke="var(--color-primary)"
        strokeOpacity="0.25"
        strokeWidth="1"
      />
    </svg>
  );
}
