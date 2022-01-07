import {BoxProps, Flex, useBreakpointValue} from "@chakra-ui/react";
import {useIsBirthday} from "@/hooks/useIsBirthday";
import {BDAY_TIMESTAMP} from "@/config/globals";
import {FC, useEffect, useState} from "react";
import dynamic from "next/dynamic";
import Logo from "./logo";
import { transparentize } from "@chakra-ui/theme-tools";
import theme from "../../config/theme";
import MenuToggle from "./navToggle";
import Navigation from "./Navigation";

const BirthdayNotice = dynamic(() => import("./BirthdayNotice"))

const Author: FC<BoxProps> = (props) => {
    const isBirthday = useIsBirthday(BDAY_TIMESTAMP);
    const [isOpen, setIsOpen] = useState(false);
    const shouldCloseNav = useBreakpointValue({ base: false, md: true});

    const toggle = () => setIsOpen((value) => !value);

    useEffect(() => {
        const resizeHandler = () => shouldCloseNav && setIsOpen(false);

        window.addEventListener("resize", resizeHandler);

        return () => {
            window.removeEventListener("resize", resizeHandler);
        };
    }, [shouldCloseNav]);

    return (
        <Flex
            position="sticky"
            alignSelf="flex-start"
            top={0}
            width="100%"
            as="header"
            flexDirection="column"
            zIndex={20}
            {...props}
        >
            {isBirthday && <BirthdayNotice />}

            <Flex
                position="relative"
                width="100%"
                py={4}
                px={{ base: "4", md: "8" }}
                justifyContent="space-between"
                wrap="wrap"
                _before={{
                    content: '""',
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    right: "0px",
                    bottom: "0px",
                    background: transparentize("gray.900", 0.8)(theme),
                    backdropFilter: "blur(5px)",
                }}
            >
                <Logo />

                <MenuToggle isOpen={isOpen} toggle={toggle} />
                <Navigation isOpen={isOpen} />
            </Flex>
        </Flex>
    );
};

export default Author;
