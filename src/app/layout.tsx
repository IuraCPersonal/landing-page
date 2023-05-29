"use client";

import "./globals.css";
import { Global } from "@emotion/react";

import theme from "@/lib/theme/theme";
import Navbar from "@/components/navbar/navbar";
import { ChakraProvider, Container } from "@chakra-ui/react";
import ScrollObserver from "@/lib/utils/scroll-observer";

export const metadata = {
  title: "Landing Page",
  description: "Landing Page for Business",
};

export default function RootLayout({
  children,
}: {
  children: string | JSX.Element | JSX.Element[] | React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Global
          styles={`
            @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;700&display=swap');
          `}
        />
        <ChakraProvider theme={theme}>
          <ScrollObserver>
            <Navbar />
            <Container minWidth="full" p={0}>
              {children}
            </Container>
          </ScrollObserver>
        </ChakraProvider>
      </body>
    </html>
  );
}
