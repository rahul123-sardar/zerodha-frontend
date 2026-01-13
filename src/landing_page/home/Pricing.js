import React from "react";

function Pricing(){
    return (
        <div className="container">
            <div className="row fs-2">
                <div className="col-4">
                        <h1 className="mb-3">Undbeatable pricing</h1>
                        <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                        <a href="" style={{textDecoration:"none"}}>See Pricing<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5985E1"><path d="m700-300-57-56 84-84H120v-80h607l-83-84 57-56 179 180-180 180Z"/></svg></a>
                </div>
                <div className="col-2"></div>
                <div className="col-6">
                    <div className="row text-center">
                        <div className="col p-2 border">
                            <h1 className="mb-3"><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M559-120 286.67-402.67v-70.66H420q55.67 0 97.17-36.17T566-606.67H240v-66.66h318.67q-14.34-43.67-52.5-71.84Q468-773.33 420-773.33H240V-840h480v66.67H574q20 19 34.33 46.33 14.34 27.33 21 53.67H720v66.66h-87q-8 89-68.33 144.5-60.34 55.5-144.67 55.5h-44.33L651.33-120H559Z"/></svg>0</h1><br />
                            <p style={{fontSize:"19px"}}>Free equity delivery and
<br/>direct mutual funds</p>
                        </div>
                        <div className="col p-2 border">
                            <h1 className="mb-3"><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M559-120 286.67-402.67v-70.66H420q55.67 0 97.17-36.17T566-606.67H240v-66.66h318.67q-14.34-43.67-52.5-71.84Q468-773.33 420-773.33H240V-840h480v66.67H574q20 19 34.33 46.33 14.34 27.33 21 53.67H720v66.66h-87q-8 89-68.33 144.5-60.34 55.5-144.67 55.5h-44.33L651.33-120H559Z"/></svg>20</h1><br />
                            <p style={{fontSize:"19px"}}>Intraday and F&O</p>
                        </div>
                        <div className="col"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing;