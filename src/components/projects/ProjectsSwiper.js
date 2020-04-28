import React, {useEffect, useState} from 'react';
import M from "materialize-css";
import FavoriteProject from "./FavoriteProject";
import ProjectDisplay from "./ProjectDisplay";
import Swiper from 'react-id-swiper';
// Version >= 2.4.0
import 'swiper/css/swiper.css';

const ProjectsSwiper = (props) => {
    const  publicURL ="https://ronen-finish-personal-web.firebaseapp.com/img/";
    const [h,setH] = useState('500px');
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
        speed: 500,
        initialSlide: slideIndex,
        coverflowEffect: {
            rotate: 14.795, // Slide rotate in degrees
            stretch: 0, // Stretch space between slides (in px)
            depth: 380, // Depth offset in px (slides translate in Z axis)
            modifier: 2, // Effect multipler
            slideShadows: true // Enables slides shadows
        },
        on: {
            slideChange: function () {
                const activeIndex = document.getElementsByClassName('swiper-container')[0].swiper.activeIndex;
                setSlideIndex( document.getElementsByClassName('swiper-container')[0].swiper.activeIndex);
                console.log('slideChange: ',activeIndex);

            },
        }
    };
    const getIndex = ()=>{
        const div = document.getElementsByClassName('swiper-container')[0].swiper.activeIndex;
        console.log('getIndex: ', div );
    };
    if(props.projects)
    return (
        <div className={'Swiper'}>
            <Swiper {...params}>
                {props.projects && props.projects.map( (project, index)=>{
                    return(
                        <div style={{width: '650px'}} onClick={()=>{getIndex()}}>
                            <ProjectDisplay
                                key={project.id}
                                className={index === slideIndex? "swiper-center-item" : 'swiper-item'}
                                index={index}
                                displayContent={index === slideIndex}
                                {...project}
                            />
                        </div>
                    )
                })}

                <ProjectDisplay className={"project-col"} {...props.projects[1]}
                                index={4}
                                displayContent={4 === slideIndex}/>
                {/*<ProjectDisplay className={"project-col"} {...props.projects[2]}/>*/}
                {/*<ProjectDisplay className={"project-col"} {...props.projects[3]}/>*/}
            </Swiper>
        </div>
    );
    else  return null;
};

export default ProjectsSwiper;

// class ProjectCarousel extends Component{
//     publicURL ="https://ronen-finish-personal-web.firebaseapp.com/img/";
//     moveNextCarousel() {
//         var elems = document.querySelector('.carousel');
//         if(elems){
//             var moveRight = M.Carousel.getInstance(elems);
//             moveRight.next(1);
//         }
//     }
//     movePrevCarousel() {
//         var elems = document.querySelector('.carousel.carousel-slider');
//         var moveLeft = M.Carousel.getInstance(elems);
//         moveLeft.prev(1);
//     }
//     componentDidMount() {
//         var elem = document.querySelector('.carousel');
//         var instance = M.Carousel.init(elem, { duration: 200 });
//     }
//     render() {
//         const bmxImg = this.publicURL+"bmx.jpg";
//         const snowboardImg = this.publicURL+"snowboard.jpg";
//         const surfingImg = this.publicURL+"surfing.jpg";
//         const tripsImg = this.publicURL+"trips.jpg";
//         const number = ["#one!", "#two!", "#three!", "#four!", "#five!"];
//         const projects = this.props.projects;
//         return (
//             <div className="carousel">
//                 <div className="carousel-item" href="#one!">
//                     {projects && <FavoriteProject
//                         className={"project-col favorite-margin "}
//                         index={0}
//                         {...projects[0]}
//                     />}
//                 </div>
//                 <div className="carousel-item" href="#two!">dsadsad<img src={snowboardImg}/></div>
//                 <div className="carousel-item" href="#three!">dasd<img src={surfingImg}/></div>
//                 <div className="carousel-item" href="#four!">sdsad<img src={tripsImg}/></div>
//             </div>
//         )
//       }
//     }
//
//     export default ProjectCarousel;