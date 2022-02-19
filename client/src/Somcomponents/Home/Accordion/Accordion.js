import React,{useState,useRef} from 'react';
import './Accordion.css';
import Chevron from './Chevron';
const Accordion = (props)=>{

    const [active, setActive] = useState("");
    const [height,setHeight] = useState("0px");
    const [rotate,setRotate] = useState("acc_icon");

    const content = useRef(null);

    function Toggle(){
        setActive(active === "" ? "active":"");
        setHeight(active==="active"?"0px":`${content.current.scrollHeight}px`);
        setRotate(active==="active"?"acc_icon":"acc_icon rotate")
    }

    return(
        <div className="acc_section">
            <button className={`acc ${active}`} onClick={Toggle}>
                <p className="acc_title">{props.title}</p>
                <Chevron className={`${rotate}`} width={10} fill={"#777"} />
            </button>
        <div ref={content} style={{maxHeight:`${height}`}} className="acc_content">
            <div className="acc_text" dangerouslySetInnerHTML={{__html:props.content}}/>
        </div>
        </div>
    );
}

export default Accordion;