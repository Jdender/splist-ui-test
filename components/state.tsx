import React, { createContext, FC, useContext } from 'react';
import { useImmer } from 'use-immer';
import { Draft } from 'immer';

const initialState = {};

type State = typeof initialState;

interface StateContext {
    state: State;
    updateState(fn: (draft: Draft<State>) => void): void;
}

const StateContext = createContext((null as unknown) as StateContext);

export const StateProvider: FC = ({ children }) => {
    const [state, updateState] = useImmer(initialState);

    return (
        <StateContext.Provider value={{ state, updateState }}>
            {children}
        </StateContext.Provider>
    );
};

export const useState = () => useContext(StateContext);
