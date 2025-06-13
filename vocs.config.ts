import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'ERC-7786',
  description: "ERC-7786 is the standard for crosschain messaging",
  ogImageUrl: "https://raw.githubusercontent.com/luiz-lvj/erc-7786/refs/heads/technical/docs/assets/metadata-image.jpg",
  sidebar: [
    {
      text: 'Introduction',
      link: '/',
    },
    {
      text: 'Spec',
      link: '/spec',
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
      text: 'OpenBridge',
      link: '/openbridge',
    },
  ],

  theme: {
    variables: {
      color: {codeInlineText: { light: '#E66C16', dark: '#E66C16' }}
    }
  }
})
