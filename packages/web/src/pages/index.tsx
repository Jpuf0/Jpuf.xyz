import {FC} from "react";
import Layout from "@/components/layout";
import HomeComponent from "@/components/content/Home";
import SEO from "@/components/content/SEO";
import { Flex } from "@chakra-ui/react";
import NowPlaying from "@/components/api/NowPlaying";

const Home: FC = () => (
    <Layout display="flex" flexDirection="column" alignItems="center" justifyContent="center">
        <SEO />
        <HomeComponent />

        <Flex justifyContent={["center"]} alignItems="center" flexWrap="wrap" maxWidth="100%">
			<NowPlaying mt="4" />
		</Flex>
    </Layout>

);

export default Home;
