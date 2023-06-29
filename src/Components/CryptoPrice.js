import React, {useContext} from "react";
import { Context } from "../Data/Context";

function CryptoPrice() {

    const {assets} = useContext(Context);
    let prices = [];

    function displayCryptoPrice() {
        for(let i = 0; i < assets.length; i++) {
            if(assets[i].symbol.endsWith("USDT")) {
                prices.push(Math.round(assets[i].askPrice * 100) / 100);
            }
        }
    }
    displayCryptoPrice();

    let pricesMap = prices.map((item, i) => {
        return(
            <div key={i}>
                <p>{item}</p>
            </div>
        );
    });

    return(
        <div>
            {pricesMap}
        </div>
    );
};

export default CryptoPrice;