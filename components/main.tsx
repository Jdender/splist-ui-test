import React, { FC } from 'react';
import styled from 'styled-components';

const MainHeader = styled.header`
    grid-area: main-header;
    background-color: blue;
`;

const MainContent = styled.main`
    grid-area: main-content;
    background-color: purple;
`;

const MainFooter = styled.footer`
    grid-area: main-footer;
    background-color: brown;
`;

const SpecialBar = styled.aside`
    grid-area: special-bar;
    background-color: grey;
`;

export const Main: FC = () => (
    <>
        <MainHeader>foo </MainHeader>
        <MainContent>foo</MainContent>
        <MainFooter>foo</MainFooter>
        <SpecialBar>foo</SpecialBar>
    </>
);
