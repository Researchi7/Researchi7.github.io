import styles from '../styles/AboutMePage.module.css';

const aboutMePage = () => {
    return (
        <div className={styles.container}>
            <h1>Chi Xing</h1>
            <h3>A underlying thinker</h3>
            <p>Graduated from University of Liverpool (Hons First Class in Computer Science)</p>
            <p>24 Fall Artificial Intelligence Master in University of Edinburgh</p>
            <p>My Pathway👇</p>
            <ul>
                <li>UK N8CIR Bede 2024 Summer Internship</li>
                <li>Stable Contributor of Casbin Community</li>
                <li>Mentor of 2024 OSPP(Open-Source Promption Plan) and GLCC(GitLink Code Camp)</li>
                <li>Second Place in 2023 BMW Hackthon</li>
                <li>Ex-Software Engineer at IFLYTEK</li>
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