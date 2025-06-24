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
      color: {codeInlineText: { light: '#2073D7', dark: '#4C9DFE' }, textAccentHover: { light: '#4C9DFE', dark: '#2073D7' }, textAccent: { light: '#2073D7', dark: '#4C9DFE' }},
    }
  }
})
