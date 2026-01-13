import React from "react";

function Hero(){
    return (
        <section className=" bg-body-tertiary" style={{height:"250px"}}>
        <div className="container">
        <div className="row">
        <div className="col-6 p-5" style={{textAlign:"left"}}>
            <h1>Support Portal</h1>
        </div>
        <div className="col-6 p-5" style={{textAlign:"right"}}>
            <button type="button" className="btn btn-primary">My tickets</button>
        </div>
        </div>
        <div className="d-flex border supportSearch">
       <span className="p-3 bg-white"><img width="30" height="30" src="https://img.icons8.com/ios/50/search.png" alt="search"/></span> 
            <input className="p-3"  style={{width:"100%", height:"60px"}} placeholder="Eg: How I open my account, how do i activate F&O..." />
        </div>
        </div>
        </section>
    );
}

export default Hero;