import ArticleLayout from '../layouts/ArticleLayout';
import '../styles/globals.css'


function countWords(node) {
  let words = 0;

  if (node) {
    if (typeof node === 'string') {
      const wordsArray = node.split(/\s+/).filter(Boolean);
      words += wordsArray.length;
    }

    if (node.children) {
      for (const child of node.children) {
        words += countWords(child);
      }
    }
  }

  return words;
}

function collectHeadings(node, sections = []) {

  //console.log("in collectHeadings");
  if (node) {


    if (node.name === 'Heading') {
      const title = node.children[0];

      if (typeof title === 'string') {
        sections.push({
          ...node.attributes,
          title
        });
      }
    }

    if (node.children) {
      for (const child of node.children) {
        collectHeadings(child, sections);
      }
    }
  }

  return sections;
}

function App({ Component, pageProps }) {

  const toc = pageProps.markdoc?.content
  ? collectHeadings(pageProps.markdoc.content)
  : [];

  const wordCount = pageProps.markdoc?.content
  ? countWords(pageProps.markdoc.content)
  : 0;

  // configure default article layout
  const articleLayout = (page) => {
    // pass `markdoc` props to ArticleLayout
    return (
      page.props.markdoc && (
        <ArticleLayout markdoc={page.props.markdoc} toc={toc} wordCount={wordCount}> {page}</ArticleLayout>
      )
    )
  };

// Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || articleLayout;

  return getLayout(<Component {...pageProps} />);
}

export default App;
