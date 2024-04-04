import Header from "../components/header";
import React from "react";
import Footer from "../components/footer";

export default function Layout(props: {children: React.ReactNode}) {
    return (
        <div>
            <Header/>
            <div className="mx-auto mt-2 w-full max-w-5xl px-4 lg:mt-[18px] lg:px-0 items-center">
                {props.children}
            </div>
            <Footer/>
        </div>
    )
}