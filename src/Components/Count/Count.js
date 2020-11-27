import React from 'react';
import './Count.css'

const Count = (props) => {
    const course = props.count;
    console.log(course);
    let totalCost = 0;
    for (let i = 0; i < course.length; i++) {
        const Courses = course[i];
        const parsedPrice = parseInt(Courses);
        totalCost = totalCost + parsedPrice;
        
    }
    return (
        <div className="course-count">
            <h3>Course Overview</h3>
            <hr/>
            <h4 className="total-course">Total Courses : {course.length}</h4>
            <h4 className="total-price">Total Price : ${totalCost}</h4>

        </div>
    );
};

export default Count;