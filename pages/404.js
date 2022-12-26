import Head from "next/head";

import Layout from "../components/layout";

export default function Custom404() {
    return (
        <Layout>
            <Head>
                <title>404-Not found</title>
            </Head>
            <h1>404 Not Found - I couldn't find what you're looking for</h1>
        </Layout>
    );
}