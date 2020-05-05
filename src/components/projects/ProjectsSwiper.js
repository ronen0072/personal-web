import React, {useState} from 'react';
import ProjectDisplay from "./ProjectDisplay";
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

const ProjectsSwiper = (props) => {
    const [slideIndex,setSlideIndex] = useState(2);
    const params = {
        pagination: {
            clickable: true
        },
        spaceBetween: 0,
        effect: "coverflow",
        centeredSlides: true,
        slidesPerView: 3,
        setWrapperSize: true,
        speed: 400,
        initialSlide: slideIndex,
        coverflowEffect: {
            rotate: 14.83, // Slide rotate in degrees
            stretch: 0, // Stretch space between slides (in px)
            depth: 260, // Depth offset in px (slides translate in Z axis)
            modifier: 2, // Effect multipler
            slideShadows: true // Enables slides shadows
        },
        on: {
            slideChange: function () {
                const activeIndex = document.getElementsByClassName('swiper-container')[0].swiper.activeIndex;
                setSlideIndex( activeIndex);
            },
        }
    };
    if(props.projects)
    return (
        <div className={'Swiper'}>
            <Swiper {...params}>
                {props.projects && props.projects.map( (project, index)=>{
                    if(Math.abs(index - slideIndex)===4)
                        console.log(Math.abs(index - slideIndex));
                    return(
                        <div
                            className={(Math.abs(index - slideIndex)===4? ' slide-fade-out' : '')}
                             style={{width: '700px'}}
                            key={project.id} >
                            <ProjectDisplay
                                className={index === slideIndex? "swiper-center-item" : 'swiper-item'}
                                index={index}
                                displayContent={index === slideIndex}
                                {...project}
                            />
                        </div>
                    )
                })}
            </Swiper>
        </div>
    );
    else  return null;
};

export default ProjectsSwiper;