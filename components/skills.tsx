"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { languagesAndFrameworks } from "@/lib/data";
import { databases } from "@/lib/data";
import { otherTechnologies } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import SkillsList from "@/components/skills-list";

export default function Skills() {
    const { ref } = useSectionInView("Skills");
    const languagesAndFrameworksData = [...languagesAndFrameworks];
    const databasesData = [...databases];
    const otherTechnologiesData = [...otherTechnologies];

    return (
        <section
            id="skills"
            ref={ref}
            className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
        >
            <SectionHeading>My skills</SectionHeading>

            <h4 className="p-4">Languages & Frameworks</h4>
            <SkillsList skillsData={languagesAndFrameworksData}/>
            <h4 className="p-4">Databases</h4>
            <SkillsList skillsData={databasesData}/>
            <h4 className="p-4">Other Technologies</h4>
            <SkillsList skillsData={otherTechnologiesData}/>
        </section>
    );
}