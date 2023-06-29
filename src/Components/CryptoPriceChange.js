import React, {useContext} from "react";
import { Context } from "../Data/Context";

function CryptoPriceChange() {
    	
    const {assets} = useContext(Context);
    let priceChanges = [];

    function displayPrice() {
        for(let i = 0; i < assets.length; i++) {
            if(assets[i].symbol.endsWith("USDT")) {
                priceChanges.push(assets[i].priceChangePercent);
            }
        }
    }
    displayPrice();

    let priceChangeMap = priceChanges.map((item, i) => {
        return(
            <div key={i}>
                <p>{item.slice(0, -1)}%</p>
            </div>
        );
    });

    return(
        <div>
            {priceChangeMap}
        </div>
    );
};

export default CryptoPriceChange;