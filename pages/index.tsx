import React, { FC } from 'react';
import { Layout, LodgeBar, Nav, ToolBar, Main } from '../components/layout';

const Index: FC = () => (
    <Layout>
        <LodgeBar />
        <Nav header="Home"></Nav>
        <ToolBar>foo</ToolBar>
        <Main></Main>
    </Layout>
);

export default Index;
