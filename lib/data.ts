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
                "including THE, QS, and HCCR rankings, serving over 200K unique visitors and increasing customer acquisition.",
                "Maintained and enhanced existing components of the SciVal API and frontend applications, leading to " +
                "increased user traffic and improved security.",
                "Migrated data process pipelines into modern technologies, including Spark, Neo4j and Elasticsearch, " +
                "improving their efficiency and cost-savings by more than 10X.",
                "Enacted the role of Scrum Master, fostering agile methodologies to streamline collaboration and " +
                "ensure successful project delivery.",
                "Mentorship of fellow engineers towards best practices and code quality."
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
                "Built new and maintained existing features in CROPaware a web-based tool that is widely used by 5 " +
                "world leading companies in the plant biotech field.",
                "Evaluated the technologies, created the POC and worked on the implementation of Leafy a Graph based " +
                "genomic analysis platform that allows researchers to find interconnected data faster.",
                "Advocating and standardizing best practices and proper testing of the applications, improving data " +
                "integrity and customer trust in the product."
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
                "Developed the latest iteration of FarmSim a desktop application used by external organizations, " +
                "researchers, and over 200 master students each semester to visualize and predict crop-livestock " +
                "production in farms.",
                "Created WUR-LICT, an Electron/React application that enables re- searchers to benchmark the living " +
                "income of rural households in Africa.",
                "Designed the Nutrient Database Portal, an internal React-based web application that integrated over " +
                "10 different data sources of the research group into a single, user-friendly web portal."
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
                "Built 3 Java back-end POC applications for streamlined marker position translation between " +
                "reference genomes."
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

