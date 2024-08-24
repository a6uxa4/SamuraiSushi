"use client";

import { AppShell, Container } from "@mantine/core";
import { PropsWithChildren } from "react";
import { HeaderTabs } from "./Header";
import { FooterLinks } from "./Footer";

interface IProps extends PropsWithChildren {}

export const Layout = ({ children }: IProps) => {
  return (
    <AppShell padding={0} header={{ height: 88 }} footer={{ height: 383 }}>
      <AppShell.Header>
        <HeaderTabs />
      </AppShell.Header>
      <AppShell.Main>
        <Container
          size="lg"
          style={{
            minHeight: "calc(100vh - 88px - 383px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {children}
        </Container>
      </AppShell.Main>
      <AppShell.Footer style={{ position: "static" }}>
        <FooterLinks />
      </AppShell.Footer>
    </AppShell>
  );
};
