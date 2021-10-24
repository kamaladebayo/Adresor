import './css/Asset.css'
const Asset = ({name, usdValue, assetValue, image}) => {
    return ( 
        <div className="asset">
            <div className="asset__header">
                <h3>{name}</h3>
                {/* <ion-icon name="ellipsis-vertical-outline"></ion-icon> */}
            </div>
            <img src={image} className="asset__img"alt="" />
            <p className="usd-equip">{usdValue}</p>
            <p className="asset-value">{assetValue}</p>
        </div>
     );
}
 
export default Asset;