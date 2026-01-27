import type {NextConfig} from "next";
import nextMDX from "@next/mdx";

const withMDX = nextMDX();

const nextConfig: NextConfig = {
	/* config options here */
	pageExtensions: ["ts", "tsx", "md", "mdx"],
};

export default withMDX(nextConfig);
