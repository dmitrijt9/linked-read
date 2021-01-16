export default {
  scrollTo: (selector, document) => {
    if (document) {
      const el = document.querySelector(selector)
      if (el) {
        el.scrollIntoView()
      }
    } else {
      console.error('Utils - scrollTo: Provide HTML document object!')
    }
  },
}
