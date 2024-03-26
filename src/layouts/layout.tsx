import Header from "../components/header";
import React from "react";

export default function Layout(props: {children: React.ReactNode}) {
    return (
        <div>
            <Header/>
            <div>
                {props.children}
            </div>
        </div>
    )
}