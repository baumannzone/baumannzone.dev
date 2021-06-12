const routes = {
  HOME: '/',
  BLOG: '/blog',
  USES: '/uses',
}

const navItems = [
  {
    text: 'Inicio',
    to: routes.HOME,
  },
  {
    text: 'Blog',
    to: routes.BLOG,
  },
  {
    text: 'Usos',
    to: routes.USES,
  },
]

const socialItems = [
  {
    ico: 'ig',
    url: 'https://instagram.com/baumannzone',
  },
  {
    ico: 'twitch',
    url: 'https://twitch.tv/baumannzone',
  },
  {
    ico: 'twitter',
    url: 'https://twitter.com/baumannzone',
  },
  {
    ico: 'yt',
    url: 'https://youtube.com/RambitoJS',
  },
  {
    ico: 'gh',
    url: 'https://github.com/baumannzone',
  },
  {
    ico: 'codepen',
    url: 'https://codepen.com/baumannzone',
  },
]

export { routes, navItems, socialItems }
