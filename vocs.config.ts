import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'ERC-7786',
  sidebar: [
    {
      text: 'Introduction',
      link: '/',
    },
    {
      text: 'Spec',
      link: '/erc',
    },
    // {
    //   text: 'Comparison',
    //   link: '/comparison',
    // },
    // {
    //   text: 'Ecosystem',
    //   link: '/ecosystem',
    // },
    // {
    //   text: 'Usage Example',
    //   link: '/usage-example',
    // },
    // {
    //   text: 'FAQ',
    //   link: '/faq',
    // },
    {
      text: 'Examples',
      link: '/examples',
    },
    {
      text: 'Open Bridge',
      link: '/open-bridge',
    },
  ],

  theme: {
    variables: {
      color: {codeInlineText: { light: '#E66C16', dark: '#E66C16' }}
    }
  }
})
