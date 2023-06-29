import React, {useState} from 'react';

export const Context = React.createContext();
export const ContextProvider = ({children}) => {
    const [assets, setAssets] = useState([]);

    return(
        <Context.Provider value={{ assets, setAssets }}>
            {children}
        </Context.Provider>
    );
};
