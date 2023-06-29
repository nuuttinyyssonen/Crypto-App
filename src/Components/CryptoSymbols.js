import React, {useContext} from 'react';
import { Context } from '../Data/Context';

function CryptoSymbols() {

    const {assets} = useContext(Context);
    let symbolArray = [];

    function displayCryptoSymbols() {
        for(let i = 0; i < assets.length; i++) {
            if(assets[i].symbol.endsWith("USDT")) {
                symbolArray.push(assets[i].symbol);
            }
        }
    }   
    displayCryptoSymbols()

    let symbolMap = symbolArray.map((item, i) => {
        return(
            <div key={i}>
                <p>{item.slice(0, item.length - 4)}</p>
            </div>
        );
    });

    return(
        <div>
            {symbolMap}
        </div>
    );
};

export default CryptoSymbols;