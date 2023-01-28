import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import dynamic from 'next/dynamic';

const ChakraProvider = dynamic(() =>
    import('@chakra-ui/react').then(mod => mod.ChakraProvider)
);
const SessionProvider = dynamic(() =>
    import('next-auth/react').then(mod => mod.SessionProvider)
);

function MyApp({ Component, pageProps, session }) {
    return (
        <SessionProvider session={session}>
            <ChakraProvider>
                <Component {...pageProps} />
            </ChakraProvider>
        </SessionProvider>
    );
}

export default MyApp;
