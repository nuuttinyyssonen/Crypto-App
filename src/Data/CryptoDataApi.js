import React, {useContext, useEffect} from 'react';
import { Context } from './Context';

function CryptoDataApi() {

    const url = `https://binance43.p.rapidapi.com/ticker/24hr`;
    const options = {
	    method: 'GET',
	    headers: {
		    'X-RapidAPI-Key': "Enter API-Key...",
		    'X-RapidAPI-Host': 'binance43.p.rapidapi.com'
	    }
    };

    const {setAssets} = useContext(Context);

    useEffect(() => {
        const fetchPriceChange = async () => {
            try {
                const response = await fetch(url, options);
                const result = await response.text();
                let jsonData = JSON.parse(result);

                for(let i = 0; i < jsonData.length; i++) {
                    setAssets(prev => [...prev, jsonData[i]])
                }
                
            } catch (error) {
                console.error(error)
            }
        }
        fetchPriceChange();
    }, [])



    return(
        <div>
            
        </div>
    );
};

export default CryptoDataApi;