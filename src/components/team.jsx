import React from "react";
function Team(){
    return(
     <div className="team-main">
     <div className="team-heading">
     <h1> Best Team Ever</h1>
     <p>Hustlers, Hackers and Hipsters of our universe.</p>
     </div>
     <div className="team-info">
     <div class="row">
        <div class="col-sm-6">
    <div class="card card-one">
      <div class="card-body">
        <h3 class="card-title">Besta Prem Sai</h3>
        <p class="card-text">Chief Executive Officer.</p>
         <a className="facebook-icon"><i class="fab fa-facebook-f fa-2x"></i></a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card card-two">
      <div class="card-body">
        <h3 class="card-title">Sai Haneesh Allu</h3>
        <p class="card-text">Chief Technology Officer</p>
        <a className="facebook-icon"><i class="fab fa-facebook-f fa-2x"></i></a>
      </div>
    </div>
    </div>
    </div>
     </div>
     </div>

    )
}
export default Team;