import React from 'react';
import './Course.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStarHalfAlt, faPlus, faStar } from '@fortawesome/free-solid-svg-icons'

const Course = (props) => {
    const {name, image, price, ratings, instructor} = props.course;
    const handleCourse = props.handleCourse;
    return (
        <div className="course-container">
            <div className="course-image">
                <img src={image} alt=""/>
            </div>
            <div className="course-info">
                <h2>{name}</h2>
                <p className="instructor">by {instructor}.</p>
                <p className="price">Price : ${price}</p>
                <p className="ratings">Ratings : {ratings} <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStarHalfAlt} /><FontAwesomeIcon icon={faStarHalfAlt} /></p>
                <button onClick={() => handleCourse(props.course.price)}> Add to cart <FontAwesomeIcon icon={faPlus} /></button>
            </div>
        </div>
    );
};

export default Course;