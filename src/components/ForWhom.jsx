import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import styles from './ForWhom.module.css';

const CHECKLIST = [
  'Universitária no ultimo ano da graduacao',
  'Quer se destacar em processos seletivos e entrevistas de estagio',
  'Sente inseguranca ao falar sobre si mesma e suas conquistas',
  'Nao sabe exatamente como se posicionar no mercado',
  'Busca clareza sobre seu caminho profissional',
  'Quer mais confianca para dar o proximo passo',
];

export default function ForWhom() {
  const [ref, inView] = useInView(0.15);

  return (
    <section id="para-quem" className={`section ${styles.section}`}>
      <div className={`container ${styles.inner}`} ref={ref}>
        <motion.div
          className={styles.textSide}
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className={styles.label}>Para quem e essa mentoria</p>
          <h2 className={styles.heading}>Aqui, e sobre voce.</h2>
          <p className={styles.body}>
            A mentoria foi pensada para universitarias que estao prestes a entrar no mercado
            de trabalho e precisam de mais do que dicas — precisam de um espaco seguro para
            se conhecer melhor, se preparar com consistencia e se posicionar com confianca.
          </p>
          <p className={styles.body}>
            Se voce se identifica com algum dos pontos ao lado, esta mentoria e para voce.
          </p>
        </motion.div>

        <motion.div
          className={styles.checkSide}
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
        >
          <ul className={styles.list}>
            {CHECKLIST.map((item) => (
              <li key={item} className={styles.item}>
                <span className={styles.checkIcon} aria-hidden="true">
                  <Check size={15} strokeWidth={2.5} />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
