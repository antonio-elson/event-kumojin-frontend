import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {
  ContentFooter,
  Footer,
  LinkHeader,
  LinkNav,
  Main,
  Menu,
  NavHeader,
} from "./page-styled";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Events KMJN",
  description: "Gestion des événements app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const ItemLinks = () => (
    <>
      <LinkHeader href="/about">
        <p>About</p>
      </LinkHeader>
      <LinkHeader href="/events">
        <p>Créer événement</p>
      </LinkHeader>
    </>
  );
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavHeader>
          <LinkNav href="/">
            <p>Events KMJN</p>
          </LinkNav>
          <Menu>
            <ItemLinks />
          </Menu>
        </NavHeader>
        <Main>{children}</Main>
        <Footer>
          <ContentFooter>
            <p>{`by Antonio Elson`}</p>
          </ContentFooter>
        </Footer>
      </body>
    </html>
  );
}
