import React, { createContext, FC, ReactNode, useMemo, useState } from 'react';

interface SearchProvider {
    children: ReactNode
}

export const SearchContext = createContext({});

export const SearchProvider: FC<SearchProvider> = (props) => {
    const {
        children,
    } = props;

    const [search, setSearch] = useState<string>('');

    const defaultProps = {
        search,
        setSearch
    }

    return (
        <SearchContext.Provider value={defaultProps}>
            {children}
        </SearchContext.Provider>
    );
};
