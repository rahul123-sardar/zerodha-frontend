import React from "react";

function Stats(){
    return (
        <div className="container p-3">
            <div className="row p-5">
                <div className="col-6 p-5">
                    <h1 className="fs-2">Trust with confidence</h1>
                    <h2 className="fs-4">Customer-first always</h2>
                    <p className="text-muted">That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores worth of equity investments.</p>
                    <h2 className="fs-4">No spam or gimmicks</h2>
                    <p className="text-muted">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    <h2 className="fs-4">The Zerodha universe</h2>
                    <p className="text-muted">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h2 className="fs-4">Do better with money</h2>
                    <p className="text-muted">With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className="col-6">
                    <img src="media/images/ecosystem.png" style={{width:"75%"}}/>
                    <div>
                        <a href="" style={{textDecoration:"none"}} className="mx-5">&nbsp;&nbsp;&nbsp;&nbsp;Explore our products<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5985E1"><path d="m700-300-57-56 84-84H120v-80h607l-83-84 57-56 179 180-180 180Z"/></svg></a>
                        <a href="" style={{textDecoration:"none"}}>Try kite demo<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5985E1"><path d="m700-300-57-56 84-84H120v-80h607l-83-84 57-56 179 180-180 180Z"/></svg></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;

