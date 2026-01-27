import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Projects from "@/sections/Projects";

export default function Home() {
    const aboutParagraphs = [
        "How about we give this a try",
        "I am a full stack software engineer with experience building and maintaining large-scale ecommerce platforms. My work focuses on clean architecture, performance optimization, and delivering features that align with real business goals.",
        "I have worked extensively with Magento (Adobe Commerce), custom integrations, and modern JavaScript frameworks. I enjoy solving complex problems and improving systems that support long-term growth."
    ];

    return (
        <section className="max-w-5xl mx-auto space-y-16">
            <Hero/>
            <About
                title="About Me"
                paragraphs={aboutParagraphs}
            />
        </section>
    );
}
