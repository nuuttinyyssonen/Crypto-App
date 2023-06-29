import React, {useState, useEffect} from 'react';

function SearchCrypto(props) {

    const url = `https://binance43.p.rapidapi.com/ticker/24hr?symbol=${props.coin}USDT`;
    const options = {
	    method: 'GET',
	    headers: {
		    'X-RapidAPI-Key': "Enter API-key...",
		    'X-RapidAPI-Host': 'binance43.p.rapidapi.com'
	    }
    };

    const [symbol, setSymbol] = useState("");
    const [priceChangePercent, setPriceChangePercent] = useState(0);
    const [price, setPrice] = useState(0);


    useEffect(() => {
        const searchCoin = async () => {
            try {
                const response = await fetch(url, options);
                const result = await response.text();
                const jsonData = JSON.parse(result);
                setSymbol(jsonData.symbol);
                setPrice(jsonData.askPrice);
                setPriceChangePercent(jsonData.priceChangePercent);
                
            } catch (error) {
                console.error(error)
            }
        }
        searchCoin();
    }, [props.coin.length >= 3])

    return(
        <div>
            <div className='element'>
                <p style={{color: "white"}}>{symbol}</p>
                <p style={{color: "white"}}>{price}</p>
                <p style={{color: "white"}}>{priceChangePercent}%</p>
            </div>
        </div>
    );
};

export default SearchCrypto;