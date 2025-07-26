import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const dynamicPageSchema = z.object({
  meta: z.object({
    image: z.string()
  })
})

export default defineContentConfig({
  collections: {
    content_pl: defineCollection({
      type: 'page',
      source: {
        include: 'pl/**',
        prefix: ''
      },
      schema: dynamicPageSchema,
    }),
  }
})