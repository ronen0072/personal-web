import React, {useState, Fragment} from 'react';
import ProjectDisplay from "./ProjectDisplay";
import Slider from 'infinite-react-carousel';


const ProjectsCarousel = (props) => {
    const settings = {
        initialSlide: 2,
        adaptiveHeight: true,
        arrowsBlock: false,
        autoplaySpeed: 10000,
        autoplay: true,
        dots: true,
        duration: 300,
        overScan: 1,
        swipe: false
    };

    if (props.projects)
    return (
        <div className={'projects-carousel'}>
            <Slider {...settings}>
                {props.projects && props.projects.map((project, index) => {
                    return (
                        <div
                            className={'my-container'}
                            key={project.id}>
                            <ProjectDisplay
                                className={''}
                                index={index}
                                displayContent={true}
                                editable={true}
                                {...project}
                            />
                        </div>
                    )
                })}
            </Slider>
        </div>
    );
    else return null;
};

export default ProjectsCarousel;