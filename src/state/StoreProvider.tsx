import React, { createContext, useReducer } from 'react';
import Reducer from './Reducer';

const initialState: State = { comments: [] };

const StoreProvider = ({ children }) => {
	const [state, dispatch] = useReducer(Reducer, initialState);
	return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};

export const Context = createContext<ContextType>(null);
export default StoreProvider;
