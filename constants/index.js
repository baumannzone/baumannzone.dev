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

export { routes, navItems }
