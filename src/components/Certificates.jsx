import React from 'react'
import { SectionWrapper } from "../hoc";

import py from './images/certificates/Python_certificate.jpg';
import js from './images/certificates/JavaScript_certificate.jpg';
import java from "./images/certificates/Java_certificate.jpg"
import php from './images/certificates/PHP_certificate.jpg';
import c from './images/certificates/C_certificate.jpg';
import py1 from "./images/certificates/Py_certificate.png"
import cpp from './images/certificates/CPlusPlus_certificate.jpg';
import csharp from './images/certificates/CSharp_certificate.jpg';
import ruby from "./images/certificates/Ruby_certificate.jpg"
import html from './images/certificates/HTML_certificate.jpg';
import css from './images/certificates/CSS_certificate.jpg';
import sql from "./images/certificates/SQL_certificate.jpg"
import './Certificates.css';

function Certificates() {
    return (
        <div className="certificates">
             <section className="s2"><br /><a name="certificate"></a>
                <div className="main-container">
                    <h3 style={{textAlign: "center" }}>
                        <ReactTypingEffect
                                className="hello"
                                text={["My Certificates"]}
                                eraseDelay="500"
                                typingDelay="1000"
                                cursorRenderer={cursor => <h2>{cursor}</h2>}
                                displayTextRenderer={(text, i) => {
                                return (
                                    <h2>
                                    {text.split('').map((char, i) => {
                                        const key = `${i}`;
                                        return (
                                        <span
                                            key={key}
                                            style={i%2 === 0 ? { color: 'magenta'} : {color: 'yellow'}}
                                        >{char}</span>
                                        );
                                    })}
                                    </h2>
                                );
                                }}        
                            /> 
                    </h3>
                    <Certificates />
                </div><br/>             
            </section>
            <div class="row">
                <div className="column col-md-4">
                    <div class="flip-box">
                        <div class="flip-box-inner">
                            <div class="flip-box-front">
                                <h2>Python<img src={py}style={{width: "100%"}}alt="" /></h2>
                            </div>
                            <div class="flip-box-back">
                                <h2>JavaScript<img src={js}style={{width: "100%"}}alt="" /></h2>
                            </div>
                        </div>
                    </div>                        
                </div><br />

                    <div className="column col-md-4">
                        <div class="flip-box">
                            <div class="flip-box-inner">
                                <div class="flip-box-front">
                                    <h2>Java<img src={java}style={{width: "100%"}}alt="" /></h2>
                                </div>
                                <div class="flip-box-back">
                                    <h2>PHP<img src={php}style={{width: "100%"}}alt="" /></h2>
                                </div>
                            </div>
                        </div> 
                    </div><br />

                    <div className="column col-md-4">
                        <div class="flip-box">
                            <div class="flip-box-inner">
                                <div class="flip-box-front">
                                    <h2>C<img src={c}style={{width: "100%"}}alt="" /></h2>
                                </div>
                                <div class="flip-box-back">
                                    <h2>C++<img src={cpp}style={{width: "100%"}}alt="" /></h2>
                                </div>
                            </div>
                        </div> 
                    </div><br />
                </div>
                <div class="row">
                    <div className="column col-md-4"><br /><br /><br />
                        <div class="flip-box">
                            <div class="flip-box-inner">
                                <div class="flip-box-front">
                                    <h2>Python<img src={py1}style={{width: "100%", height: "210px"}}alt="" /></h2>
                                </div>
                                <div class="flip-box-back">
                                    <h2>CSharp<img src={csharp}style={{width: "100%"}}alt="" /></h2>
                                </div>
                            </div>
                        </div> 
                    </div><br />

                    <div className="column col-md-4"><br /><br /><br />
                        <div class="flip-box">
                            <div class="flip-box-inner">
                                <div class="flip-box-front">
                                    <h2>Ruby<img src={ruby}style={{width: "100%"}}alt="" /></h2>
                                </div>
                                <div class="flip-box-back">
                                    <h2>SQL<img src={sql}style={{width: "100%"}}alt="" /></h2>
                                </div>
                            </div>
                        </div> 
                    </div><br />

                    <div className="column col-md-4"><br /><br /><br />
                        <div class="flip-box">
                            <div class="flip-box-inner">
                                <div class="flip-box-front">
                                    <h2>HTML<img src={html}style={{width: "100%"}}alt="" /></h2>
                                </div>
                                <div class="flip-box-back">
                                    <h2>CSS<img src={css}style={{width: "100%"}}alt="" /></h2>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>                              
            </div>
    )
}

export default SectionWrapper(Certificates, "certificates");