import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import React, { ReactNode } from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { theme } from "../theme";
import { Layout } from "../layouts";
import { ReduxProvider } from "../providers/ReduxProvider";
import { UuidProvider } from "../providers/UuiProvider";

export const metadata = {
  title: "Samurai - Доставка суши и роллов в Москве",
  description: "I am using Mantine with Next.js!",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <ReduxProvider>
          <UuidProvider>
            <MantineProvider theme={theme}>
              <Layout>{children}</Layout>
            </MantineProvider>
          </UuidProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
