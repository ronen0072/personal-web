import React, { Component } from 'react';
import M from "materialize-css";

class carousel extends Component{
    moveNextCarousel() {
        var elems = document.querySelector('.carousel.carousel-slider');
        if(elems){
            var moveRight = M.Carousel.getInstance(elems);
            moveRight.next(1);
        }
    }
    movePrevCarousel() {
        var elems = document.querySelector('.carousel.carousel-slider');
        var moveLeft = M.Carousel.getInstance(elems);
        moveLeft.prev(1);
    }
    componentDidMount() {
        var carouselElems = document.querySelector('.carousel.carousel-slider');
        M.Carousel.init(carouselElems, {
            fullWidth: true,
            indicators: true
        });
        setInterval(()=>{
            this.moveNextCarousel();}, 10000);
    }
    render() {
        const baesUrl = "http://localhost:3000/img/"
        const bmxImg = "url( "+baesUrl+"bmx.JPG )";
        const snowbordImg = "url( "+baesUrl+"snowbord.JPG )";
        return (
            <div className="carousel carousel-slider center">
                <div className="carousel-item red white-text" href="#one!" style={{
                    backgroundImage: bmxImg
                }}>
                </div>
                <div className="carousel-item red white-text" href="#two!" style={{  
                    backgroundImage: snowbordImg,
                }}>
                </div>
            </div>
        )
      }
    }
    
    export default carousel;