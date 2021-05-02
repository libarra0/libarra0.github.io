import "./Intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro() {
    
    const textRef = useRef();

    useEffect(()=> {
        init(textRef.current, { 
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ['Developer', 'QA', 'Game Designer'] 
        });
    },[])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imageContainer">
                    <img src="assets/man-01.png" alt="man-01"/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Leonardo Ibarra Palacios</h1>
                    <h3>Software Engineering <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="down"/>
                </a>
            </div>
        </div>
    )
}
