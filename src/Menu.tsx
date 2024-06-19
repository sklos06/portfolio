import React from "react"

type MenuProps = {
    changeMedia: () => void;
    changeMail: () => void
    getMail: boolean
};
export default function Menu(props: MenuProps) {

    return (
        <div className="menu">
            <button className="menu-button" onClick={props.changeMedia}>Social media</button>
            <button className="menu-button" onClick={props.changeMail}>{props.getMail?"Profile": "Projects"}</button>
        </div>
    )
}