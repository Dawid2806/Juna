import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NhostProvider, NhostClient } from "@nhost/nextjs";
import { NhostApolloProvider } from "@nhost/react-apollo";
import { NextUIProvider } from "@nextui-org/react";
import { Layout } from "@/Components/Organisms/Layout/Layout";

const nhost = new NhostClient({
  subdomain: process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN || "",
  region: process.env.NEXT_PUBLIC_NHOST_REGION || "",
  backendUrl: process.env.NEXT_PUBLIC_NHOST_BACKEND_URL || "",
  graphqlUrl: process.env.NEXT_PUBLIC_NHOST_GRAPHQL_URL || "",
  adminSecret: process.env.NEXT_PUBLIC_NHOST_ADMIN_SECRET || "",
  authUrl: process.env.NEXT_PUBLIC_NHOST_AUTH_URL || "",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NhostProvider nhost={nhost} initial={pageProps.nhostSession}>
      <NhostApolloProvider nhost={nhost}>
        <NextUIProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </NextUIProvider>
      </NhostApolloProvider>
    </NhostProvider>
  );
}
