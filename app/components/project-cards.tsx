import ProjectCard from "./project-card";

type Project = {
    title: string;
    subtitle: string;
    year: string | number;
    description: string | React.ReactNode;
    buttons: {
        label: string;
        url: string;
    }[];
};

type Projects = Project[];

export default function ProjectCards() {
    const projects: Projects = [
        {
            title: "Web Tools and Utilities",
            subtitle: "Python, FastAPI, JavaScript, Cursor",
            year: "2025",
            description:
                "This project is to familiarize myself with the capabilities and pitfalls of using AI to code with Cursor IDE. This on-going collection of useful server-side tools has been built primarily by prompting Cursor, ensuring careful oversight of code, and manually optimizing and updating features along the way.",
            buttons: [
                {
                    label: "View Project",
                    url: "https://web-tools-and-utilities.com",
                },
                {
                    label: "GitHub",
                    url: "https://github.com/b-sik/web-tools-and-utilities",
                },
            ],
        },
        {
            title: "Recipe and Events Blog",
            subtitle: "WordPress, JavaScript, CSS",
            year: "2025",
            description:
                "Designed by Lubna Sarigat, this was my first go at fully learning and embracing the WordPress Full Site Editor. Using the Create Block Theme plugin alongside Git versioning, this work-in-progress has a landing page rich with responsive CSS design.",
            buttons: [
                {
                    label: "View Project",
                    url: "https://goodfoodloob.com",
                },
                {
                    label: "GitHub",
                    url: "https://github.com/b-sik/goodfoodloob",
                },
            ],
        },
        {
            title: "Bike Trip Blog",
            subtitle: "TypeScript, Leaflet, Flask",
            year: "2024",
            description: (
                <>
                    In 2022 my friends crossed the US on bicycles. I created a
                    WordPress blog for them to track their adventure, complete
                    with a map and daily stats. Later, I exported the data to
                    create this TypeScript-based app with a Leaflet map, Flask
                    backend, and{" "}
                    <a
                        href="https://github.com/b-sik/create-gpx-files"
                        target="_blank"
                    >
                        Python script
                    </a>{" "}
                    for bulk creation of GPX files from Google Maps URLs.
                </>
            ),
            buttons: [
                {
                    label: "View Project",
                    url: "https://wheelie-babes.bsik.net",
                },
                {
                    label: "GitHub",
                    url: "https://github.com/b-sik/wheelie-babes-remix",
                },
            ],
        },
        {
            title: "Indie Rock Band Theme",
            subtitle: "WordPress, PHP, Bootstrap, ACF",
            year: "2023",
            description:
                "Custom WordPress theme for a local indie/rock band. Utilizes custom post types and Advanced Custom Fields to track and display albums, concerts, and a blog.",
            buttons: [
                {
                    label: "View Project",
                    url: "https://westferry.bsik.net",
                },
                {
                    label: "GitHub",
                    url: "https://github.com/b-sik/band-theme-wp",
                },
            ],
        },
        {
            title: "Dynamic Block Content",
            subtitle: "React, PHP, WordPress",
            year: "2022",
            description:
                "Custom WordPress plugin which adds functionality to allow certain blocks in the Gutenberg editor (paragraph, header, etc.) to display dynamic data on the frontend.",
            buttons: [
                {
                    label: "GitHub",
                    url: "https://github.com/b-sik/dynamic-block-content",
                },
            ],
        },
    ];

    return (
        <>
            {projects.map(
                ({ title, subtitle, year, description, buttons }: Project) => (
                    <ProjectCard
                        key={title}
                        title={title}
                        subtitle={subtitle}
                        year={year}
                        description={description}
                        buttons={buttons}
                    />
                )
            )}
        </>
    );
}
