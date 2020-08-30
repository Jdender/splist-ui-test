import React, { FC } from 'react';
import styled from 'styled-components';

const NavHeader = styled.header`
    grid-area: nav-header;
    background-color: orange;

    display: flex;
    align-items: center;

    & h1 {
        padding-left: 1em;
    }
`;

const NavBar = styled.aside`
    grid-area: nav-bar;
    background-color: yellow;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Nav: FC<{ header: string }> = ({ header }) => (
    <>
        <NavHeader>
            <h1>{header}</h1>
        </NavHeader>
        <NavBar>
            <p>Foo</p>
            <p>Bar</p>
            <p>Baz</p>
        </NavBar>
    </>
);
