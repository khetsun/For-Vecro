import React from "react";
function Awards(){
    return(
        <div className="main-awards">
            <div className="awards-heading">
               <h1> Award Winnning Innovations</h1>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-sm-4">
                  <img className="img-one" src="https://uploads-ssl.webflow.com/5fc5d909ce29964856339c53/5fc727ccb7aa9a5d1df3b46c_stl_logo.png"/>
                  <p>Winner of 2020 Udaan</p>
                  <a>Read more</a>
                </div>
                <div className="col-sm-4">
                    <img className="img-two" src="https://uploads-ssl.webflow.com/5fc5d909ce29964856339c53/5fc5dc21d3d6eea460752b64_nvidia-inception-program-badge-rgb-for-screen.png"/>
                   <p>Part of Nvidia Inception</p>
                   <a>Read More</a>
                </div>
                <div className="col-sm-4">
                    <img className="img-three" src="https://uploads-ssl.webflow.com/5fc5d909ce29964856339c53/6106423a0bdddee861ac7b34_vecros%20microsfot%20for%20startup.jpg"/>
                      <p>Microsoft for startups</p>
                      <a>Read more</a>
                </div>
               </div>
            </div>
        </div>
    )
}
export default Awards;