import React, {useState, useEffect, Fragment} from 'react';
import ProjectDisplay from "./ProjectDisplay";
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import EditProject from "./EditProject";

const ProjectsSwiper = (props) => {
    const [slideIndex, setSlideIndex] = useState(2);
    const [activeProject, setActiveProject] = useState(props.projects && props.projects[2]);
    const [width, setWidth] = React.useState(window.innerWidth);
    const [isResize, setIsResize] = React.useState(window.innerWidth);

    const breakpoint = 620;
    useEffect(() => {
        setWidth(window.innerWidth);
    }, [isResize]);

    useEffect(() => {
        const handleWindowResize = () => setIsResize(!isResize);
        window.addEventListener("resize", handleWindowResize);

        // Return a function from the effect that removes the event listener
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);


    const params = {
        pagination: {
            clickable: true,
            el: '.swiper-pagination',
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
                setSlideIndex(this.realIndex);
                setActiveProject(props.projects[this.realIndex]);
            },
            click: function (touchend) {
                if (touchend.path[3].className.includes('next'))
                    this.slideNext();
                if (touchend.path[3].className.includes('prev'))
                    this.slidePrev()
            }
        }
    };
    const paramForXS = {
        pagination: {
            clickable: true,
            el: '.swiper-pagination',
        },
        initialSlide: slideIndex,
        setWrapperSize: true,
        centeredSlides: true,
        loop: true,
        on: {
            slideChangeTransitionStart: function () {
                setSlideIndex(this.realIndex);
                setActiveProject(props.projects[this.realIndex]);
            },

            slideNextTransitionEnd: function () {
                if (this.realIndex === 0)
                    this.loopFix();
            },

            slidePrevTransitionEnd: function () {
                if (this.realIndex === props.projects.length - 1)
                    this.loopFix();
            },
        },
    };

    if (props.projects)
        if (width < breakpoint)
            return (
                <div className={'projects-swiper-xs'}>
                    <Swiper {...paramForXS}>
                        {props.projects && props.projects.map((project, index) => {
                            return (
                                <div
                                    key={project.id}>
                                    <ProjectDisplay
                                        index={index}
                                        displayContent={index === slideIndex}
                                        editable={true}
                                        {...project}
                                    />
                                </div>
                            )
                        })}
                    </Swiper>
                </div>
            );
        else return (
            <Fragment>
                <EditProject project={activeProject}/>
                <div className={'projects-swiper'}>
                    <Swiper {...params}>
                        {props.projects && props.projects.map((project, index) => {
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