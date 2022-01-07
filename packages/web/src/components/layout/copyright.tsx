import {FC} from "react";
import {Text, TextProps} from "@chakra-ui/react";

const Copyright: FC<TextProps> = (props) => (
    <Text fontSize="sm" {...props}>
        &copy; 2022-{new Date().getFullYear()} Jpuf.
    </Text>
);

export default Copyright;
