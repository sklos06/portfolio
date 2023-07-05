import React from "react"

type MenuProps = {
    change: () => void;
};
export default function Menu(props:MenuProps){

    return(
        <div className="menu">
            <button className="menu-button" onClick={props.change}>Social media</button>
            <button className="menu-button">Contact</button>
        </div>
    )
}