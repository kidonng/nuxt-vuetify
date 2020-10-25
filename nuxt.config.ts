import { VuetifyLoaderPlugin } from 'vuetify-loader'
import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  build: {
    plugins: [new VuetifyLoaderPlugin()],
    transpile: ['vuetify'],
    hardSource: true
  },
  buildModules: ['@nuxt/typescript-build'],
  plugins: ['~plugins/composition-api', '~plugins/vuetify'],
  head: {
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900'
      },
      {
        rel: 'stylesheet',
        href:
          'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css'
      }
    ]
  }
}

export default config
