import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    homepage: defineCollection({
      source: 'index.md',
      type: 'page',
      schema: z.object({
        title: z.string(),
        subtitle: z.string(),
        description: z.string(),
        hero: z.object({
          headline: z.string(),
          subheadline: z.string(),
          ctaButtons: z.array(z.object({
            text: z.string(),
            link: z.string(),
            variant: z.enum(['primary', 'secondary'])
          })),
          image: z.object({
            src: z.string(),
            alt: z.string()
          }),
          features: z.array(z.string())
        }),
        stats: z.array(z.object({
          number: z.string(),
          label: z.string()
        }))
      })
    }),
    blog: defineCollection({
      source: 'blog/**',
      type: 'page',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        author: z.string(),
        tags: z.array(z.string()),
        image: z.string(),
        draft: z.boolean(),
        category: z.string(),
        readTime: z.string()
      })
    })
  },
})