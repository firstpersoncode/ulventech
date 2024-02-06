import ReduxProvider from "@/store/Provider";
import "@/styles/globals.css";
import { ThemeProvider, createTheme } from "@mui/material";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();

  return (
    <ReduxProvider>
      <ThemeProvider theme={createTheme()}>
        <Component key={asPath} {...pageProps} />
      </ThemeProvider>
    </ReduxProvider>
  );
}
