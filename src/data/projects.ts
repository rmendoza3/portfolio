export type Project = {
    slug: string;
    title: string;
    description: string;
    tech: string[];
    link?: string;
    seoDescription?: string;
    image: string;
};

export const projects: Project[] = [
    {
        slug: "ecommerce-platform-migration",
        title: "Ecommerce Platform Migration",
        description:
            "Led the migration of an acquired ecommerce site to Magento, including custom modules and performance optimization.",
        tech: ["Magento", "PHP", "MySQL", "Docker"],
        link: "#",
        seoDescription:
            "Magento ecommerce migration project focused on performance, scalability, and custom module development.",
        image: "/projects/ecommerce-platform-migration.png",
    },
    {
        slug: "product-data-enrichment-bot",
        title: "Product Data Enrichment Bot",
        description:
            "Built an LLM-powered pipeline to extract and enrich ecommerce product data using Scrapy and Pydantic.",
        tech: ["Python", "Scrapy", "Pydantic", "LLMs"],
        link: "#",
        seoDescription:
            "Magento ecommerce migration project focused on performance, scalability, and custom module development.",
        image: "/projects/product-data-enrichment-bot.png",
    },
];