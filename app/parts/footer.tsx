import ContactIcons from "../components/contact-icons";

export default function Footer() {
    return (
        <footer className="border py-8 px-6 min-h-screen flex flex-col justify-evenly">
            <section
                id="contact"
                className="mx-auto max-w-2xl w-full grow flex flex-col justify-center"
            >
                <h3 className="text-center">Contact</h3>
                <p className="font-glasstty text-center text-3xl sm:text-4xl mt-4 mb-6">
                    b.siklinski@gmail.com
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 bg-violet-600 mx-8 py-8">
                    <ContactIcons />
                </div>
            </section>
            <div className="font-glasstty mx-auto max-w-4xl text-center pt-8">
                <p className="mb-2">Created with Next.js and TailwindCSS</p>
                <p>
                    © 2025 bsik.net | All Rights Reserved | Designed by Lubna
                    Sarigat
                </p>
            </div>
        </footer>
    );
}
