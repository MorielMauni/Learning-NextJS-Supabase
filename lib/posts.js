import H1 from '@/components/h1'
import fs from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'

export function loadPost(slug) {
  // 1. Safeguard against non-string slugs (prevents the .endsWith crash)
  if (typeof slug !== 'string') {
    return null;
  }

  const filename = slug.endsWith('.mdx') ? slug : `${slug}.mdx`

  // 2. Add 'utf8' to ensure this returns a text string, not a raw Buffer
  return fs.readFileSync(
    path.join(process.cwd(), 'content', filename),
    'utf8' 
  )
}

export async function getPost(slug) {
  const source = loadPost(slug)

  // Exit early if the file wasn't found or the slug was invalid
  if (!source) return null;

  return await compileMDX({
    source,
    components: {
      h1: (props) => <H1 {...props} />
    },
    options: {
      parseFrontmatter: true
    }
  })
}

export async function getPosts({
  newest = true, page = 1, limit = 3, tags
} = {}) {
  const files = fs.readdirSync(
    path.join(process.cwd(), 'content')
  )

  const posts = await Promise.all(
    files.map(async filename => {
      const { frontmatter } = await getPost(filename)

      return {
        frontmatter,
        slug: filename.replace('.mdx', '')
      }
    })
  )

  let filteredPosts = posts

  if (tags) {
    // 3. Added the optional chaining (?.) so it doesn't crash if a post has no tags
    filteredPosts = filteredPosts.filter(
      post => post.frontmatter.tags?.some(
        tag => tags.includes(tag)
      )
    )
  }

  // Simplified sorting logic
  if (newest) {
    filteredPosts.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
  } else {
    filteredPosts.sort((a, b) => new Date(a.frontmatter.date) - new Date(b.frontmatter.date))
  }

  const startIndex = (page - 1) * limit 
  const endIndex = page * limit 

  return {
    posts: filteredPosts.slice(startIndex, endIndex),
    pageCount: Math.ceil(filteredPosts.length / limit)
  }
}