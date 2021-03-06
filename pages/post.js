import Layout from '../components/MyLayout'
import Markdown from 'react-markdown'

const input = `
  This is our blog post.
  yes we can have a [link](/link).
  And we can have a title as well.

  ### This is a title

  And here's the content.
`

export default props =>
  <Layout>
    <h1>{props.url.query.title}</h1>
    <div className="markdown">
      <Markdown
        source={input}
      />
    </div>
    <style jsx global>{`
      .markdown {
        font-family: "Arial";
      }
      .markdown a {
        text-decoration: none;
        color: blue;
      }
      .markdown a:hover {
        opacity: 0.6;
      }
      .markdown h3 {
        margin: 0;
        padding: 0;
        text-transform: uppercase;
      }
    `}</style>
  </Layout>