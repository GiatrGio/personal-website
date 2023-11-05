"use client";

import {useSectionInView} from "@/lib/hooks";
import {educationData} from "@/lib/data";
import SectionHeading from "@/components/section-heading";
import Timeline from "@/components/timeline";
import React from "react";

export default function Education() {
    const { ref } = useSectionInView("Education");
    const education = [...educationData];

    return (
        <section id="education" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
            <SectionHeading>Education</SectionHeading>
            <Timeline timelineData={education} />
        </section>
    )
}