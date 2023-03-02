import React from "react";
import { Button } from "reactstrap";
const Signup1 = () => {
  return (

    <div className="bg-light position-relative text-center" sx={{backgroundColor: "#fbf6ff"}}>
      <div class="">
        <h3>
          Connect swiftly with your<br />
          jiran<span class="text-danger">360</span>
        </h3>
        <p>
          A quick sign up to get yourself <br />
          posted about your neighborhood  <br />
          or participate in the social activities with your neighbor.
        </p>
        <div>
          <Button color="primary">SIGNUP <i class="bi bi-arrow-up-right"></i></Button>
        </div>
        <div>
          <img src="https://jiran360.my/assets/web/images/svg-icons/BOTTOM_SECOND02_fnl0000.svg" />
        </div>

      </div>

    </div>



  )
}
export default Signup1;