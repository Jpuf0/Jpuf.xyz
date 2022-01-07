import "@/styles/global.scss";
import type { AppProps } from 'next/app'
import {ChakraProvider} from "@chakra-ui/react";
import theme from "@/config/theme";

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
    <ChakraProvider theme={theme}>
        <Component {...pageProps} />
    </ChakraProvider>
)

export default App
