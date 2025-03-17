import ProjectCards from "./components/project-cards";

export default function Home() {
    return (
        <main className="w-full py-8 px-6">
            <section id="about" className="py-8 mx-auto max-w-4xl ">
                <h3>About</h3>
                <p>
                    Results-driven Frontend Developer with 4+ years of
                    experience in building responsive, high-performance websites
                    and applications. Proficient in React, WordPress,
                    JavaScript, PHP, CSS, and modern frontend frameworks, with a
                    strong understanding of REST APIs, GraphQL, and full-stack
                    development.
                </p>
            </section>
            <section id="projects" className="my-8 mx-auto max-w-4xl">
                <h3>Projects</h3>
                <p>
                    A sample of personal projects. Please see resume for
                    professional experience.
                </p>

                <ProjectCards />
            </section>
        </main>
    );
}
