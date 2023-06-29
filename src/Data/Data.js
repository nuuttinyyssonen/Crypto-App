import React, {useState} from 'react';

export const Data = React.createContext();
export const DataProvider = ({children}) => {
    const [data, setData] = useState(true);

    return(
        <Data.Provider value={{ data, setData }}>
            {children}
        </Data.Provider>
    );
};