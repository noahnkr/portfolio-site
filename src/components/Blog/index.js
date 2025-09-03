import './index.scss'
import BlogIndex from './blog_index'
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
import NotFound from '../NotFound'
import 'highlight.js/styles/github-dark.css'
import 'katex/dist/katex.min.css'

import Headshot from '../../assets/images/headshot.jpg'

export const BlogPost = () => {
  const { slug } = useParams()
  const [content, setContent] = useState('')
  const markdownRef = useRef(null)

  useEffect(() => {
    fetch(`/posts/${slug}.md`)
      .then((res) => {
        if (!res.ok) throw new Error('Not found')
        return res.text()
      })
      .then((text) => setContent(text))
      .catch(() => setContent('# 404\n\nThis post doesn’t exist.'))
  }, [slug])

  useEffect(() => {
    if (!markdownRef.current) return

    const MIN_SCALE = 0.4

    const scaleEquations = () => {
      const katexBlocks = markdownRef.current.querySelectorAll(
        '.katex-display .katex'
      )
      katexBlocks.forEach((block) => {
        block.style.transform = 'scale(1)'
        block.style.transformOrigin = 'left top'

        const parentWidth = block.parentElement.offsetWidth
        const actualWidth = block.scrollWidth

        if (actualWidth > parentWidth) {
          let scale = parentWidth / actualWidth

          if (scale < MIN_SCALE) {
            scale = MIN_SCALE
            block.parentElement.style.overflowX = 'auto'
          } else {
            block.parentElement.style.overflowX = 'hidden'
          }

          block.style.transform = `scale(${scale})`
        } else {
          block.parentElement.style.overflowX = 'hidden'
        }
      })
    }

    scaleEquations()
    window.addEventListener('resize', scaleEquations)
    return () => window.removeEventListener('resize', scaleEquations)
  }, [content])

  const postMeta = BlogIndex.find((post) => post.slug === slug)

  if (!postMeta) {
    return <NotFound />
  } else {
    document.title = postMeta.title
  }

  return (
    <>
      <div className="container blog-page">
        <div className="text-zone">
          <h1 className="animated-letters blog-title">
            <AnimatedLetters
              text={postMeta.title}
              index={25}
              delayFactor={0.03}
            />
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
          <div className="markdown-body" ref={markdownRef}>
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
            <AnimatedLetters text="Blog" index={25} />
          </h1>
          <p className="paragraph-animate">
            Exploring ideas, building things, and writing down what I learn
            along the way.
          </p>
          <div className="blog-grid">
            {BlogIndex.map((post) => (
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
