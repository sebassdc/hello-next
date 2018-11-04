import Layout from '../components/MyLayout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const posts = [
  { id: 'hello-nextjs', title: 'Hello Next.js'},
  { id: 'learn-nextjs', title: 'Learn Next.js is awesome'},
  { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT'},
]

const PostLink = ({ post }) =>
  <li key={post.id}>
    <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
      <a>{post.title}</a>
    </Link>
    <style jsx>{`
      a {
        font-family: "Arial";
        text-decoration: none;
        color: blue;
      }
      li {
        list-style: none;
        margin: 5px 0;
      }
      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>


export default () =>
  <Layout>
    <h1>My Blog</h1>
    <ul>
      {posts.map( post => <PostLink key={post.id} post={post}/> )}
    </ul>
    <style jsx>{`
      h1 {
        font-family: "Arial";
      }
      ul {
        padding: 0;
      }
    `}</style>
  </Layout>
