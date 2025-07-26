import { withLeadingSlash } from 'ufo'
import type { Collections } from '@nuxt/content'

export default function useDynamicPageData() {


const route = useRoute()
const { locale } = useI18n()
const slug = computed(() => withLeadingSlash(String(route.params.slug)))

return useAsyncData('page-' + slug.value, async () => {
    // Build collection name based on current locale
    const collection = ('content_' + locale.value) as keyof Collections
    const content = await queryCollection(collection).path(slug.value).first()

    // Optional: fallback to default locale if content is missing
    if (!content && locale.value !== 'en') {
        return await queryCollection('content_pl').path(route.path).first()
    }

    return content
}, {
    watch: [locale]
})}