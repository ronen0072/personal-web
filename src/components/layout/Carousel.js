import React, {Component} from 'react';
import Slider from 'infinite-react-carousel';
import Section from "./Section";

class carousel extends Component {
    publicURL = "https://ronen-finish-personal-web.firebaseapp.com/img/";
    imagesAndDescription = [
        {
            imageFileName: 'surfing',
            description: 'My favorite sports are snowboarding, surfing and riding BMX;'
        },
        {
            imageFileName: 'bmx',
            description: ['I have formed the: B7MX crew,\n',
                ' a group of local riders in the city of Beer Sheva.\n',
                'We worked with the municipality toward building a bike park.\n',
                'Every year we organize events to promote the field in Israel and I run our\n',
                <a target="_blank" rel="noopener noreferrer" className="bright-link" href='https://www.instagram.com/b7mx_crew/'> instagram page <i
                    className="fab fa-instagram link"/></a>,
                ' .']
        },
        {
            imageFileName: 'snowboard',
            description: ' An important lesson that I have learned from my years of experience with extreme sports is that persistence and determination will take you far even if you fall down (a lot and break bones) along the way. I apply this lesson in my life.',
            style: {backgroundColor: '#da493a', color: 'rgba(255, 255, 255, 0.95)' }
        },
        {
            imageFileName: 'trips',
            description: ' After a long day at the office I love to work in the garden and Build furniture.',
        },
    ];

    image = (condition, index) => {
        let className = index % 2 === 0 ? 'right' : 'left';
        if (condition) {
            return (
                <div className="col s12 m6 no-padding">
                    <div className={'image-wrper ' + className}>
                        <img className={'hobbies-image ' + className}
                             src={this.publicURL + this.imagesAndDescription[index].imageFileName + '.jpg'}/>
                    </div>
                </div>
            )
        }
    };

    render() {
        const settings = {
            adaptiveHeight: true,
            arrowsBlock: false,
            autoplaySpeed: 10000,
            autoplay: true,
            dots: true,
            duration: 300,
            overScan: 1,
            swipe: false
        };
        return (
            <div className={'hobbies-carousel'}>
                <Slider {...settings}>
                    {this.imagesAndDescription.map((imageAndDescription, index) => {
                        return (
                            <div className={'my-container page '+ imageAndDescription.imageFileName}>
                                <Section className='section-padding hobbies-section'>
                                    <div className="row">
                                        {this.image(index % 2 === 1, index)}
                                        <div className="col s12 m6 carousel-item-description">
                                            <p className={'hobbies-description'}>
                                                {imageAndDescription.description}
                                            </p>

                                        </div>
                                        {this.image(index % 2 === 0, index)}

                                    </div>
                                </Section>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        );
    }
}

export default carousel;