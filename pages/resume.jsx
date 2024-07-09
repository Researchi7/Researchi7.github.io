import styles from '../styles/ResumePage.module.css';
import { pdfjs, Document, Page } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`
const myResume = './Resume1.pdf';

const ResumePage = () => {
  return (
    <center>
      <h3>Resume (<a href={myResume} className={styles.underline} download="ChiXing-CV.pdf">Download</a>)</h3>
      <br />
      <div className={styles.pdfContainer}>
        <Document file={myResume}>
          <Page pageIndex={0} scale={1.5} renderMode="svg" />
        </Document>
      </div>
      <br />
      <div className={styles.alert}>
        <h5>Only download available</h5>
        <h5>Preview will be available on PC</h5>
      </div>
    </center>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Resume' },
  };
}

export default ResumePage;
