import React from "react";

function Education(){
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                    <img src="media/images/education.svg" style={{width:"70%"}}/>    
                </div>
                <div className="col-6">
                            <h1 className="mb-3 fs-2">Free and open market education</h1>
                            <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                            <a className="mb-3" style={{textDecoration:"none"}}>Varsity<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5985E1"><path d="m700-300-57-56 84-84H120v-80h607l-83-84 57-56 179 180-180 180Z"/></svg></a>
                            <p className="mt-5">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                            <a className="mb-3" style={{textDecoration:"none"}}>TradingQ&A<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5985E1"><path d="m700-300-57-56 84-84H120v-80h607l-83-84 57-56 179 180-180 180Z"/></svg></a>

                        </div>
                        <div className="col"></div>
                    
            </div>
        </div>
    )
}

export default Education;