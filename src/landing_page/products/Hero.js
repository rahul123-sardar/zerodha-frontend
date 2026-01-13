import React from "react";

function Hero(){
    return (
        <div className="container border-bottom">
            <div className="text-center mt-5 p-3">
            <h1>Technology</h1>
            <h3 className="text-muted mt-3 fs-4">Sleek, modern and intuitive trading platform</h3>
            <p className="mt-3 mb-5">Check out our{" "}<a href="" style={{textDecoration: "none"}}>investment offering<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5985E1"><path d="m700-300-57-56 84-84H120v-80h607l-83-84 57-56 179 180-180 180Z"/></svg></a></p>
            </div>
        </div>
    );
}

export default Hero;