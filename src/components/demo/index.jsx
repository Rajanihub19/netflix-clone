import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'

// import popular from 'F:/myreact/netflix/src/components/json files/popular.json'

const Cards = ({ catg, popular }) => {
    return (
        <div style={{ margin: "12px" }}>
            <h2>{catg}</h2>
            <Carousel
                infinite
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 3,

                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,

                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 2,
                    }
                }}>
                {popular?.map((value, index) => {
                    return (
                        <div key={index} className="zoom">
                            <img src={value.src}
                                role="button" />
                            <div class="centered">
                                <div  >{value.title}</div>
                                <div  >{value.description}</div>
                            </div>
                        </div>
                    )
                })}


            </Carousel>
        </div>
    )
}
export default Cards;