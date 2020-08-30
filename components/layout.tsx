import React, { FC } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

export { LodgeBar } from './lodge-bar';
export { Nav } from './nav-bar';
export { Main } from './main';

export const ToolBar = styled.div`
    grid-area: tool-bar;
    background-color: green;
`;

const InnerLayout = styled.div`
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    display: grid;
    grid:
        'lodge-bar nav-header main-header  main-header' 1fr
        'lodge-bar nav-bar    main-content special-bar' 5fr
        'lodge-bar tool-bar   main-footer  special-bar' 1fr
        / 1fr 3fr 6fr 3fr;
`;

const GlobalStyle = createGlobalStyle`
    html,
    body {
        margin: 0;
        padding: 0;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
    }
`;

export const Layout: FC = ({ children }) => (
    <>
        <InnerLayout>{children}</InnerLayout>
        <GlobalStyle />
    </>
);
