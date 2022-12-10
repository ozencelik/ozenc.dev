import Layout from "../../components/layout";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function FirstPost() {
    return (
        <>
            <Head>
                <title>First Post</title>
            </Head>

            <h1>First Post</h1>
            <h2>
                <Link href="/">← Back to home</Link>
                <Image
                    src="/images/profile.png"
                    width={50}
                    height={50}
                    alt="Özenç Çelik"
                />
            </h2>
        </>
    );
}