"use client";

import {useState} from "react";

type AboutProps = {
    title: string;
    paragraphs: string[];
};

export default function About({title, paragraphs}: AboutProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className="border-t border-slate-200 py-20">
            <h2 className="text-2xl font-semibold">
                {title}
            </h2>

            {paragraphs.map((text: string, index: number) => {
                if (!isExpanded && index > 0) return null;

                return (
                    <p
                        key={index}
                        className="mt-4 max-3xl text-slate-600"
                    >
                        {text}
                    </p>
                )
            })}

            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-4 text-sm font-medium text-slate-900 underline"
            >
                {isExpanded ? "Show less" : "Read more"}
            </button>

        </section>
    );
}
