import React from "react";

export default function Section(props) {
    return (
        <section id={props.name} className={props.name}>
            {props.children}
        </section>
    );
}