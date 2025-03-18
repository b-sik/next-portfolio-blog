import ProjectCards from "./components/project-cards";

export default function Home() {
    return (
        <main className="w-full py-8 px-6">
            <section id="projects" className="py-8 mx-auto max-w-3xl">
                <h3>Projects</h3>
                <p>
                    A sample of personal projects. Please see resume for
                    professional experience.
                </p>

                <div className="max-w-3xl mx-auto">
                    <ProjectCards />
                </div>
            </section>
        </main>
    );
}
