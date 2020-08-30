import React, { FC } from 'react';
import { Layout, LodgeBar, Nav, ToolBar, Main } from '../../components/layout';
import { useRouter } from 'next/router';

const Lodge: FC = () => {
    const router = useRouter();
    return (
        <Layout>
            <LodgeBar />
            <Nav header={router.query.id as string}></Nav>
            <ToolBar>foo</ToolBar>
            <Main></Main>
        </Layout>
    );
};

export default Lodge;
