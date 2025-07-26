<script setup lang="ts">
const { data: navigationItems } = await useNavigationData()

const currentYear = new Date().getFullYear()

const socialLinks = [
    { icon: 'i-simple-icons-facebook', to: '#', label: 'Facebook' },
    { icon: 'i-simple-icons-twitter', to: '#', label: 'Twitter' },
    { icon: 'i-simple-icons-linkedin', to: '#', label: 'LinkedIn' },
    { icon: 'i-simple-icons-instagram', to: '#', label: 'Instagram' }
]

const legalLinks = [
    { label: 'Polityka prywatności', to: '/polityka-prywatnosci' },
    { label: 'Regulamin', to: '/regulamin' },
    { label: 'Cookies', to: '/cookies' }
]
</script>

<template>
    <footer class="bg-gray-900 text-gray-300 mt-20">
        <div class="container mx-auto px-4 py-12">
            <!-- Main Footer Content -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- Company Info -->
                <div class="space-y-4">
                    <div class="text-white font-bold text-xl">
                        Twoje Logo
                    </div>
                    <p class="text-sm leading-relaxed">
                        Pomagamy firmom rozwijać się i osiągać sukces poprzez skuteczne strategie biznesowe i marketing.
                    </p>
                    <div class="flex space-x-4">
                        <UButton
                            v-for="social in socialLinks"
                            :key="social.label"
                            :icon="social.icon"
                            :to="social.to"
                            variant="ghost"
                            color="gray"
                            size="sm"
                            class="hover:text-white"
                        />
                    </div>
                </div>

                <!-- Navigation Links -->
                <div
                    v-for="section in navigationItems"
                    :key="section.label"
                    class="space-y-4"
                >
                    <h3 class="text-white font-semibold text-lg">
                        {{ section.label }}
                    </h3>
                    <ul class="space-y-2">
                        <li v-if="section.children.length === 0">
                            <ULink
                                :to="section.to"
                                class="text-sm hover:text-white transition-colors duration-200"
                            >
                                {{ section.label }}
                            </ULink>
                        </li>
                        <li
                            v-for="child in section.children"
                            :key="child.label"
                        >
                            <ULink
                                :to="child.to"
                                class="text-sm hover:text-white transition-colors duration-200"
                            >
                                {{ child.label }}
                            </ULink>
                        </li>
                    </ul>
                </div>

                <!-- Contact Info -->
                <div class="space-y-4">
                    <h3 class="text-white font-semibold text-lg">
                        Kontakt
                    </h3>
                    <div class="space-y-3 text-sm">
                        <div class="flex items-center space-x-2">
                            <UIcon
                                name="i-heroicons-envelope"
                                class="w-4 h-4"
                            />
                            <span>kontakt@example.com</span>
                        </div>
                        <div class="flex items-center space-x-2">
                            <UIcon
                                name="i-heroicons-phone"
                                class="w-4 h-4"
                            />
                            <span>+48 123 456 789</span>
                        </div>
                        <div class="flex items-start space-x-2">
                            <UIcon
                                name="i-heroicons-map-pin"
                                class="w-4 h-4 mt-0.5"
                            />
                            <span>ul. Przykładowa 123<br>00-000 Warszawa</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Newsletter Section -->
            <div class="border-t border-gray-800 mt-12 pt-8">
                <div class="max-w-md mx-auto text-center">
                    <h3 class="text-white font-semibold text-lg mb-4">
                        Zapisz się do newslettera
                    </h3>
                    <p class="text-sm mb-6">
                        Otrzymuj najnowsze informacje o biznesie i marketingu
                    </p>
                    <div class="flex space-x-2">
                        <UInput
                            placeholder="Twój adres email"
                            type="email"
                            class="flex-1"
                        />
                        <UButton color="primary">
                            Zapisz się
                        </UButton>
                    </div>
                </div>
            </div>

            <!-- Bottom Bar -->
            <div class="border-t border-gray-800 mt-12 pt-8">
                <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div class="text-sm">
                        © {{ currentYear }} Dzwignia Biznesu. Wszystkie prawa zastrzeżone.
                    </div>
                    <div class="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
                        <ULink
                            v-for="link in legalLinks"
                            :key="link.label"
                            :to="link.to"
                            class="hover:text-white transition-colors duration-200"
                        >
                            {{ link.label }}
                        </ULink>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>