import Head from 'next/head';
import Link from 'next/link';

import { getSortedPostsData } from '../lib/posts';
import Layout, { siteTitle } from '../components/layout';
import Date from '../components/date';
import utilStyles from '../styles/utils.module.css';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
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
        {/* <p>
          <a target="_blank" href="https://ozportfolio.herokuapp.com/">Check this out</a> if you want to see old version
        </p> */}
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}

        </ul>
      </section>

    </Layout >
  )
}