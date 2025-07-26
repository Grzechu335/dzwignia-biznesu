import type { Collections } from "@nuxt/content"
import type { NavigationMenuItem } from "@nuxt/ui"

export default function useNavigationData() {
  const { locale } = useI18n()

  return useAsyncData('navigation', async () => {
    const contentCollection = `content_${locale.value}` as keyof Collections

    const navigationData = await queryCollectionNavigation(contentCollection)

    if (!navigationData && locale.value !== 'pl') {
        return queryCollectionNavigation('content_pl')
    }

    return navigationData

  }, {
    watch: [locale],
    transform: (data) => {
      const transformedData: NavigationMenuItem[] =  data?.map(item => ({
        label: item.title,
        icon: typeof item.icon === 'string' ? item.icon : undefined,
        to: item.path,
        children: item.children?.filter(child => !child.stem?.includes('index')).map(child => ({
            label: child.title,
            icon: typeof child.icon === 'string' ? child.icon : undefined,
            to: child.path,            description: typeof child.description === 'string' ? child.description : undefined
        })) || []
    })) || []
      return transformedData
    }
  })
}