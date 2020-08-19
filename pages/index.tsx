import React from 'react';
import { GetServerSideProps } from 'next';

import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';

import { YouTube } from '../components/YouTube';

const components = { YouTube }

type IndexProps = {
    contents: string;
};

const Index: React.FC<IndexProps> = (props: IndexProps) => {
    const content = hydrate(props.contents, { components });
    return content;
};

export default Index;

export const getServerSideProps: GetServerSideProps<IndexProps> = async () => {
    const res = await fetch('https://run.mocky.io/v3/3faa3572-d7e4-4bb1-86ae-bd2614ad46c1');
    const content = await res.json();
    const mdx = await renderToString(content['content'], { components });
    const props: IndexProps = {
        contents: mdx,
    }

    return {
        props,
    };
};