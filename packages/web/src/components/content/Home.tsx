import {FC} from "react";
import {Flex, FlexProps, Heading} from "@chakra-ui/react";
import ShortSummary from "@/components/content/ShortSummary";
import Twemoji from "@/components/utils/Twemoji";

const HomeComponent: FC = (props: FlexProps) => (
    <Flex flexDirection="column" alignItems="center" textAlign="center" {...props}>
        <Heading>
            Hello <Twemoji emoji="👋" />
        </Heading>

        <ShortSummary />
    </Flex>
)

export default HomeComponent;
