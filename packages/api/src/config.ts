export const HOSTNAME = process.env.HOSTNAME ?? "no_docker_hostname";
export const API_HOSTNAME = process.env.API_HOSTNAME?.toLowerCase() ?? "api.jpuf.xyz";
export const DEV = process.env.NODE_ENV !== "production";
export const PORT = parseInt(process.env.PORT ?? "80", 10);
export const ANILIST_ENDPOINT = "https://graphql.anilist.co";
export const GITHUB_ENDPOINT = "https://api.github.com/graphql";
export const ANILIST_ID = parseInt(process.env.ANILIST_ID ?? "0", 10);
export const REDIS_PORT = parseInt(process.env.REDIS_PORT ?? "6379", 10);
export const REDIS_HOST = process.env.REDIS_HOST ?? "127.0.0.1";
export const REDIS_PASS = process.env.REDIS_PASS ?? "password";
export const ALLOW_SEND_MESSAGE: boolean = JSON.parse(process.env.ALLOW_SEND_MESSAGE ?? "false");
export const WEBHOOK_MESSAGE_ID = process.env.WEBHOOK_MESSAGE_ID ?? "";
export const WEBHOOK_MESSAGE_TOKEN = process.env.WEBHOOK_MESSAGE_TOKEN ?? "";
export const WEBHOOK_AVATAR = process.env.WEBHOOK_AVATAR ?? "";
export const GITHUB_AUTHORIZATION = `bearer ${process.env.GITHUB_AUTHORIZATION ?? ""}`;
