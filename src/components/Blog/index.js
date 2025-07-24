import './index.scss'
import { useState, useEffect, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypeHighlight from 'rehype-highlight'
import rehypeRaw from 'rehype-raw'
import 'highlight.js/styles/github-dark.css'
import 'katex/dist/katex.min.css'

import Headshot from '../../assets/images/headshot.jpg'

import { blogPosts } from '../../posts'

export const BlogPost = () => {
  const { slug } = useParams()
  const [content, setContent] = useState('')

  useEffect(() => {
    import(`../../posts/${slug}.md`)
      .then((res) => fetch(res.default))
      .then((res) => res.text())
      .then((text) => setContent(text))
  }, [slug])

  const postMeta = blogPosts.find((post) => post.slug === slug)

  document.title = postMeta.title

  return (
    <>
      <div className="container blog-page">
        <div className="text-zone">
          <h1 className="animated-letters blog-title">
            {postMeta.title.split(' ').map((word, wordIndex) => (
              <span className="animated-word" key={wordIndex}>
                <AnimatedLetters
                  strArray={word.split('')}
                  index={25 + wordIndex * 5}
                  delayFactor={0.03}
                />
              </span>
            ))}
          </h1>
          <div className="blog-meta-wrapper">
            <img
              src={Headshot}
              alt="Noah Roberts"
              className="author-headshot"
            />
            <div className="blog-meta-text">
              <span className="author-name">Noah Roberts</span>
              <span className="meta-detail">
                {postMeta.date} &nbsp;•&nbsp; {postMeta.readTime} &nbsp;•&nbsp;{' '}
                {postMeta.category}
              </span>
            </div>
          </div>
          <div className="markdown-body">
            <Markdown
              remarkPlugins={[remarkGfm, remarkMath]}
              rehypePlugins={[rehypeKatex, rehypeHighlight, rehypeRaw]}
            >
              {content}
            </Markdown>
          </div>
        </div>
      </div>
      <Loader type="ball-pulse-sync" />
    </>
  )
}

const Blog = () => {
  document.title = 'Noah Roberts | Blog'
  return (
    <>
      <div className="container blog-page">
        <div className="text-zone">
          <h1 className="animated-letters">
            <AnimatedLetters strArray={'Blog'.split('')} index={10} />
          </h1>
          <p className="paragraph-animate">
            Exploring ideas, building things, and writing down what I learn
            along the way.
          </p>
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <Link
                to={`/blog/${post.slug}`}
                className="blog-card"
                key={post.slug}
              >
                <h2>{post.title}</h2>
                <span className="blog-meta">
                  {post.date} &nbsp;•&nbsp; {post.readTime} &nbsp;•&nbsp;{' '}
                  {post.category}
                </span>
                <p className="blog-preview">{post.preview}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Loader type="ball-pulse-sync" />
    </>
  )
}

export default Blog
