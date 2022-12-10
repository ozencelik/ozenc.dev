import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function FirstPost() {
    return (
        <>
            <Head>
                <title>First Post</title>
            </Head>
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() =>
                    console.log('Script loaded now!')
                }
            />

            <h1>First Post</h1>
            <h2>
                <Link href="/">Back to home</Link>
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