import React from "react";
import { motion } from "framer-motion";

const fadeInAnimationVariants: {
    initial: {
        opacity: number;
        y: number;
    };
    animate: (index: number) => {
        opacity: number;
        y: number;
        transition: {
            delay: number;
        };
    };
} = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};

interface SkillsListProps {
    skillsData: string[]; // Assuming skillsData is an array of strings
}

function SkillsList({ skillsData }: SkillsListProps) {
    return (
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
            {skillsData.map((skill, index) => (
                <motion.li
                    className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
                    key={index}
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                        once: true,
                    }}
                    custom={index}
                >
                    {skill}
                </motion.li>
            ))}
        </ul>
    );
};

export default SkillsList;
