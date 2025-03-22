import type { Metadata } from "next";
import Script from "next/script";
import Header from "./parts/header";
import Footer from "./parts/footer";
import "./globals.css";

export const metadata: Metadata = {
    title: "Brian Siklinski - Front End Developer",
    description:
        "Proficient in React, WordPress, JavaScript, PHP, CSS, and modern frontend frameworks.",
    referrer: "origin-when-cross-origin",
    keywords: ["React", "JavaScript", "WordPress", "PHP", "CSS", "Front End"],
    authors: [{ name: "Brian Siklinski" }],
    icons: {
        icon: "/favicon.png",
    },
    openGraph: {
        title: "Brian Siklinski - Front End Developer",
        description:
            "Proficient in React, WordPress, JavaScript, PHP, CSS, and modern frontend frameworks.",
        url: "https://bsik.net",
        siteName: "Brian Siklinski - Front End Developer",
        images: [
            {
                url: "https://bsik.net/og.png",
                width: 1200,
                height: 630,
            },
        ],
        locale: "en_CA",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
        },
    },
    twitter: {
        card: "summary_large_image",
        title: "Brian Siklinski - Front End Developer",
        description:
            "Proficient in React, WordPress, JavaScript, PHP, CSS, and modern frontend frameworks.",
        images: ["https://bsik.net/og.png"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className="font-robotomono antialiased">
                <Header />
                {children}
                <Footer />
                <Script
                    defer
                    src="https://cloud.umami.is/script.js"
                    data-website-id="3c19734e-b2cc-44b4-ab94-88b7421322f5"
                />
            </body>
        </html>
    );
}
