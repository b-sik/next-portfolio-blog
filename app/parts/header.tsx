export default function Header() {
    return (
        <header className="min-h-screen h-screen w-full bg-indigo-950 bg-blend-overlay bg-[url(/img/header.jpg)] bg-center">
            <div className="w-full h-full flex flex-col justify-between max-w-6xl mx-auto py-8 sm:py-16 px-6">
                <div className="mx-auto w-full flex justify-between">
                    <div>
                        <h1>Brian Siklinski</h1>
                        <h2>web developer</h2>
                    </div>
                </div>
                <section
                    id="about"
                    className="py-8 ml-auto text-right max-w-2xl"
                >
                    <nav className="mb-4">
                        <a href="#projects" className="mr-4">
                            Projects
                        </a>
                        <a href="#contact">Contact</a>
                    </nav>
                    <p className="text-sm sm:text-base">
                        Results-driven Frontend Developer with 4+ years of
                        experience in building responsive, high-performance
                        websites and applications. Proficient in React,
                        WordPress, JavaScript, PHP, CSS, and modern frontend
                        frameworks, with a strong understanding of REST APIs,
                        GraphQL, and full-stack development.
                    </p>
                </section>
            </div>
        </header>
    );
}
