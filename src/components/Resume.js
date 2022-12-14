import React from 'react';
import react from '../assets/icons/react.svg'
import python from '../assets/icons/python.svg'
import Bar from './Bar';
import java from '../assets/icons/java.svg'
import html from '../assets/icons/html.svg'
import graph from '../assets/icons/graph.svg'
import bootstrap from '../assets/icons/bootstrap.svg'
import css from '../assets/icons/css.svg'
import js from '../assets/icons/js.svg'

const languages = [
    {
        icon: java,
        name: 'Java',
        level: '80'
    },
    {
        icon: python,
        name: 'Python',
        level: '100'
    },
    {
        icon: html,
        name: 'HTML',
        level: '80'
    },
    {
        icon: css,
        name: 'CSS',
        level: '60'
    },
    {
        icon: js,
        name: 'JS',
        level: '80'
    },
    
    
    {
        icon: react,
        name: 'DataStructures And Algorithms',
        level: '80'
    }
]

const tools = [
    {
        icon: react,
        name: 'React.js',
        level: '80'
    },
    {
        icon: bootstrap,
        name: 'Bootstrap',
        level: '80'
    },
    {
        icon: react,
        name: 'Photoshop',
        level: '45'
    },
    {
        icon: react,
        name: 'Illustrator',
        level: '60'
    },
    {
        icon: react,
        name: 'Framer',
        level: '45'
    },

]

const style={
    "margin-top":"10px"
}
const Resume = () => {
    return (
        <div className="container resume">
            <div className="row">
                <div className="col-lg-12 resume-card" >
                    <h4 className="resume-card__heading">
                        <i>Education</i>
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            <u>Trade</u>:Electronics And Telecommunication Engineering
                        </h5>
                        <p className="resume-card__name">
                        <u>College</u>:Indian Institute of Engineering Science and Technology, Shibpur
            
                        </p>
                        
                        <p className="resume-card__details">I am a pre-final year undergrad persuing my B.Tech in Electronics And Telecommunication at Indian Institute of Engineering Science and Technology,Shibpur
</p>
<h4 class="cgpa">CGPA:8.00(Upto 5th Semester)</h4>
                    </div>
                </div>
                {/* <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading">
                        Experience
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Intern
                        </h5>
                        <p className="resume-card__name">
                            TCS (2020)
                        </p>
                        <p className="resume-card__details">I work as a intern in TCS and also completed some projects on testing</p>
                    </div>
                </div> */}
            </div>

            <div className="row" style={style} >
                <div className="col-lg-6 resume-languages">
                    <h5 className="reume-language__heading">
                        <i>Language and Framework</i>
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            languages.map(language =>
                                <Bar value={language} />
                            )
                        }
                    </div>
                </div>
                <div className="col-lg-6 resume-languages">
                    <h5 className="reume-language__heading">
                        <i>Tools and Frameworks</i>
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            tools.map(tool => <Bar value={tool} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;