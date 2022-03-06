import Head from "next/head";
import {FC, useEffect, useState} from "react";
import {activeTabText, inactiveTabText} from "@/config/static";

const ASSET_VERSION = "1.0"
const THEME_COLOR = "#8066F7";

interface ISEO {
    description?: string;
}

const SEO: FC<ISEO> = ({ description = "Homepage of jpuf.xyz." }) => {
    return (
        <Head>
            {/* Main Meta */}
            <title>Jpuf.xyz</title>
            <meta charSet="UTF-8" />
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <meta name="description" content={description} />
            <meta name="keywords" content="jpuf" />
            <meta name="author" content="jpuf" />
            <meta name="robots" content="index, follow" />
            <link rel="manifest" href={`/manifest.json?v=${ASSET_VERSION}`} />
            <meta name="apple-mobile-web-app-title" content="jpuf" />
            <meta name="application-name" content="jpuf" />
            {/* End Main Meta */}

            {/* Icons */}
            <link rel="apple-touch-icon" sizes="180x180" href={`/apple-touch-icon.png?v=${ASSET_VERSION}`} />
            <link rel="icon" type="image/png" sizes="32x32" href={`/favicon-32x32.png?v=${ASSET_VERSION}`} />
            <link rel="icon" type="image/png" sizes="16x16" href={`/favicon-16x16.png?v=${ASSET_VERSION}`} />
            <link rel="shortcut icon" href={`/favicon.ico?v=${ASSET_VERSION}`} />
            <link rel="mask-icon" href="/safari-pinned-tab.svg?v=1.1" color={THEME_COLOR} />
            {/* End Icons */}

            {/* Colors */}
            <meta name="msapplication-TileColor" content={THEME_COLOR} />
            <meta name="theme-color" content={THEME_COLOR} />
            {/* End Colors */}

            {/* Open Graph */}
            <meta property="og:url" content="https://jpuf.xyz" />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:site_name" content="jpuf.xyz" />
            <meta property="og:title" content="jpuf.xyz" />
            <meta property="og:image" content={`https://jpuf.xyz/android-chrome-512x512.png?v=${ASSET_VERSION}`} />
            {/* End Open Graph */}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@jpuf_" />
            <meta name="twitter:title" content="jpuf.xyz" />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={`https://jpuf.xyz/android-chrome-512x512.png?v=${ASSET_VERSION}`} />
            {/* End Twitter */}

            {/* Misc */}
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="google-site-verification" content="azPHAHBpTuJ-8stcPE_LX6-GNwVGjzp5_V7E3KCcmMk" />
            {/* End Misc */}
        </Head>
    );
};

export default SEO;
