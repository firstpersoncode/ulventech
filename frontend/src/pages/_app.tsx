import { queryClient } from "@/libs/queryClient";
import "@/styles/globals.css";
import { ThemeProvider, createTheme } from "@mui/material";
import { QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={createTheme()}>
        <Component key={asPath} {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
