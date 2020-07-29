import React, {useState, useEffect} from 'react';
import Slider from 'infinite-react-carousel';
import Section from "./Section";
import publicURL from '../../publicURL';

const HobbiesCarousel = (props) => {
    const [autoplay, setAutoplay] = useState(false);
    const [open, setOpen] = useState(false);
    const [carouselItemIndex, setCarouselItemIndex] = useState(null);
    let settings = {
        initialSlide: 0,
        autoplaySpeed: 10000,
        autoplay: true,
        dots: true,
        duration: 300,
        overScan: 0,
        swipe: false,
    };
    const imagesAndDescription = [
        {
            imageFileName: 'garden',
            description: ' After a long day at the office, I enjoy working in the garden and building furniture. I also really like Extreme Sports. Mainly snowboarding, surfing and riding BMX.',
        },
        {
            imageFileName: 'bmx',
            description: ['I\'m riding BMX for 13 years, and one of the founders of the: B7MX crew,\n',
                ' a group of local riders in the city of Beer Sheva.\n',
                'We worked with the municipality toward building a bike park.\n',
                'Every year we organize events to promote the field in Israel and I run our\n',
                <a target="_blank" rel="noopener noreferrer" className="bright-link"
                   href='https://www.instagram.com/b7mx_crew/'> instagram page <i
                    className="fab fa-instagram link"/></a>,
                ' .']
        },
        {
            imageFileName: 'snowboard',
            description: 'Another area I really enjoy is snowboarding. I fly every year for vacation with friends. I really enjoy surfing in the endless open spaces, jumping in the snow park and learning new tricks and spending time with friends at the end of a legendary day.',
            style: {backgroundColor: '#da493a', color: 'rgba(255, 255, 255, 0.95)'}
        },
        {
            imageFileName: 'surfing',
            description: 'An important lesson that I have learned from my years of experience with extreme sports is that persistence and determination will take you far even if you fall down (a lot and break bones) along the way. I apply this lesson in my life.'
        }
    ];


    const image = (condition, index) => {
        let className = index % 2 === 0 ? 'right' : 'left';
        if (condition) {
            return (
                <div className={'col s12 m6 no-padding '}>
                    <div className={'image-wrapper ' + className + '-side center'}>
                        <img className={' hobbies-image ' + className + '-side hobbies-image-scale-'+ (index === carouselItemIndex && open && 'down' )}
                             src={publicURL()+ imagesAndDescription[index].imageFileName + '.jpg'}/>
                    </div>
                </div>
            )
        }
    };

    const startAnimation = () => {
        if (!autoplay) {
            setAutoplay(true);
        }
    };

    const toggleAnimation = ()=>{
        setOpen(!open);
    };

    return (
        <div onTouchEnd={()=>toggleAnimation()} className={'hobbies-carousel'}>
            <Slider {...settings} autoplay={autoplay}>
                {imagesAndDescription.map((imageAndDescription, index) => {
                    let className = index % 2 === 0 ? 'right' : 'left';
                    return (
                        <div index={index}  className={'my-container page ' + imageAndDescription.imageFileName}
                             onMouseOver={startAnimation} onTouchMove={startAnimation}>
                            <Section className='section-padding hobbies-section row'>
                                {image(index % 2 === 1, index)}
                                <div onTouchStart={()=>{setCarouselItemIndex(index); }} className={'col s12 m6 carousel-item-description ' + className + '-side'}>
                                     {/*data-aos={'fade-left'} data-aos-offset="200">*/}
                                    <p className={'hobbies-description hobbies-description-scale-' + (index === carouselItemIndex &&  open && 'up')}>
                                        {imageAndDescription.description}
                                    </p>

                                </div>
                                {image(index % 2 === 0, index)}
                            </Section>
                        </div>
                    )
                })}
            </Slider>
        </div>
    );
};

export default HobbiesCarousel;
