import React from "react";

function Hero(){
    return (
        <div className="container">
        
        <div className="p-5 mt-5 border-bottom text-center">
            <h2>Charges</h2>
            <p className="text-muted fs-4">List of all charges and taxes</p>
        </div>
        <div className="row d-flex p-5 text-center fs-8 text-muted pricing">
            <div className="col-4">
                <img src="/media/images/pricing0.svg" />
                <h2>Free equity delivery</h2>
                <p>All equity delivery investments (NSE, BSE),<br/> are absolutely free — ₹ 0 brokerage.</p>
            </div>
            <div className="col-4">
                <img src="/media/images/20.svg" />
                <h2>Intraday and F&O trades</h2>
                <p>Flat ₹ 20 or 0.03% (whichever is lower) per<br/> executed order on intraday trades across<br/> equity, currency, and commodity trades. Flat<br/> ₹20 on all option trades.</p>
            </div>
            <div className="col-4">
                 <img src="/media/images/pricing0.svg" />
                <h2>Free direct MF</h2>
                <p>All direct mutual fund investments are <br/>absolutely free — ₹ 0 commissions & DP <br/>charges.</p>
            </div>
            </div>
         </div>
    
    );
}

export default Hero;


