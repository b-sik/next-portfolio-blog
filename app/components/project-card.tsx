export default function ProjectCard({
    title,
    subtitle,
    year,
    description,
    buttons,
}: Readonly<{
    title: string;
    subtitle: string;
    year: string | number;
    description: string | React.ReactNode;
    buttons: {
        label: string;
        url: string;
    }[];
}>) {
    return (
        <div className="flex align-stretch flex-col relative overflow-hidden my-6">
            <div
                className="text-black py-6 px-9 flex flex-col min-h-[300px] md:max-h-[350px] bg-[url(/noise.svg)]"
                style={{
                    zIndex: "-1",
                    backgroundColor: "rgb(220, 244, 163)",
                }}
            >
                <div className="green-blur" />
                <h4 className="font-b612mono text-4xl font-bold mt-6 ml-6">
                    {title}
                </h4>
                <div className="flex items-center my-2.5">
                    <span className="absolute -mt-1">►</span>
                    <hr className="flex-grow border-0 border-t-2 border-t-black" />
                </div>
                <p className="uppercase ml-6 text-xl mb-4 md:mb-0">
                    {subtitle}
                </p>
                <p className="mt-4 sm:mt-auto mb-2 font-b612mono text-2xl sm:text-4xl ml-6">
                    {year}
                </p>
            </div>

            <div
                className="py-6 px-9 flex flex-col justify-around lg:opacity-0 lg:hover:opacity-100 lg:absolute w-full min-h-[300px] lg:max-h-[350px]"
                style={{
                    backgroundColor: "rgb(49, 54, 37)",
                }}
            >
                <h4 className="text-2xl font-bold hidden lg:block">{title}</h4>
                <p className="text-base">{description}</p>
                <div className="flex flex-wrap mt-4 md:mt-0">
                    {buttons.map(({ label, url }) => (
                        <a
                            className="project-card-btn my-2 md:my-0 mr-6 rounded-2xl font-b612mono font-bold px-6 py-3 text-black hover:text-white text-nowrap"
                            key={url}
                            href={url}
                            target="_blank"
                            role="button"
                        >
                            {label}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
