import Projects from "@/components/content/Projects";
import SEO from "@/components/content/SEO";
import Layout from "@/components/layout";
import Twemoji from "@/components/utils/Twemoji";
import { API_ROUTE } from "@/config/globals";
import { Heading } from "@chakra-ui/react";
import { GithubResponse } from "@web";
import { InferGetStaticPropsType } from "next";
import React, { FC } from "react";

export const getStaticProps = async () => {
	const githubDataRes = await fetch(`${API_ROUTE}/v2/github/pinnedRepos`);
	const githubData: GithubResponse = await githubDataRes.json();

	return {
		props: {
			githubData,
		},
		revalidate: 60,
	};
};

const ProjectsPage: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ githubData }) => (
	<Layout display="flex" flexDirection="column" alignItems="center">
		<SEO description="Some of my projects that I work on." />
		<Heading textAlign="center">
			Here are some of my projects <Twemoji emoji="🗒️" />
		</Heading>

		<Projects githubData={githubData} mt={2} />
	</Layout>
);

export default ProjectsPage;
