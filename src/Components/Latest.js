import './css/Main.css'
const Latest = () => {
    return ( 
        <div>
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
 
export default Latest;