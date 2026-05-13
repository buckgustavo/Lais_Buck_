import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import styles from './CTAFinal.module.css';

export default function CTAFinal() {
  const [ref, inView] = useInView(0.2);

  return (
    <section id="contato" className={styles.section}>
      <div className={`container ${styles.inner}`} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <p className={styles.eyebrow}>Pronta para comecar?</p>
          <h2 className={styles.heading}>
            Vamos{' '}
            <em className={styles.headingItalic}>juntas?</em>
          </h2>
          <p className={styles.sub}>
            Mais do que mentoria — um espaco seguro para te ouvir, te orientar
            e caminhar ao seu lado.
          </p>

          <a
            href="https://wa.me/5516992424117"
            className={styles.btn}
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar com a Lais no WhatsApp
          </a>

          <p className={styles.note}>
            Ou entre em contato por{' '}
            <a href="mailto:laisbuck@gmail.com" className={styles.emailLink}>
              laisbuck@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
