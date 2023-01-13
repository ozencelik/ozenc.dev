import Head from 'next/head';
import Link from 'next/link';

import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>My current tech stack</h2>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem} key='analytics'>
            <Link href={`https://umami.is/`}>Umami</Link>
            <br />
            <small className={utilStyles.lightText}>
              Umami is an open source, privacy-focused alternative to Google Analytics
            </small>
          </li>
        </ul>
      </section>

    </Layout >
  )
}