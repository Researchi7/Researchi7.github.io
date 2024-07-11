import styles from '../styles/AboutMePage.module.css';

const aboutMePage = () => {
    return (
        <div className={styles.container}>
            <h1>Chi Xing</h1>
            <h3>A underlying thinker</h3>
            <p>Graduated from University of Liverpool (Hons First Class in Computer Science)</p>
            <p>24 Fall Artificial Intelligence Master in University of Edinburgh</p>
            <p>My Pathway</p>
            <ul>
                <li>hi</li>
                <li>hi</li>
                <li>hi</li>
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