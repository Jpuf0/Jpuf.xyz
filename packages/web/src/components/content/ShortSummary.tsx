import {FC} from "react";
import { chakra, Flex, FlexProps, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import {useTimePassed} from "@/hooks/useTimePassed";
import {BDAY_TIMESTAMP, CODING_START} from "@/config/globals";
import TimeTooltip from "../utils/TimeTooltip";

const ShortSummary: FC = (props: FlexProps) => {
    const age = useTimePassed(BDAY_TIMESTAMP)
    const codingFor = useTimePassed(CODING_START)

    return (
        <Flex flexDirection="column" justifyContent="center" textAlign="center" {...props}>
            <Text fontSize="xl">
                On the Internet, people call me{" "}
                <chakra.span bgGradient="linear(to-r, brand.100, brand.900)" backgroundClip="text">
                    <b>Jpuf</b>
                </chakra.span>
                .
            </Text>

            <Text fontSize="xl">
                I&apos;m a software/web developer from the UK who&lsquo;s{" "}
                <TimeTooltip time={age} timeText="years old" whiteSpace="nowrap" /> and has been coding for over{" "}
                <TimeTooltip time={codingFor} timeText="years" whiteSpace="nowrap" />.
            </Text>

            <Text fontSize="xl">
                You can find more info in{" "}
                <NextLink href="/about" passHref>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <Link
                        variant="link"
                        transitionProperty="text-decoration-color"
                        transitionDuration="400ms"
                        textDecoration="underline"
                        textDecorationColor="brand.100"
                        textDecorationThickness="2px"
                        _hover={{
                            textDecorationColor: "brand.900",
                        }}
                    >
                        /about
                    </Link>
                </NextLink>
                .
            </Text>
        </Flex>
    );
}

export default ShortSummary;
