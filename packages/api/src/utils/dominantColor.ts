import sharp from "sharp";
import { rgbToHex } from "./rgbToHex";
import fetch from "node-fetch";

export const dominantColor = async (imageUrl: string): Promise<string | undefined> => {
	if (!imageUrl) return;

	// fetch the image
	const response = await fetch(imageUrl);
	const buffer = await response.buffer()

	// get the dominant color
	const { dominant } = await sharp(buffer).resize({ position: sharp.strategy.attention }).stats();

	return rgbToHex(dominant);
};
