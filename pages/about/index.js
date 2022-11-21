import {Fragment} from "react";
import Hero from "@components/About/Hero";
import EarlyLife from "@components/About/EarlyLife";
import Goal from "@components/About/Goal";

export default function Posts(){
    return (
        <Fragment>
            <head>
                <title>About Us</title>
            </head>
            <Hero/>
            <EarlyLife/>
            <Goal/>
        </Fragment>
    )
}
