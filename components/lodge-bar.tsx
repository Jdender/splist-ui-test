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

    & svg {
        width: 2em;
        height: 2em;
    }
`;

const HomeIcon: FC = () => (
    <LodgeIcon>
        <Link href="/">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
            </svg>
        </Link>
    </LodgeIcon>
);

export const LodgeBar: FC = () => {
    return (
        <LodgeBarContainer>
            <HomeIcon />
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
