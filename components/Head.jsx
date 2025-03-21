import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Chi Xing's Profolio."
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
      <meta property="og:image" content="https://imgur.com/DhhaJ8E" />
      <meta property="og:url" content="https://openchi.life" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Chi Xing',
};
