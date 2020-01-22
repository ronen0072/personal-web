import React, { Component } from 'react';
import M from "materialize-css";

class carousel extends Component{
    publicURL ="https://ronen-finish-personal-web.firebaseapp.com/img/";
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
            this.moveNextCarousel();}, 30000);
    }
    render() {
        const bmxImg = "url( "+this.publicURL+"bmx.jpg )";
        const snowboardImg = "url( "+this.publicURL+"snowboard.jpg )";
        const surfingImg = "url( "+this.publicURL+"surfing.jpg )";
        const tripsImg = "url( "+this.publicURL+"trips.jpg )";
        return (
            <div className="carousel carousel-slider col center">
                <div className="carousel-item blue white-text" href="#one!" style={{
                    backgroundImage: surfingImg
                }}>
                </div>
                <div className="carousel-item red white-text" href="#two!" style={{
                    backgroundImage: bmxImg
                }}>
                </div>
                <div className="carousel-item white white-text" href="#three!" style={{
                    backgroundImage: snowboardImg,
                }}>
                </div>
                <div className="carousel-item green white-text" href="#four!" style={{
                    backgroundImage: tripsImg,
                }}>
                </div>
            </div>
        )
      }
    }
    
    export default carousel;