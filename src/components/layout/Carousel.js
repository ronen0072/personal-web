import React, {Component} from 'react';
import M from "materialize-css";

class carousel extends Component {
    publicURL = "https://ronen-finish-personal-web.firebaseapp.com/img/";
    imagesAndDescription = [
        {num: '#one!', imageFileName : 'surfing', description: 'My favorite sports are snowboarding, surfing and riding BMX;'},
        {num: '#two!', imageFileName : 'bmx', description: ['I have formed the: B7MX crew,\n' ,
                ' a group of local riders in the city of Beer Sheva.\n' ,
                'We worked with the municipality toward building a bike park.\n',
                'Every year we organize events to promote the field in Israel and I run our\n',
                <a className="link" href='https://www.instagram.com/b7mx_crew/'> instagram page <i className="fab fa-instagram link"/></a>,
                ' .']},
        {num: '#three!', imageFileName : 'snowboard', description: ' An important lesson that I have learned from my years of experience with extreme sports is that persistence and determination will take you far even if you fall down (a lot and break bones) along the way. I apply this lesson in my life.'},
        {num: '#four!', imageFileName : 'trips', description: ' After a long day at the office I love to work in the garden and Build furniture.'},
    ];
    moveNextCarousel() {
        var elems = document.querySelector('.carousel.carousel-slider');
        if (elems) {
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
        setInterval(() => {
            this.moveNextCarousel();
        }, 30000);
    }

    image = (condition, index) => {
        let className =  index%2===0? 'right' : 'left';
        if (condition){
            return (
                <div className="col s12 m6 no-padding">
                    <div className={'image-wrper '+ className}>
                        <img className={'hobbies-image '+ className} src={this.publicURL + this.imagesAndDescription[index].imageFileName + '.jpg'}/>
                    </div>
                </div>
            )
        }
    };

    render() {
        const bmxImg = "url( " + this.publicURL + "bmx.jpg )";
        const snowboardImg = "url( " + this.publicURL + "snowboard.jpg )";
        const surfingImg = "url( " + this.publicURL + "surfing.jpg )";
        const tripsImg = "url( " + this.publicURL + "trips.jpg )";

        return (
            <div className="carousel carousel-slider col">
                {this.imagesAndDescription.map((imageAndDescription, index)=>{
                    return(
                        <div className="carousel-item" href={imageAndDescription.num}>
                            {this.image( index%2===1, index)}
                            <div className="col s12 m6 section-padding carousel-item-description">
                                <p className={'hobbies-description'}>
                                    {imageAndDescription.description}
                                </p>

                            </div>
                            {this.image(index%2===0, index)}

                        </div>
                    )
                })}
            </div>
        )
    }
}

export default carousel;