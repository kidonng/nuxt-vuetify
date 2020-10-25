import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

// Can't use `inject` which throws an error "Cannot set property $vuetify of [object Object] which has only a getter"
const { framework } = new Vuetify()
if (!Vue.prototype.$vuetify) {
  // @ts-ignore
  if (process.client) framework.theme.applyTheme()
  Object.defineProperty(Vue.prototype, '$vuetify', {
    get() {
      return framework
    },
    set() {}
  })
}
