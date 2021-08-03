export default function (context) {
  if (!process.client) {
    return
  }

  try {
    window.fathom.trackPageview()
  } catch (e) {
    // ignore
  }
}
