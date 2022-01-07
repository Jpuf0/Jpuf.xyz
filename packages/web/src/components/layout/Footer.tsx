import {FC} from "react";
import { Box, BoxProps, Flex } from "@chakra-ui/react";
import Copyright from "./copyright";
import SocialMediaLinks from "./socialMediaLinks";

const Footer: FC<BoxProps> = (props) => (
    <Box
        as="footer"
        role="contentinfo"
        py="4"
        px={{ base: "4", md: "8" }}
        background="gray.900"
        width="100wv"
        {...props}
    >
        <Flex direction={{ base: "column-reverse", md: "row" }} justifyContent="space-between" alignItems="center">
            <Copyright />
            <SocialMediaLinks />
        </Flex>
    </Box>
)

export default Footer;
