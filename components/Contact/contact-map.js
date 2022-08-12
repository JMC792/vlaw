import React, {Fragment} from "react";

function ContactMap() {

    return (
        <Fragment>
            <div className="bg-neutral-800">
                <iframe
                    className="w-full h-[500px] md:h-full"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.9759958007053!2d-84.38945188448464!3d33.7871180391018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5045b68f00001%3A0x2d61f5aaa5b38f55!2s1201%20W%20Peachtree%20St%20NW%20Suite%3A%202300%2C%20Atlanta%2C%20GA%2030309!5e0!3m2!1sen!2sus!4v1656719326720!5m2!1sen!2sus"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </Fragment>
    )
}

export default ContactMap
