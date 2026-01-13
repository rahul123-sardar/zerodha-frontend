import React from "react";

function Universe(){
    return (
        <div className="container  mt-5 text-center">
            <div className="row mt-5">
                <h1>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
                <div className="row-6 d-flex universe-image text-muted">
                <div className="col-4 p-3">
                    <img src="media/images/zerodhaFundhouse.png" />
                    <p>Our asset management venture<br/>
that is creating simple and transparent index<br/>
funds to help you save for your goals.</p>
                </div>
                <div className="col-4 p-3">
                    <img src="media/images/sensibullLogo.svg" />
                    <p>Options trading platform that lets you<br/>
create strategies, analyze positions, and examine<br/>
data points like open interest, FII/DII, and more.</p>
                </div>
                <div className="col-4 p-3">
                    <img src="media/images/tijori.svg" style={{width:"120px"}}/>
                    <p>Investment research platform<br/>
that offers detailed insights on stocks,<br/>
sectors, supply chains, and more.
</p>
                </div>
                </div>
                <div className="row-6 d-flex universe-image text-muted">
                <div className="col-4 p-3">
                    <img src="media/images/streakLogo.png" />
                    <p>stematic trading platform<br/>
that allows you to create and backtest<br/>
strategies without coding.
</p>
                </div>
                <div className="col-4 p-3">
                    <img src="media/images/smallcaseLogo.png" />
                    <p>Thematic investing platform<br/>
that helps you invest in diversified<br/>
baskets of stocks on ETFs.
</p>
                </div>
                <div className="col-4 p-3">
                    <img src="media/images/ditto-logo.png" style={{width:"120px"}}/>
                    <p>Personalized advice on life<br/>
and health insurance. No spam<br/>
and no mis-selling.
Sign up for free</p>
                </div>
                </div>
            </div>
                        <button className="p-3 btn btn-primary fs-5 mb-5" style={{width:"30%", margin:"0 auto"}}>Signup Now</button>

        </div>
    );
}

export default Universe;