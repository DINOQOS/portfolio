import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

/**
 * @description SEO를 위해 본인의 정보로 수정해주세요.
 */
const DEFAULT_SEO = {
  title: "장정우 | ML, Beck-End Dev",
  description: "안녕하세요, ML 백앤드 개발자 장정우입니다.",
  canonical: "https://dinoqos.vercel.app/",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://dinoqos.vercel.app/",
    title: "장정우 | ML, Beck-End Dev",
    site_name: "장정우 | ML, Beck-End Dev",
    images: [
      {
        url: "/share.png",
        width: 285,
        height: 167,
        alt: "장정우 | ML, Beck-End Dev",
      },
    ],
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
  ],
  additionalMetaTags: [
    {
      name: "application-name",
      content: "장정우 | ML, Beck-End Dev",
    },
    {
      name: "msapplication-tooltip",
      content: "장정우 | ML, Beck-End Dev",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
  ],
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
