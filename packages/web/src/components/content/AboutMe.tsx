import {FC} from "react";
import {Box, Flex, FlexProps, Link, Text} from "@chakra-ui/react";
import {useTimePassed} from "@/hooks/useTimePassed";
import {BDAY_TIMESTAMP, CODING_START, GITHUB_ID} from "@/config/globals";
import {blurImage} from "@/config/static";
import Image from "next/image";
import NextLink from "next/link";


const IMAGE_SMALL = 150;
const IMAGE_LARGE = 200;

const AboutComponent: FC<FlexProps> = (props) => {
    const age = useTimePassed(BDAY_TIMESTAMP);
    const codingFor = useTimePassed(CODING_START);

    return (
        <Flex
            backgroundColor="blackAlpha.400"
            p={4}
            mt={2}
            borderRadius={10}
            boxShadow="md"
            flexDirection={["column", "column", "row", "row"]}
            justifyContent="center"
            alignItems="center"
            {...props}
        >
            <Flex bgGradient="linear(to-r, brand.100, brand.900)" borderRadius={100} margin={3} padding={0.5}>
                <Box
                    background="gray.800"
                    width={{
                        md: IMAGE_LARGE,
                        base: IMAGE_SMALL,
                    }}
                    height={{
                        md: IMAGE_LARGE,
                        small: IMAGE_SMALL,
                    }}
                    borderRadius={100}
                    overflow="hidden"
                    flexShrink={0}
                    fontSize={0} // next image is so so so so so so so so stupid
                    boxShadow="md"
                >
                    <Image
                        placeholder="blur"
                        blurDataURL={blurImage}
                        src={`https://avatars.githubusercontent.com/u/${GITHUB_ID}`}
                        width={300}
                        height={300}
                        alt="My Github Avatar"
                    />
                </Box>
            </Flex>

            <Text fontSize="lg" padding={3}>
                Since you&apos;re here allow me to introduce myself. My name is Jpuf and I&apos;m a {Math.floor(age)}{" "}
                year old software and web developer from the UK with over {Math.floor(codingFor)} years of experience. In
                my free time I usually listen to songs or watch anime, but recently I haven’t had much time
                for that. Feel free to message me anywhere in{" "}
                <NextLink href="/contact" passHref>
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
                        /contact
                    </Link>
                </NextLink>
                .
            </Text>
        </Flex>
    )
}

export default AboutComponent;