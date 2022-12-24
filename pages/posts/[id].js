import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

export default function Post({ postData }) {
    return (
        <Layout>
            {postData.title}
            <br />
            {postData.id}
            <br />
            {postData.date}
            <br />
        </Layout>
    );
}

export async function getStaticPaths() {
    // return a list of possible value for id
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    // use params.id to fetch external data for blog post
    const postData = getPostData(params.id);

    return {
        props: {
            postData,
        },
    };
}