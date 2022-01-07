import { blurImage } from "@/config/static";
import { Flex, FlexProps } from "@chakra-ui/react";
import { TopSongs } from "@web";
import Image from "next/image";
import React, { FC } from "react";
import Linkify from "../utils/Linkify";
import SongCard from "../utils/SongCard";

const THUMB_HEIGHT = 100;

interface IFavouriteAnime extends FlexProps {
	songs: TopSongs;
}

const FavouriteSongs: FC<IFavouriteAnime> = ({ songs, ...props }) => (
	<Flex
		justifyContent="center"
		flexDirection={["column", "row"]}
		alignItems="center"
		flexWrap="wrap"
		width="100%"
		{...props}
	>
		{songs.tracks.map((data) => (
			<SongCard
				imageTooltip={data.song.name}
				image={
					<Image
						placeholder="blur"
						blurDataURL={blurImage}
						alt={`${data.song.name} album cover`}
						src={data.album.image}
						height={THUMB_HEIGHT}
						width={THUMB_HEIGHT}
					/>
				}
				title={
					<Linkify link={data.song.url}>
						<b title={data.song.name}>{data.song.name}</b>
					</Linkify>
				}
				artists={
					data.song.artists && (
						<>
							by <b title={data.song.artists}>{data.song.artists}</b>
						</>
					)
				}
				album={
					data.album.name && (
						<>
							on{" "}
							<Linkify link={data.album.url}>
								<b title={data.album.name}>{data.album.name}</b>
							</Linkify>
						</>
					)
				}
				flexProps={{
					minWidth: ["200px", "300px"],
					flex: "2",
					margin: "2",
					transition: "box-shadow, transform ease-in-out 100ms",
					cursor: "pointer",
					_hover: {
						boxShadow: "md",
						transform: "scale(1.02, 1.02)",
					},
					...props,
				}}
				color={data.album.color}
				key={data.song.name}
			/>
		))}
	</Flex>
);

export default FavouriteSongs;
