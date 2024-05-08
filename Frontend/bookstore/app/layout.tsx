import Layout, {Content, Footer, Header} from "antd/es/layout/layout";
import "./globals.css";
import { Menu } from "antd";
import Link from "next/link";

const items = [
  {key: "home", label: <Link href={"/"}>Главная</Link>},
  {key: "books", label: <Link href={"/books"}>Каталог книг</Link>}
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Layout style={{minHeight: "100vh"}}>
          <Header>
            <Menu 
            theme="dark"
            mode= "horizontal"
            items={items}
            style={{flex: 1, minWidth: 0}}
            />
          </Header>
          <Content style = {{padding: "0 48px"}}>{children}</Content>
          <Footer style = {{textAlign: "center"}}>
            Book store 20024 Created by Walter-F
          </Footer>
        </Layout>
      </body>
    </html>
  );
}
