import { useState } from 'react';
import styles from '../styles/ResumePage.module.css';
import { pdfjs, Document, Page } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
const myResume = './Chi_CV.pdf';

const ResumePage = () => {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <center>
      <h3>
        Resume (
        <a href={myResume} className={styles.underline} download="ChiXing-CV.pdf">
          Download
        </a>
        )
      </h3>
      <br />
      <div className={styles.pdfContainer}>
        <Document file={myResume} onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from(new Array(numPages), (el, index) => (
            <Page key={`page_${index + 1}`} pageIndex={index} scale={1.5} renderMode="svg" />
          ))}
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
