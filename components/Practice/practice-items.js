import React, {Fragment} from "react";
import {practiceData} from "@components/Practice/practice-data";
import {useRouter} from "next/router";
import {practiceDataEs} from "@components/Practice/practice-data-es";

function PracticeItems() {

    const router = useRouter();
    const {locale} = router;
    const t = locale === 'en' ? practiceData : practiceDataEs

    return (
        <Fragment>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 text-left gap-5 pt-[50px] px-6">

                {t.map((item,index) => {
                    return(
                        <div className="rounded-xl text-center text-neutral-200 bg-slate-800 p-12 ">
                            <i className="material-symbols-outlined">{item.cName}</i>
                            <div className="text-[32px] ">{item.title}</div>
                            <p className="text-[14px] pt-[50px]">
                                {item.paragraph}
                            </p>
                        </div>
                    )
                })}

            </div>
        </Fragment>
    )
}

export default PracticeItems
