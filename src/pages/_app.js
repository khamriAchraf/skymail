import "@/styles/globals.css";
import Layout from "../../components/Layout";
import localFont from "next/font/local";

const futura = localFont({
  src: [
    {
      path: "../fonts/futura.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/futura_bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-futura",
});

export default function App({ Component, pageProps }) {
  return (
    <Layout className={futura.className}>
      <Component {...pageProps} />
    </Layout>
  );
}
