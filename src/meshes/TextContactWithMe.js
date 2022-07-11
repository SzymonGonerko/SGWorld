import React, {useState} from "react";
import {Text} from "@react-three/drei";
import OpenSans from "../fonts/OpenSans.ttf"
import { Html } from "@react-three/drei";

import phone from "../icons/phone.svg"
import email from "../icons/email.svg"
import github from "../icons/github.svg"
import linkedin from "../icons/linkedin.svg"
import download from "../icons/download.svg"

import Szymon_Gonerko_CV from "../cv/Szymon_Gonerko_CV.pdf"

const textWhatCanIDoo = "I'm pleased that you visited me, if you think that we can establish a valuable cooperation, please contact me ..."

const initialIcon = {
    width: "30px",
    height: "30px",
    backgroundSize: "contain",
    backgroundPosition: "center",
    display: "inline-block",
    backgroundRepeat: "no-repeat",
    
}
const phoneIcon = {
    ...initialIcon,
    backgroundImage: `url(${phone})`,
    transform: "translate(-20px, 3px)"
}
const emailIcon = {
    ...initialIcon,
    backgroundImage: `url(${email})`,
    transform: "translate(-20px, 7px)"
}
const githubIcon = {
    ...initialIcon,
    backgroundImage: `url(${github})`,
    marginRight: "10px",
    transform: "translate(0, 2px)"
}
const linkedinIcon = {
    ...initialIcon,
    backgroundImage: `url(${linkedin})`,
    transform: "translate(-5px, 2px)"
}
const downloadIcon = {
    ...initialIcon,
    backgroundImage: `url(${download})`,
    transform: "translate(-5px, 2px)"
}

    const initialStyles = {
      fontSize: 0.13,
      color: "black",
      font: OpenSans,
    };
    const firstTitle = {
        ...initialStyles,
        fontSize: 0.19,
        letterSpacing: 0.1,
    }
    const secTitle = {
        ...initialStyles,
        fontSize: 0.19,
        letterSpacing: 0.1,
    }
    const defaultText = {
        ...initialStyles,
        fontSize: 0.08,
        maxWidth: 2,
        letterSpacing: 0.01,
    }
    const verticalTitle = {
        ...initialStyles,
        fontSize: 0.2,
        letterSpacing: 0.1
    }

    const liStyle = {
        listStyle: "none",
        fontSize: "35px",
        fontFamily: "OpenSans",
        letterSpacing: 2
    }

    const anchorGithubStyles = {
        display: "inline-block",
        fontFamily: "OpenSans",
        marginRight: "40px",
        fontSize: "35px",
        textDecoration: "none",
        lineHeight: "60px",
        color: "black",
        border: "1px solid black",
        borderRadius: "10px",
        width: "190px",
        height: "65px",
        textAlign: "center"
    }


    const anchorLinkedInStyles = {
        display: "inline-block",
        fontFamily: "OpenSans",
        fontSize: "35px",
        textDecoration: "none",
        lineHeight: "60px",
        color: "black",
        border: "1px solid black",
        borderRadius: "10px",
        width: "190px",
        height: "65px",
        textAlign: "center"
    }

    const anchorDownloadStyles = {
        display: "inline-block",
        fontFamily: "OpenSans",
        marginLeft: "40px",
        fontSize: "35px",
        textDecoration: "none",
        lineHeight: "60px",
        color: "black",
        border: "1px solid black",
        borderRadius: "10px",
        width: "220px",
        height: "65px",
        textAlign: "center"
    }

export const TextContactWithMe = () => {

    return (
    <group position={[-3.36, 1.1, -1.5]} rotation={[0, Math.PI / 2, 0]}>
        <group position={[-0.49, 0.1, 0]}>
            <Text {...firstTitle} text={"CONTACT"} position={[0, 0.83, 0]}/>
            <Text {...verticalTitle} text={"WITH"} position={[-0.51, 0.69, 0]} rotation={[0, 0, Math.PI /2]}/>
            <Text {...secTitle} text={"ME"} position={[-0.23, 0.56, 0]}/>
        </group>

        <group position={[-0.06, -0.3, 0]}>
        <Text {...defaultText} text={textWhatCanIDoo} position={[0, 0.7, 0]}/>
        </group>

        <Html position={[-0.55, 0.07, 0]} scale={[0.1, 0.1, 0.1]} rotation={[0, 0, 0]} transform >
            <ul>
                <li style={liStyle}><i style={phoneIcon}/>+48 574 984 766</li>
                <li style={liStyle}><i style={emailIcon}/>szymon.gonerko@gmail.com</li>
            </ul>
        </Html>
        <Html position={[-0.22, -0.25, 0]} scale={[0.1,0.1,0.1]} rotation={[0, 0, 0]} transform >
            <a style={anchorGithubStyles} href="https://github.com/SzymonGonerko" target="_blank">
                <i style={githubIcon}/>GitHub
            </a>

            <a style={anchorLinkedInStyles} href="https://www.linkedin.com/in/szymon-gonerko-b64504237/" target="_blank">
                <i style={linkedinIcon}/>LinkedIn
            </a>

            <a style={anchorDownloadStyles} href={Szymon_Gonerko_CV} download>
                <i style={downloadIcon}/>Download CV
            </a>
        </Html>
    </group>);
  }