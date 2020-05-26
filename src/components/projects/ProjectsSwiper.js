import React, {useState, Fragment} from 'react';
import ProjectDisplay from "./ProjectDisplay";
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import EditProject from "./EditProject";

const ProjectsSwiper = (props) => {
    const [slideIndex, setSlideIndex] = useState(2);
    const [activeProject, setActiveProject] = useState(props.projects && props.projects[2]);
    const params = {
        pagination: {
            clickable: true
        },
        spaceBetween: 0,
        effect: "coverflow",
        centeredSlides: true,
        slidesPerView: 3,
        setWrapperSize: true,
        speed: 600,
        initialSlide: slideIndex,
        coverflowEffect: {
            rotate: 20, // Slide rotate in degrees
            stretch: 30, // Stretch space between slides (in px)
            depth: 480, // Depth offset in px (slides translate in Z axis)
            modifier: 2, // Effect multipler
            slideShadows: true // Enables slides shadows
        },
        on: {
            slideChange: function () {
                const activeIndex = document.getElementsByClassName('swiper-container')[0].swiper.activeIndex;
                setSlideIndex(activeIndex);
                setActiveProject(props.projects[activeIndex])
            },
            click : function (touchend) {
                if(touchend.path[3].className.includes('next'))
                    this.slideNext();
                if(touchend.path[3].className.includes('prev'))
                    this.slidePrev()
            }
        }
    };
    if (props.projects)
        return (
            <Fragment>
                <EditProject project={activeProject}/>
                <div className={'projects-swiper'}>
                    <Swiper {...params}>
                        {props.projects && props.projects.map((project, index) => {
                            if (Math.abs(index - slideIndex) === 4)
                                console.log(Math.abs(index - slideIndex));
                            return (
                                <div
                                    className={(Math.abs(index - slideIndex) > 2 ? ' slide-fade-out' : '')}
                                    style={{width: '700px'}}
                                    key={project.id}>
                                    <ProjectDisplay
                                        className={index === slideIndex ? "swiper-center-item" : 'swiper-item'}
                                        index={index}
                                        displayContent={index === slideIndex}
                                        {...project}
                                    />
                                </div>
                            )
                        })}
                    </Swiper>
                </div>
            </Fragment>
        );
    else return null;
};

export default ProjectsSwiper;