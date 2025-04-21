import { useState } from 'react';
import styles from '../styles/ResumePage.module.css';
import { pdfjs, Document, Page } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
const myResume = './Chi_CV.pdf';
const myResumeZh = './Chi_Xing_CV_zh.pdf'

const ResumePage = () => {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <center>
      <h3>
        Resume (
        <a href={myResume} className={styles.underline} target='_blank'>
          en-GB
        </a>
        )
        (
        <a href={myResumeZh} className={styles.underline} target='_blank'>
          zh-CN
        </a>
        )
      </h3>
      <br />
      <div className={styles.pdfContainer}>
        {/* <Document file={myResume} onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from(new Array(numPages), (el, index) => (
            <Page key={`page_${index + 1}`} pageIndex={index} scale={1.5} renderMode="svg" />
          ))}
        </Document> */}
        <iframe src="https://gravel-carpenter-ef6.notion.site/ebd/15365853615d8081ae72e9a4976b2ca9" width="100%" height="800" frameborder="0" allowfullscreen />
      </div>
      <br />
      <div className={styles.alert}>
        <h5>Only download available</h5>
        <h5>Preview is available <a className={styles.underline} href="https://gravel-carpenter-ef6.notion.site/ebd/15365853615d8081ae72e9a4976b2ca9">here</a></h5>
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
