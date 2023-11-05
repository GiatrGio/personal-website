"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {motion} from "framer-motion";
import {useSectionInView} from "@/lib/hooks";

export default function About() {
    const { ref } = useSectionInView("About");

    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>About me</SectionHeading>
            <p className="mb-3">
                Hey there, thanks for being here! My name is Giorgos and I'm a <b>Senior Software Engineer</b> based in NL.
                My expertise lies in the development of <b>web</b> and <b>data processing</b> applications, covering everything from
                front-end interfaces to back-end intricacies. I find great joy in participating
                in the <b>whole development life cycle</b> of a product and I always strive for <b>efficiency </b>
                and <b>quality</b> in my code.
                I consider myself an easy-going person with <b>communication skills</b> and a <b>passion</b> for what I do.
            </p>
        </motion.section>
    );
}