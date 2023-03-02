import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { GoogleOAuthProvider } from "@react-oauth/google"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import "leaflet/dist/leaflet.css"
import type { AppProps } from "next/app"
import NextNProgress from "nextjs-progressbar"
import { SnackbarProvider } from "notistack"
import { SnackbarUtilsConfigurator } from "../components/SnackbarUtilsConfigurator"
import "../styles/globals.scss"
import "../components/TextEditor/TextEditor.css"

const queryClient = new QueryClient()

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
          <GoogleOAuthProvider
            clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ""}
          >
            <Component {...pageProps} />
          </GoogleOAuthProvider>
        </LocalizationProvider>
      </SnackbarProvider>
    </QueryClientProvider>
  )
}

export default MyApp
