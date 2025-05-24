import React from "react";
import { useMetaData } from "@hooks";
import icon from "@assets/icon.png";
import defaultImage from "@assets/cover.jpg";

const Seo = ({
	title,
	description,
	pathname,
	keywords,
	siteUrl,
	typeContent,
	image,
	jsonld,
	children,
}) => {
	const {
		author,
		agencyName,
		title: defaultTitle,
		description: defaultDescription,
		siteUrl: defaultSiteUrl,
		keywords: defaultKeywords,
		typeContent: defaultTypeContent,
		jsonld: defaultJsonld,
	} = useMetaData();

	const seo = {
		author,
		agencyName,
		image: image || defaultImage,
		title: title || defaultTitle,
		url: `${siteUrl || defaultSiteUrl}${pathname || ``}`,
		canonicalUrl: `${siteUrl || defaultSiteUrl}${pathname || ``}`,
		description: description || defaultDescription,
		keywords: Array.isArray(keywords)
			? keywords
			: [keywords] || defaultKeywords,
		typeContent: typeContent || defaultTypeContent,
		jsonld: jsonld || defaultJsonld,
	};

	return (
		<>
			<title>{seo.title}</title>
			<meta name="description" content={seo.description} />
			<meta
				name="keywords"
				content={seo.keywords ? seo.keywords.join(", ") : ""}
			/>
			<meta name="image" content={seo.image} />
			{/* Facebook meta tags */}
			<meta property="og:title" content={seo.title} />
			<meta property="og:url" content={seo.canonicalUrl} />
			<meta property="og:image" content={seo.image} />
			<meta property="og:type" content={seo.typeContent} />
			<meta property="og:description" content={seo.description} />
			{/* Twitter meta tags */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={seo.title} />
			<meta name="twitter:url" content={seo.url} />
			<meta name="twitter:description" content={seo.description} />
			<meta name="twitter:image" content={seo.image} />
			<meta name="twitter:creator" content={seo.twitterUsername} />
			<link rel="canonical" href={seo.canonicalUrl} />
			<link rel="icon" href={icon} />

			<script type="application/ld+json">
				{JSON.stringify(seo.jsonld)}
			</script>
			{children}
		</>
	);
};

export default Seo;
