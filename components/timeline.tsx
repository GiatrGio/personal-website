import {experiencesData, TimelineDataProps} from "@/lib/data";
import React from "react";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import Image from "next/image";
import {useTheme} from "@/context/theme-context";


export default function Timeline({ timelineData }: TimelineDataProps) {
    const { theme } = useTheme();

    return (
        <VerticalTimeline lineColor="">
            {timelineData.map((item, index) => <React.Fragment key={index}>
                <VerticalTimelineElement
                    contentStyle={{
                        background:
                            theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                        boxShadow: "none",
                        border: "1px solid rgba(0, 0, 0, 0.05)",
                        textAlign: "left",
                        padding: "1.3rem 2rem",
                    }}
                    contentArrowStyle={{
                        borderRight:
                            theme === "light"
                                ? "0.4rem solid #9ca3af"
                                : "0.4rem solid rgba(255, 255, 255, 0.5)",
                    }}
                    date={item.date}
                    icon={<Image src={item.icon} alt="myLogo" className="w-full h-full object-cover rounded-full"/>}
                >
                    <h3 className="title">{item.title + ", " + item.company}</h3>
                    <p className="font-normal !mt-0">{item.location}</p>
                    <div className="!mt-1 !font-normal text-sm text-gray-700 dark:text-white/75">
                        <ul style={{ listStyleType: 'disc' }}>
                            {typeof item.description === 'string' ?
                                <li>{item.description}</li> :
                                item.description.map((d, index) => (
                                    <li key={index}>{d}</li>
                                ))}
                        </ul>
                    </div>
                </VerticalTimelineElement>
            </React.Fragment>)}
        </VerticalTimeline>
    )
}