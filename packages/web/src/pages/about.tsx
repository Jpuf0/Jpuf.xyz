import AboutMe from "@/components/content/AboutMe";
import FavouriteAnimeComponent from "@/components/content/FavouriteAnime";
import FavouriteSongs from "@/components/content/FavouriteSongs";
import SEO from "@/components/content/SEO";
import Layout from "@/components/layout";
import Twemoji from "@/components/utils/Twemoji";
import { API_ROUTE } from "@/config/globals";
import { Heading, Text } from "@chakra-ui/react";
import { FavouriteAnime, TopSongs } from "@web";
import { InferGetStaticPropsType } from "next";
import React, { FC } from "react";

export const getStaticProps = async () => {
	const [topSongsRes, topAnimeRes] = await Promise.all([
		fetch(`${API_ROUTE}/v2/spotify/topSongs`),
		fetch(`${API_ROUTE}/v2/anilist/favourites`),
	]);

	const [topSongs, favouriteAnime] = (await Promise.all([topSongsRes, topAnimeRes]).then((resArr) =>
		Promise.all(resArr.map((res) => res.json())),
	)) as [TopSongs, FavouriteAnime];

	return {
		props: {
			topSongs,
			favouriteAnime,
		},
		revalidate: 60,
	};
};

const About: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ favouriteAnime, topSongs }) => (
	<Layout display="flex" flexDirection="column" alignItems="center">
		<SEO description="Curious about me? Read some stuff here!" />
		<Heading>
			About me <Twemoji emoji="📝" />
		</Heading>

		<AboutMe maxWidth="880px" mt={3} />

		<Text pt={4} fontSize="xl" textAlign="center">
			Here are some of my favourite songs:
		</Text>

		<FavouriteSongs maxWidth="1000px" pt={2} songs={topSongs} />

		<Text pt={4} fontSize="xl" textAlign="center">
			Here are some of my favourite anime:
		</Text>

		<FavouriteAnimeComponent maxWidth="1200px" pt={2} anime={favouriteAnime} />
	</Layout>
);

export default About;
