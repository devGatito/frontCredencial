import { graphql, useStaticQuery } from "gatsby";

const defaultJsonld = {
	"@context": "https://schema.org",
	"@type": ["Corporation", "landingPage"],
	name: "",
	alternateName: "",
	url: "",
	logo: "",
	sameAs: [
		"",
		"",
	],
	potentialAction: {
		"@type": "SearchAction",
		target: "https://www.credencial.com.mx/search?q={search_term_string}",
		"query-input": "required name=search_term_string",
	},
};

const useSiteMetadata = () => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					author
					description
					image
					keywords
					agencyName
					siteUrl
					title
					typeContent
				}
			}
		}
	`);

	data.site.siteMetadata.jsonld = defaultJsonld;
	return data.site.siteMetadata;
};

export default useSiteMetadata;
