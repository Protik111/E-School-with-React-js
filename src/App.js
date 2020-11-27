import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import data from './Data/data.json'
import Header from './Components/Header/Header';
import Course from './Components/Course/Course';
import Count from './Components/Count/Count';


function App() {
  const [courses, setCourses] =  useState([]);
  const [count, setCount] = useState([]);

  useEffect( () => {
    setCourses(data);
  }, [])

  const handleCourse = (id) =>{
    const newCount = [...count, id];
    setCount(newCount);
  }
  return (
    <div>
        <Header></Header>
          <ul>
            {
              courses.map((course => <Course handleCourse={handleCourse} course={course} key={course.id}></Course>))
            }
          </ul>
          <Count count={count}></Count>
    </div>
  );
}

export default App;
