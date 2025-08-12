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

  const postMeta = blogPosts.find((post) => post.slug === slug)

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

const blogPosts = [
  {
    slug: 'machine-learning-overview',
    title: 'Machine Learning: A High-Level Overview',
    preview: `A brief orientation for complete novices in the field of machine learning to gain a better understanding
              on the fundamentals of what machine learning is, how it is used, and the general framework for how it works.`,
    date: 'July 19th, 2025',
    readTime: '5 min read',
    category: 'Data Science',
  },
  {
    slug: 'math-review',
    title: 'The Math Behind Machine Learning',
    preview: `If terms like gradients, dot products, or partial derivatives feel a little rusty, this post walks through the key 
              math concepts behind machine learning: linear algebra, calculus, and probability without diving too deep.`,
    date: 'July 19th, 2025',
    readTime: '10 min read',
    category: 'Data Science',
  },
  {
    slug: 'linear-regression',
    title:
      "How Linear Regression Works (and Why it's the Foundation of Machine Learning)",
    preview: `In this post, I'll break down what linear regression is, how it makes predictions, and how it learns from data. 
              You'll see how this one model introduces key ideas like feature vectors, model parameters, loss functions, and gradient 
              descent.`,
    date: 'July 21st, 2025',
    readTime: '15 min read',
    category: 'Data Science',
  },
  {
    slug: 'linear-perceptron',
    title:
      'From Lines to Layers: The Linear Perceptron and the Rise of Neural Networks',
    preview: `At the heart of today's neural networks lies a surprisingly simple idea—the perceptron.
              This post unpacks how this classic algorithm works, how it learns to seperate data, and how
              stacking these simple units leads to powerful models that drive today's AI.`,
    date: 'July 30th, 2025',
    readTime: '12 min read',
    category: 'Data Science',
  },
  {
    slug: 'logistic-regression',
    title: 'Logistic Regression: Turning Probabilities into Predictions',
    preview: `Beneath the math, logistic regression is a clever way to draw a straight line between two classes.
              This post breaks down how we turn its inputs into probabilities and predictions, how it dffers from the linear perceptron,
              and how it powers real-world decisions like sports preditions.`,
    date: 'August 7th, 2025',
    readTime: '15 min read',
    category: 'Data Science',
  },
]

export default Blog
