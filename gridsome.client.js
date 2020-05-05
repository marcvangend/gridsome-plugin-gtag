import VueGtag from "vue-gtag";

export default function (Vue, options, { isServer: disabled, router }) {
  Vue.use(VueGtag, {
    debug: {
      sendHitTask: process.env.NODE_ENV === 'production'
    },
    router,
    disabled,
    ...options
  })
}
