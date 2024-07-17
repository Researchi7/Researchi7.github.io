import styles from '../styles/AboutMePage.module.css';

const aboutMePage = () => {
    return (
        <div className={styles.container}>
            <h1>Chi Xing</h1>
            <h3>A underlying thinker</h3>
            <p>Graduated from University of Liverpool (Hons First Class in Computer Science)</p>
            <p>24 Fall Artificial Intelligence Master in University of Edinburgh</p>
            <p>My Pathway👇</p>
            <ul className={styles.pathwayList}>
                <li>2024 Summer UK N8CIR Bede Internship</li>
                <li>2024 Summer Mentor of OSPP(Open-Source Promption Plan) and GLCC(GitLink Code Camp)</li>
                <li>2024 Stable Contributor of Casbin Community</li>
                <li>2023 Summer BMW Hackthon - Second Place in Finals</li>
                <li>2022 Summer Ex-Software Engineer at IFLYTEK</li>
                <li>* 2021 Summer Undergraduate Research Fellowship in XJTLU</li>
                <li>* 2020 Summer Ex-Investment Adviser Assistant at EastMoney</li>
            </ul>
            <p>My Interests🔥</p>
            NLP
        </div>
    );
}

export async function getStaticProps() {
    return {
      props: { title: 'About' },
    };
}

export default aboutMePage