import React, { useState } from 'react';

const searchParamsContext = React.createContext();
const SetsearchParamsContext = React.createContext();

const SearchParamsProvider = (props) => {
    const [state, setState] = useState();

    return (
        <searchParamsContext.Provider value={state}>
            <SetsearchParamsContext.Provider value={setState}>
            {props.children}
            </SetsearchParamsContext.Provider>
        </searchParamsContext.Provider>
    )
}

export {searchParamsContext, SetsearchParamsContext,  SearchParamsProvider}

