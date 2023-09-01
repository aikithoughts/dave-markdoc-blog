import TableOfContents from "@/components/TableOfContents";
import Head from "next/head";
import Image from "next/image";
import SiteHeader from "../components/SiteHeader";
import ReadingTime from "@/components/ReadingTime";

const ArticleLayout = ({ markdoc, children, toc, wordCount }) => {
  const { title, description, cover } = markdoc?.frontmatter;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <SiteHeader />
      <article className="site-article">
        <div className="wrapper">
          <header className="article-header">
            <div className="img-cont relative h-56">
              <Image
                src={cover}
                fill={true}
                alt="cover"
                className="object-cover rounded-b-2xl"
              />
            </div>
            <div className="wrapper">
              <h1 className="font-extrabold text-6xl">{title}</h1>
              <p className="text-2xl">{description}</p>
            </div>
          </header>
          <div className="article-content-page flex"> {/* Flex layout */}
            <main className="main-content prose overflow-auto flex flex-col gap-4 px-12 max-w-7xl m-auto content-center;"> {/* Adjust width and alignment */}
              <ReadingTime words={wordCount}/>
              {children}
            </main>
            <TableOfContents toc={toc} />
          </div>
        </div>
      </article>
      <style jsx>
        {`
          .article-content-page {
            display: flex;
            align-items: flex-start; /* Align contents at the top */
          }
          .main-content {
            /* Adjust width to your preference */
          }
        `}
      </style>
    </>
  );
};

export default ArticleLayout;
