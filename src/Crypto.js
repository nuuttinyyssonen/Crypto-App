import React, { useEffect, useState, useContext } from 'react';
import CryptoDataApi from './Data/CryptoDataApi';
import CryptoPriceChange from './Components/CryptoPriceChange';
import CryptoPrice from './Components/CryptoPrice';
import CryptoSymbols from './Components/CryptoSymbols';
import SearchCrypto from './Components/searchCrypto';
import { Data } from './Data/Data';
import './Css/Crypto.css';

function Crypto() {

    const {data, setData} = useContext(Data);
    const [coin, setCoin] = useState("");
    useEffect(() => {

    },[data])

    function handleChange(e) {
        setCoin(e.target.value);
        setData(false);
        if(e.target.value === "") {
            setData(true);
        }
    }

    return(
        <div className='full-cont'>
            <div className='input'>
                <input placeholder='Search for coin...' className='searchBar' onChange={handleChange} value={coin} />
                {!data && (
                    <SearchCrypto className="searchCrypto" coin={coin}/>
                )}
            </div>
            <div className='container'>
                {data && (
                    <div className='inner-container'>
                        <CryptoSymbols />
                        <CryptoPrice />
                        <CryptoPriceChange />
                        <CryptoDataApi />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Crypto;
