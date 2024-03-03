import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import elsevierIcon from 'lib/images/elsevier.png';
import genetwisterIcon from 'lib/images/genetwister.png'
import tucIcon from 'lib/images/tuc.png'
import wurIcon from 'lib/images/wur.png'
import edxIcon from 'lib/images/edx.png'
import {StaticImageData} from "next/image";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    // {
    //     name: "Projects",
    //     hash: "#projects",
    // },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Education",
        hash: "#education",
    },
    // {
    //     name: "Contact",
    //     hash: "#contact",
    // },
] as const;

interface TimelineDataItem {
    title: string;
    location: string;
    description: readonly string[];
    icon: StaticImageData;
    company: string;
    date: string;
}

export interface TimelineDataProps {
    timelineData: TimelineDataItem[];
}

export const experiencesData: readonly TimelineDataItem[] = [
    {
        title: "Senior Software Engineer",
        location: "Amsterdam, NL",
        description:
            [
                "Led the architectural design and implementation of university ranking integration on the platform, " +
                "including THE, QS, and HCCR rankings, resulting in elevated traffic and enhanced customer acquisition " +
                "for SciVal. ",
                "Maintained and enhanced existing components of the SciVal API and frontend applications, written in " +
                "Java and JavaScript.",
                "Mentorship of fellow engineers towards best practices and code quality.",
                "Enacted the role of Scrum Master, fostering agile methodologies to streamline collaboration and " +
                "ensure successful project delivery.",
                "Worked on Big Data migration tasks to transition data process pipelines into modern technologies, " +
                "including Spark, Neo4j, and Elasticsearch."
            ],
        icon: elsevierIcon,
        company: "Elsevier",
        date: "Dec 2021 - Present",
    },
    {
        title: "Software Engineer",
        location: "Wageningen, NL",
        description:
            [
                "Built and maintained existing and new features for CROPaware a web-based tool that integrates " +
                "different types of data formats and sources used by breeders to support their decisions in the " +
                "new development of crop varieties.",
                "Advocating and standardizing best practices and proper testing of the applications, improving " +
                "data integrity and customer trust in the product."
            ],
        icon: genetwisterIcon,
        company: "Genetwister Technologies",
        date: "Jan 2021 - Dec 2021",
    },
    {
        title: "Software Engineer",
        location: "Wageningen, NL",
        description:
            [
                "Developed the latest iteration of FARMSIM, a desktop application created using Python. " +
                "The tool is used by external organizations, researchers, and master students to enhance " +
                "crop-livestock production in farms.",
                "Created WUR-LICT, an Electron/React application that enables re- searchers to benchmark the living " +
                "income of rural households in Africa.",
                "Designed the Nutrient Database Portal, a React-based web application that integrates various data " +
                "sources of the group into a single, user-friendly web portal."
            ],
        icon: wurIcon,
        company: "Plant Production Systems Group, WUR",
        date: "Oct 2019 - Dec 2020",
    },
    {
        title: "Software Engineer Intern",
        location: "Wageningen, NL",
        description:
            [
                "Built three Java-based backend applications for streamlined marker position translation between " +
                "reference genomes.",
                "Conducted a comparative analysis of Apache Cassandra and Neo4j databases with regard to speed and " +
                "size of marker position translation."
            ],
        icon: genetwisterIcon,
        company: "Genetwister Technologies",
        date: "Apr 2019 - Oct 2019",
    },
    {
        title: "Course Moderator, Online Education",
        location: "Remote, NL",
        description:
            [
                "Moderated several online courses from various disciplines offered by WageningenX.",
                "Answered students’ questions, graded students’ assignments, and assisted in the creation of the " +
                "course material.",
                "Developed into a role model for newer moderators."
            ],
        icon: edxIcon,
        company: "edX",
        date: "Oct 2017 - Sep 2019",
    },
] as const;

export const educationData = [
    {
        title: "MSc Bioinformatics",
        location: "Wageningen, NL",
        description: [],
        icon: wurIcon,
        company: "Wageningen University & Research, WUR",
        date: "Sep 2017 - Sep 2019",
    },
    {
        title: "Diploma in Engineering (Integrated Master of Engineering), Environmental Engineering",
        location: "Crete, GR",
        description: [],
        icon: tucIcon,
        company: "Technical University of Crete",
        date: "Sep 2010 - Sep 2015",
    },
] as const;

export const projectsData = [
    {
        title: "CorpComment",
        description:
            "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
        tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
        imageUrl: corpcommentImg,
    },
    {
        title: "rmtDev",
        description:
            "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
        tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
        imageUrl: rmtdevImg,
    },
    {
        title: "Word Analytics",
        description:
            "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
        tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
        imageUrl: wordanalyticsImg,
    },
] as const;

export const languagesAndFrameworks = [
    "Java",
    "JavaScript",
    "Typescript",
    "Python",
    "Bash",
    "Spring",
    "JSP",
    "React",
] as const;

export const databases = [
    "MySQL",
    "Neo4j",
    "Elasticsearch",
    "Apache Cassandra",
] as const;

export const otherTechnologies = [
    "Git",
    "Docker",
    "AWS",
    "Spark",
    "Electron",
] as const;

