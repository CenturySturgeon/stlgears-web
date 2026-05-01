export const SITE_CONFIG = {
  name: 'STLGears.com',
  description: 'Design, learn, and model all kinds of gears',
  routes: {
    home: "/",
    generators: {
      base: "/generators",
      items: {
        stl: "/generators/stl",
        dxf: "/generators/dxf"
      }
    },
    theory: "/theory",
    about: "/about",
  },
  documents: {
    privacy: '/documents/privacy-policy.pdf',
    cookies: '/documents/cookies-policy.pdf',
  },
  socials: {
    blog: 'https://ko-fi.com/juangras'
  }
};