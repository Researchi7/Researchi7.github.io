import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Chi Xing is a researcher in machine learning systems. This is Chi Xing's personal academic homepage, showcasing projects, publications, and portfolio."
      />
      <meta
        name="keywords"
        content="chi xing, chi, xing, martin, martingale, NLPer portfolio, machine learning engineer, vscode-portfolio"
      />
      <meta property="og:title" content="Chi Xing's Portfolio" />
      <meta
        property="og:description"
        content="Chi Xing's Profolio."
      />
      <meta property="og:image" content="https://i.imgur.com/DhhaJ8E.png" />
      <meta property="og:url" content="https://openchi.life" />
      <meta name="twitter:card" content="summary_large_image" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Chi Xing",
            "url": "https://openchi.life",
            "sameAs": [
              "https://github.com/MartinRepo",
              "https://www.linkedin.com/in/chi-xing-b3006b254/",
              "https://scholar.google.com/citations?user=deO0nvUAAAAJ&hl=en"
            ],
            "jobTitle": "Machine Learning Researcher",
            "worksFor": {
              "@type": "Organization",
              "name": "University of Edinburgh"
            }
          })
        }}
      />

    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Chi Xing',
};
