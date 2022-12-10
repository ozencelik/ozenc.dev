import Head from 'next/head';

import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Heyy! I'm Özenç.</p>
        <p>
          This'll be my updated personal website built by using Next.js 13.

        </p>
        <p>
          <a target="_blank" href="https://ozportfolio.herokuapp.com/">Check this out</a> if you want to see old version
        </p>
      </section>
    </Layout>
  )
}