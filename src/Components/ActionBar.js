import './css/ActionBar.css'
const ActionBar = () => {
    return ( 
        <div className="actionbar">
            <h1 className="actionbar__logo">Adresor</h1>
            <div className="actionbar__row top">
                <ion-icon name="grid-outline" className="actionbar__active"></ion-icon>
                <ion-icon name="home-outline"></ion-icon>
                <ion-icon name="archive-outline"></ion-icon>
                <ion-icon name="people-circle-outline"></ion-icon>
                <ion-icon name="language-outline"></ion-icon>
            </div>
            <br /><br />
            <div className="actionbar__row">
            </div>
            <div className="actionbar__cta">
                <ion-icon name="compass-outline"></ion-icon>
                <a href="/">Back to homepage</a>
            </div>
        </div>
     );
}
 
export default ActionBar;