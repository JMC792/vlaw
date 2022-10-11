import React, {Fragment} from "react";
import { testimonialData } from './testimonial-data'

function TestimonialItems() {



    return (
        <Fragment>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-12 text-neutral-800 ">

                {/*============= Testimonial-Cards ============= */}
                {testimonialData.map((item,index) => {
                    return (
                        <div key={index} className="rounded-xl bg-neutral-200 m-4">
                            <div className="p-12 rounded-xl">
                                <h3 className="text-xl font-bold py-2 uppercase">
                                    {item.title}
                                </h3>
                                <p className="py-2">
                                    “{item.paragraph}”
                                </p>
                                <div className="text-amber-700 py-2">
                                    <div>Posted by {item.name} (Avvo)</div>
                                    <div>{item.date}</div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </Fragment>
    )
}

export default TestimonialItems
