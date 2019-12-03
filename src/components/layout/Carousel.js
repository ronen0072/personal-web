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
        return (
            <div className="carousel carousel-slider center">
                <div className="carousel-item red white-text" href="#one!"style={{  
                backgroundImage: "url( http://localhost:3000/img/"+"bmx"+".JPG )",
                }}>
                </div>
                <div className="carousel-item red white-text" href="#two!"style={{  
                backgroundImage: "url( http://localhost:3000/img/"+"snowbord"+".JPG )",
                }}>
                </div>
            </div>
        )
      }
    }
    
    export default carousel;