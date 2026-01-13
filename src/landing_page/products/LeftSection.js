import React from "react";


function LeftSection({imageURL,
        productName,
        productDescription,
        tryDemo,
        learnMore,
        googlePlay,
        appStore
    }){
    return (
        <div className="container  mt-5">
            <div className="row mt-5">
                <div className="col-6">
                    <img src={imageURL} />
                </div>
                <div className="col-6 p-5 mt-5">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    
                    <div>
                        <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5985E1"><path d="m700-300-57-56 84-84H120v-80h607l-83-84 57-56 179 180-180 180Z"/></svg></a>
                    <a href={learnMore} style={{marginLeft:"50px", textDecoration:"none"}}>Learn More<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5985E1"><path d="m700-300-57-56 84-84H120v-80h607l-83-84 57-56 179 180-180 180Z"/></svg></a>
                    </div>
                    <div className="mt-3">
                    <a href={googlePlay} ><img src="media/images/googlePlayBadge.svg"/></a>
                    <a href={appStore} ><img src="media/images/appStoreBadge.svg"/></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;