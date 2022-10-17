import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { SnackbarProvider } from "notistack";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../styles/globals.scss";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import "leaflet/dist/leaflet.css";
import { SnackbarUtilsConfigurator } from "../components/SnackbarUtilsConfigurator";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <NextNProgress />
      <SnackbarProvider
        maxSnack={3}
        preventDuplicate
        autoHideDuration={3000}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <SnackbarUtilsConfigurator />
          <Component {...pageProps} />
        </LocalizationProvider>
      </SnackbarProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
