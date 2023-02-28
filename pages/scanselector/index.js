import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ScanSelector from "../../components/scanner/Scanner";
import Head from "next/head";
import { Fragment } from "react";

const ScanSelector_App = () => {
  return (
    <Fragment>
      <Head>
        <title>Scanner Selector Tool</title>
        <meta
          name="description"
          content="App used to select scanner for your buisness"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ScanSelector />
    </Fragment>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      // Will be passed to the page component as props
    },
  };
}

export default ScanSelector_App;
