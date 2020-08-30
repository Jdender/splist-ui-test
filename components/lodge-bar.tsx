import React, { FC } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const LodgeBarContainer = styled.nav`
    grid-area: lodge-bar;
    background-color: red;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const LodgeIcon = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: darkred;
    border-radius: 25px;

    margin: 0.5em;
    width: 4em;
    height: 4em;
`;

export const LodgeBar: FC = () => {
    return (
        <LodgeBarContainer>
            <LodgeIcon>
                <Link href="/l/Foo">Foo</Link>
            </LodgeIcon>
            <LodgeIcon>
                <Link href="/l/Bar">Bar</Link>
            </LodgeIcon>
            <LodgeIcon>
                <Link href="/l/Baz">Baz</Link>
            </LodgeIcon>
        </LodgeBarContainer>
    );
};
