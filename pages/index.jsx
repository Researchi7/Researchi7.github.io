import Link from 'next/link';
// import Illustration from '../components/Illustration';
import Image from "next/image";
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>Balanced</h1>
          <h1>Life</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Chi Xing</h1>
            <h6 className={styles.bio}>Problem Solver</h6>
            <div className={styles.cardContainer}>
              <div className={styles.card}>
                <div className={styles.content}>
                  <h4>Interest Point</h4>
                  <div className={styles.tags}>
                    <span key='Research' className='Research'>
                      NLP
                    </span>
                    <span key='LLMs' className='LLMs'>
                      LLMs
                    </span>
                    <span key='GenAI' className='GenAI'>
                      Generative AI
                    </span>
                    <span key='PyTorch' className='PyTorch'>
                      Algorithm Research
                    </span>
                    <span key='Computer-Vision' className='Computer-Vision'>
                      PU'ER(普洱)
                    </span>
                    <span key='Apache-Spark' className='Apache-Spark'>
                      High Performance Computing
                    </span>
                    <span key='SQL' className='SQL'>
                      CUDA
                    </span>
                    <span key='Tensorflow' className='Tensorflow'>
                      BERT & GPT
                    </span>
                    <span key='Software-Design' className='Software-Design'>
                      Software Architecture
                    </span>
                    <span key='MIM' className='MIM'>
                      Ph.Gemult(心学研究)
                    </span>
                    <span key='Bots' className='Bots'>
                      Multi-Agent
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/resume">
              <button className={styles.button}>Resume</button>
            </Link>
            {/* <Link href="/projects">
              <button className={styles.button}>View Projects</button>
            </Link> */}
            <Link href="/contact">
              <button className={styles.outlined}>Contact</button>
            </Link>
          </div>
          {/* <Illustration className={styles.illustration} /> */}
          <div className={styles.right}>
            <div className={styles.picture_boader}>
              <Image
                className={styles.picture}
                src="/me.jpeg"
                width={300}
                height={300}
                alt="Chi's Picture"
              />
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
