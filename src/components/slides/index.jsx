import React from "react";
import ResponsiveAppBar from "../navbar";
const styles={
    position: "absolute",
    right: "15%",
    bottom: "1.25rem",
    left: "20%",
    // paddingTop: "1.25rem",
    // paddingBottom: "1.25rem",
    color: "#fff",
    // textAlign: "center",
}
const Slides = () => {

    return (
      <div sx={{position:"relative"}}>
      <div className="centered1">

      <ResponsiveAppBar/>
      </div>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 3"></button>
    
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://image.tmdb.org/t/p/w1280/mDfJG3LC3Dqb67AZ52x3Z0jU0uB.jpg" className="d-block w-100" alt="..."/>
      <div className=" d-none d-md-block" style={styles}>
        <h1>Avengers: Infinity War</h1>
        <p>As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.
        </p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://image.tmdb.org/t/p/w1280/wXsQvli6tWqja51pYxXNG1LFIGV.jpg" className="d-block w-100" alt="..."/>
      <div className=" d-none d-md-block" style={styles}>
        <h1>The lion king</h1>
        <p>A young lion prince is cast out of his pride by his cruel uncle, who claims he killed his father. While the uncle rules with an iron paw, the prince grows up beyond the Savannah, living by a philosophy: No worries for the rest of your days. But when his past comes to haunt him, the young prince must decide his fate: Will he remain an outcast or face his demons and become what he needs to be?</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://image.tmdb.org/t/p/w1280/lFwykSz3Ykj1Q3JXJURnGUTNf1o.jpg" className="d-block w-100" alt="..."/>
      <div className=" d-none d-md-block" style={styles}>
        <h1> How to Train Your Dragon: The Hidden World</h1>
        <p>As Hiccup fulfills his dream of creating a peaceful dragon utopia, Toothless’ discovery of an untamed, elusive mate draws the Night Fury away. When danger mounts at home and Hiccup’s reign as village chief is tested, both dragon and rider must make impossible decisions to save their kind.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://c4.wallpaperflare.com/wallpaper/622/739/588/stranger-things-netflix-clouds-bicycle-wallpaper-preview.jpg" className="d-block w-100" alt="..."/>
      <div className=" d-none d-md-block" style={styles}>
        <h1>Stranger things</h1>
        <p>more adventure to come.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  
</div>
      </div>

)
}
export default Slides;