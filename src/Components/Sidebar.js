import './css/Sidebar.css'
const Sidebar = () => {
    return ( 
        <aside className="sidebar">
            <section className="payment">
                <div className="sidebar__paymentHeader">
                    <h2>Payments</h2>
                    <button>Clear</button>
                </div>
                <div className="sidebar__paymentRow">
                    <div className="paymentRow__header">
                        <ion-icon name="alert-circle-outline"></ion-icon>
                        <p><b>Received LTC</b></p>
                        <p className="paymentRow__headerAmount">+15.08 USD</p>
                    </div>
                    <div className="paymentRow__footer">
                        <p>09/08/2020 19:22</p>
                        <ion-icon name="people-outline"></ion-icon>
                    </div>
                </div>
                <div className="sidebar__paymentRow">
                    <div className="paymentRow__header">
                        <ion-icon name="alert-circle-outline"></ion-icon>
                        <p><b>Received LINK</b></p>
                        <p className="paymentRow__headerAmount">+957.96 USD</p>
                    </div>
                    <div className="paymentRow__footer">
                        <p>09/08/2020 19:22</p>
                        <ion-icon name="people-outline"></ion-icon>
                    </div>
                </div>
                <div className="sidebar__newPayment">
                    <ion-icon name="create-outline"></ion-icon>
                    <p><ion-icon name="add-outline"></ion-icon> New Transfer</p>
                </div>
            </section>
            <section className="sidebar__wallets">
                <h2>Wallets</h2>
                <div className="sidebar__walletGroup">
                    <div className="wallet">
                        <ion-icon name="logo-bitcoin"></ion-icon>
                        <div className="walletColumn">
                            <p><b>BTE</b></p>
                            <p>Bitcoin</p>
                        </div>
                        <div className="walletColumn">
                            <p><b>37%</b></p>
                            <p>-2.5%</p>
                        </div>
                    </div>
                    <div className="wallet">
                    <ion-icon name="logo-bitcoin"></ion-icon>
                        <div className="walletColumn">
                            <p><b>DAI</b></p>
                            <p>Dai</p>
                        </div>
                        <div className="walletColumn">
                            <p><b>23%</b></p>
                            <p>+7.2%</p>
                        </div>
                    </div>
                    <div className="wallet">
                    <ion-icon name="logo-bitcoin"></ion-icon>
                        <div className="walletColumn">
                            <p><b>XRP</b></p>
                            <p>Ripple</p>
                        </div>
                        <div className="walletColumn">
                            <p><b>20%</b></p>
                            <p>-5.1%</p>
                        </div>
                    </div>
                </div>
            </section>
        </aside>
     );
}
 
export default Sidebar;