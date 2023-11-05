"use client";

import React from "react";
import "./experience.css"
import SectionHeading from "./section-heading";
import "react-vertical-timeline-component/style.min.css";
import {experiencesData} from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import Timeline from "@/components/timeline";


export default function Experience() {
    const { ref } = useSectionInView("Experience");
    const experiences = [...experiencesData];

    return (
        <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
            <SectionHeading>My experience</SectionHeading>
            <Timeline timelineData={experiences} />
        </section>
    );
}