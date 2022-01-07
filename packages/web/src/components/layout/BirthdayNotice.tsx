import {FC} from "react";
import {Flex, Link, Text, keyframes, usePrefersReducedMotion} from "@chakra-ui/react";
import {transparentize} from "@chakra-ui/theme-tools";
import NextLink from "next/link"
import theme from "../../config/theme";

const movingGradient = keyframes`
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
}`;

const BirthdayNotice: FC = () => {
    const prefersReducedMotion = usePrefersReducedMotion();

    return (
        <Flex
            position="relative"
            width="100%"
            py={3}
            px={{ base: "4", md: "8"}}
            justifyContent="center"
            _before={{
                content: '""',
                position: "absolute",
                top: "0px",
                left: "0px",
                right: "0px",
                bottom: "0px",
                background: `linear-gradient(90deg, ${transparentize("brand.100", 0.5)(theme)} 0%, ${transparentize(
                    "brand.900",
                    0.5,
                )(theme)}) 100%`,
                backgroundSize: prefersReducedMotion ? "100% 100%" : "400% 400%",
                animation: prefersReducedMotion ? undefined : `${movingGradient} 5s ease infinite`,
                backdropFilter: "blur(5px)",
            }}
        >
            <Text zIndex={21} textAlign="center">
                Hey! It&lsquo;s my birthday today. Send me some wishes in{" "}
                <NextLink href="/message" passHref>
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
                        /message
                    </Link>
                </NextLink>
                !
            </Text>
        </Flex>
    )
}

export default BirthdayNotice;
