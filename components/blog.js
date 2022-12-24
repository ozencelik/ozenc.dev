import Head from 'next/head';

import Layout, { siteTitle } from './layout';
import utilStyles from '../styles/utils.module.css';

export default function Blog({ allPostsData }) {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            {title}
                            <br />
                            {id}
                            <br />
                            {date}
                            <br />
                        </li>
                    ))}

                </ul>
            </section>
        </Layout>
    )
}