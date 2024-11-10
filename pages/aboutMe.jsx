import styles from '../styles/AboutMePage.module.css';

const aboutMePage = () => {
    return (
        <div className={styles.container}>
            <h1>Chi Xing</h1>
            <h3>🪐 An underlying thinker 🤔️</h3>
            <p>Graduated from Liverpool Uni (Honours First Class in Computer Science)</p>
            <p>24 Fall Artificial Intelligence Master in Edinburgh Uni</p>
            <p>⛰️ My Pathway ⛰️</p>
            <ul className={styles.pathwayList}>
                <li>2024 Autumn &#124; Start contributing to <a href="https://github.com/ServerlessLLM/ServerlessLLM" target="_blank"
                rel="noopener noreferrer" className={styles.underline}>ServerlessLLM</a></li>
                <li>2024 Summer &#124; <a href="https://n8cir.org.uk/" target="_blank"
                rel="noopener noreferrer" className={styles.underline}>UK N8CIR</a> Bede Internship - Contribute to <a href="https://www.liverpool.ac.uk/computational-biology-facility/" target="_blank"
              rel="noopener noreferrer" className={styles.underline}>CBF at Liverpool Uni</a></li>
                <li>2024 Summer &#124; Mentor of <a href="https://summer-ospp.ac.cn/" target="_blank"
                rel="noopener noreferrer" className={styles.underline}>OSPP</a>(Open-Source Promption Plan) and GLCC(GitLink Code Camp)</li>
                <li>2024 Half-Year &#124; Stable Contributor of <a href="https://github.com/casibase" target="_blank"
                rel="noopener noreferrer" className={styles.underline}>Casbin</a> Community</li>
                <li>2023 Summer &#124; <a href="https://x.com/ShenyangChina/status/1694602473485320306" target="_blank"
                rel="noopener noreferrer" className={styles.underline}>BMW Hackthon</a> - Second Place in Finals</li>
                <li>* 2022 Summer &#124; Ex-Software Engineer (NLP) at <a href="https://www.iflytek.com/en/" target="_blank"
                rel="noopener noreferrer" className={styles.underline}>IFLYTEK</a></li>
                <li>* 2022 Summer &#124; Undergraduate Research Fellowship <a href="https://www.xjtlu.edu.cn/en/study/surf/introduction" target="_blank"
                rel="noopener noreferrer" className={styles.underline}>(SURF)</a> in XJTLU</li>
                <li>* 2021 Summer &#124; Ex-Investment Advisor Assistant at EastMoney</li>
            </ul>
            <p>✨ My Interest Points ✨</p>
            <ul>
                <li>LLM Safety</li>
                <li>Machine Learning and Pattern Recognition</li>
                <li>Machine Learning System</li>
            </ul>
            <ul className={styles.pathwayList}>
                <li>LLM Safety</li>
                <li>Machine Learning and Pattern Recognition</li>
                <li>Machine Learning System</li>
            </ul>
        </div>
    );
}

export async function getStaticProps() {
    return {
      props: { title: 'About' },
    };
}

export default aboutMePage