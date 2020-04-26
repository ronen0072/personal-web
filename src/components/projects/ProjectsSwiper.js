import React, {useState} from 'react';
import M from "materialize-css";
import FavoriteProject from "./FavoriteProject";
import Swiper from 'react-id-swiper';
// Version >= 2.4.0
import 'swiper/css/swiper.css';

function ProjectsSwiper(props) {
    const [projectDisplayIndex, setProjectDisplayIndex] =  useState(0);
    const [classN, setclassN] =  useState('');
    return (
        <div className='swiper'>
            <div className={'swiper-left-item '  + classN} onClick={()=>{
                setProjectDisplayIndex((projectDisplayIndex+1)%props.projects.length);
            }}>
                {props.projects &&
                <FavoriteProject
                    className={'swiper-item'}
                    index={projectDisplayIndex}
                    {...props.projects[(projectDisplayIndex+1)%props.projects.length]}
                />
                }
            </div>
            <div className={'swiper-right-item'} onClick={()=>{
                setProjectDisplayIndex(((projectDisplayIndex===0)? props.projects.length -1 : projectDisplayIndex -1));
            }}>
                {props.projects &&
                <FavoriteProject
                    className={'swiper-item'}
                    index={projectDisplayIndex}
                    {...props.projects[((projectDisplayIndex===0)? props.projects.length -1 : projectDisplayIndex -1)]}
                />
                }
            </div>

            {props.projects &&
            <FavoriteProject
                className={'swiper-center-item'}
                index={projectDisplayIndex}
                {...props.projects[projectDisplayIndex]}
                display={true}
            />
            }


        </div>
    );
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