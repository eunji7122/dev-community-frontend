import Header from "./header";
import React from "react";

export default function Layout(props: {children: React.ReactNode}) {
    return (
        <div>
            <Header/>
            {props.children}
        </div>
    )
}