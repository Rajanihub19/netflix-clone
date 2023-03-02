import React from "react";
import { Button } from "reactstrap";
import "F:/myreact/netflix/src/components/jiran360project/src/components/allcomponents/neighbor1/index.css"
const TopBanner = ({ heading, description, button }) => {
    return (
        <div class=" text-center bg-light  p-5">
            <div dangerouslySetInnerHTML={{ __html: heading }} />
            <div dangerouslySetInnerHTML={{ __html: description }} />


            {/* <h1>{heading}</h1> */}
           
            {/* <Button  class="btn btn-primary rounded-pill" href="/login">{button}</Button> */}
            <button type="button" class="btn btn-primary rounded-pill pt-3 ps-3 pe-3 pb-3 box1" >{button}</button>
            <div class="text-end" >
                <img src="http://jiran360.dollopinfotech.com/assets/web/images/Path_1390.png" />
            </div>
        </div>
    )
}
export default TopBanner;