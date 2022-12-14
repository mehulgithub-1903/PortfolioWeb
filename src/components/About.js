import React from 'react';
import api from '../assets/icons/cloud.png'
import backend from '../assets/icons/backend.png'
import algo from '../assets/icons/cp.svg'
import computer from '../assets/icons/frontend.png'
import SkillCard from './SkillCard';
const skills = [
  {
      icon: computer,
      title: "Frontend Development",
      about: "I can create beautiful and responsive websites using HTML,CSS,JS.In addition to this i am also well skilled in BOOTSTRAP and React.js frameworks"
  },
  {
      icon: backend,
      title: "Backend  Development",
      about: `I mainly carry out my backend development in java.
      Well-versed in handling queries and maintaining databases using MySql
      followed by database connection and integration,DBMS and OOPs in java`
  },
  {
      icon: api,
      title: "Cloud Computing",
      about: "Currently i am learning Cloud Computing using AWS Platform.I am starting my journey of cloud first step being AMAZON CLOUD PRACTITIONER."
  },
  {
      icon: algo,
      title: "Competitive Coding",
      about:  `Solving Problems on Data Structures and Algorithms on various online judges like leetcode(360 problems solved),Codechef (4 star),Atcoder`
  },

]


const About = () => {
  return (
    <div className="about">
    <h6 className="about__intro">
    Pleased to have You here 
    <br></br>
    Hello I am Mehul Porwal  
    <br></br>
    A 3rd Year undergrad in E&TC at the IIEST,Shibpur. 
    I focus my clocks on learning Software development and Web Development and Cloud Computing streams, and I am currently looking for an internship opportunity.I competitively code to enhance my problem-solving skills with a thorough knowledge of Data Structures and Algorithms.My key gems are Java, React.js, and other CS Fundamentals(Object oriented programming, DataBase Management Systems). 
    </h6>
    <div className="container about__container">
        <h6 className="about__heading">What I offer</h6>
        <div className="row">
            {
                skills.map(skill =>
                    <SkillCard skill={skill} />
                )
            }
        </div>
    </div>
</div>
  );
};

export default About;
