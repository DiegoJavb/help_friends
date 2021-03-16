import '../styles/globals.css'
import {AuthProvider} from "../lib/auth";
import { Container, CssBaseline, Grid, ThemeProvider } from "@material-ui/core";
import React from "react";

function App({Component, pageProps}) {
    return (
        <>
            <AuthProvider>
                <Component {...pageProps} />
            </AuthProvider>
        </>
    )
}

export default App
