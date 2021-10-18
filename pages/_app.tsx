import type { AppProps } from 'next/app';
import {Provider} from "react-redux";
import store from "../redux/store";
import Layout from "../Components/Layout/Layout";
import GlobalStyle from "../GlobalStyles/globalStyle";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
                <Layout>
                    <GlobalStyle />
                    <Component {...pageProps} />
                </Layout>
        </Provider>
    )
}
export default MyApp
