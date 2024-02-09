import { useState } from "react";
import Card from "./Card";

function Cards(props){
    let courses = props.courses;
    let category = props.category;
    const [likedCourses, setLikedCourses] = useState([]);

    function getCourses(){
        if(category === "All"){
            let allCourses = [];
            // data(object type)->category(array)->array of 5(card(object))
            Object.values(courses).forEach(array =>{
                array.forEach(courseData => {
                    allCourses.push(courseData);
                })
            })
            return allCourses;
        }
        else{
            return courses[category];
        }
    }
    return(
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getCourses().map((course)=>(
                    <Card key={course.id}
                    course={course}
                    likedCourses={likedCourses}
                    setLikedCourses={setLikedCourses}/>
                ))
            }
        </div>
    )
}
export default Cards;