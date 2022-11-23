import {Fragment} from "react";
import Hero from "@components/About/Hero";
import EarlyLife from "@components/About/EarlyLife";
import Goal from "@components/About/Goal";
import Head from "next/head";

export default function Posts(){
    return (
        <Fragment>
            <Head>
                <title>About Us</title>
            </Head>
            <Hero/>
            <EarlyLife/>
            <Goal/>
        </Fragment>
    )
}
