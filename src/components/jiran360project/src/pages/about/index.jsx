import React from "react";
import About1 from "../../components/about1/about";
import MainLayOut from "../../layouts/mainlayout";
import Signup1 from "../../utils/signupcomponent1";
import TopBanner from "../../utils/topbanner";



const About=()=>{
    return(
<div>
<MainLayOut>
<div>
  <TopBanner heading="<h1>Your <span class='text-danger'>Opportunities</span> are just around the corner</h1>"
    description="Get to know which opportunities are for you"
    button="Join Your Neighborhood"
  />
  <p class="font_20 outfit_R  mb-0"> </p>
</div>
<div>
  <About1/>
</div>
    <div>
        <Signup1/> 
    
    </div>
    

    </MainLayOut>
</div>
    )
}
export default About;