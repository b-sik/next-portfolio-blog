import ProjectCards from "./components/project-cards";

export default function Home() {
    return (
        <main className="w-full py-8 px-6">
            <section id="projects" className="py-8 mx-auto max-w-4xl">
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
