import './css/Main.css'

const Main = () => {
    /* var axios = require("axios").default;

    var options = {
    method: 'GET',
    url: 'https://rest.yahoofinanceapi.com/v11/finance/quoteSummary/AAPL',
    params: {modules: 'defaultKeyStatistics,assetProfile'},
    headers: {
        'x-api-key': 'YOUR-PERSONAL-API-KEY'
    }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    }); */
    // const [coins, setCoins] = useState([])
    // useEffect(() => {
    //     axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=10&page=1&sparkline=false')
    //     .then(res => {
    //         console.log(setCoins(res.data));
    //         console.log(coins);
    //     })
    //     .catch(err => console.log(err))
        
    // }, [])
    // console.log(coins[0].name)
    
   
    return ( 
        <div className="main">
            {/* Welcome  */}
            <section className="main__welcome">
                <h1>Hi, <span>Adnan</span></h1>
                <a href="/">Home</a>
                {/* <div className="main__welcomeTray">
                {coins? (coins.map((coin, index) => (
                    <Asset key={index} name={coin.name} usdValue={`${coin.current_price} USD`} assetValue={coin.last_updated} image={coin.image}/>
                ))) : "Skelenton"}
                </div> */}
            </section>
            {/* Latest */}
            <section className="main__latest">
                <div className="main__latestHeader">
                    <div className="main__latestLeftHeader">
                        <h2>Latest Activity</h2>
                        <p>Updated 12 minutes ago</p>
                    </div>
                    {/* <div className="main__latestRightHeader">
                        <ion-icon name="settings-outline"></ion-icon>
                        <ion-icon name="add-outline"></ion-icon>
                    </div> */}
                </div>
                <div className="main__latestTiles">
                    <div className="main__latestTile">
                        <ion-icon name="location-outline"></ion-icon>
                        <div className="tileColumn">
                            <p><b>Postal Code</b></p>
                            <p>000000</p>
                        </div>
                        <div className="tileColumn">
                            <p><b>GPS</b></p>
                            <p>XXX</p>
                        </div>
                        <div className="tileColumn">
                            <p><b>Address</b></p>
                            <p>City, State</p>
                        </div>
                        <div className="tileColumn">
                            <p><b>20 mins ago</b></p>
                            <p>Time</p>
                        </div>
                    </div>
                    <div className="main__latestTile">
                        <ion-icon name="location-outline"></ion-icon>
                        <div className="tileColumn">
                            <p><b>Postal Code</b></p>
                            <p>000000</p>
                        </div>
                        <div className="tileColumn">
                            <p><b>GPS</b></p>
                            <p>XXX</p>
                        </div>
                        <div className="tileColumn">
                            <p><b>Address</b></p>
                            <p>City, State</p>
                        </div>
                        <div className="tileColumn">
                            <p><b>20 mins ago</b></p>
                            <p>Time</p>
                        </div>
                    </div>
                    <div className="main__latestTile">
                        <ion-icon name="location-outline"></ion-icon>
                        <div className="tileColumn">
                            <p><b>Postal Code</b></p>
                            <p>000000</p>
                        </div>
                        <div className="tileColumn">
                            <p><b>GPS</b></p>
                            <p>XXX</p>
                        </div>
                        <div className="tileColumn">
                            <p><b>Address</b></p>
                            <p>City, State</p>
                        </div>
                        <div className="tileColumn">
                            <p><b>20 mins ago</b></p>
                            <p>Time</p>
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <section className="main__editLang">
                <h2>Language</h2>
                <h4>Home</h4>
                <small>Form to edit home texts</small>
                <h4>About</h4>
                <small>Form to edit about texts</small>
                <h4>Archive</h4>
                <small>Form to edit archive texts</small>
            </section>
        </div>
     );
}
 
export default Main;