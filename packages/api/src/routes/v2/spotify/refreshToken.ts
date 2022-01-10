import fetch from "node-fetch";
import { URLSearchParams } from "url"

export const getAccessToken = async (): Promise<string> => {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
			refresh_token: process.env.SPOTIFY_REFRESH_TOKEN ? process.env.SPOTIFY_REFRESH_TOKEN : '',
			client_id: process.env.SPOTIFY_CLIENT_ID ? process.env.SPOTIFY_CLIENT_ID : '',
			client_secret: process.env.SPOTIFY_CLIENT_SECRET ? process.env.SPOTIFY_CLIENT_SECRET : '',
    }).toString()
  });

  const data = await response.json();
  console.log(data)
  return data.access_token;
}