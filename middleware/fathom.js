export default function (context) {
  if (!process.client) {
    return
  }

  window.fathom.trackPageview()
}
