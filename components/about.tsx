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
                Hey there, I'm Giorgos, your friendly neighborhood code wrangler!
                I've got a knack for cooking up web and data-processing applications
                from scratch – from the pretty Front End to the brainy Back End, and
                all the secret sauce in between. I take my coding seriously, but
                I don't take myself too seriously. I'm all about efficiency and
                quality in my code, but I promise not to bore you with tech jargon.
                I'm an easy-going, coffee-loving developer with a side of excellent
                communication skills, and a passionate flair for what I do.
            </p>
            <p>Let's chat code,
                collaborate on projects, and have a good time doing it!
            </p>
        </motion.section>
    );
}