import React from "react";
function Carousel(){
    return (
        <div className="slides">
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
           <ol class="carousel-indicators">
           <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
           <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
           <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
           </ol>
          <div class="carousel-inner">
           <div class="carousel-item active">
             <div className="first">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1>Remote work is new normal</h1>
                            <p>our warehouse drones help you automate cycle counts of inventory. Takes only 1 hour to scan an est. 200-400 pallet positions per drone (includes recharge time).</p>
                              <button className="btn btn-primary btn-sm">Learn more</button>
                        </div>
                        <div className="col-md-6"><img src="https://uploads-ssl.webflow.com/5fc5d909ce29964856339c53/610abe8218c86b0d03cdbd65_81243378_581936859264267_4604683903179948032_n.jpg"/></div>
                        </div>
                   </div>
               </div>
           </div>
          <div class="carousel-item">
            <div className="first">
              <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1>3D mapping has never been easy</h1>
                            <p>our drone is equipped with vision sensors that can map entire faciltiy and generate 3D map of the same.</p>
                        </div>
                        <div className="col-md-6"><img src="https://uploads-ssl.webflow.com/5fc5d909ce29964856339c53/5fca5d644568a5f3c7311ab2_vlcsnap-2020-12-04-21h31m22s678.png"/></div>
                    </div>
                </div>
            </div>
          </div>
          
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only"></span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only"></span>
        </a>
       </div>
      </div>
      </div>)
}
export default Carousel;