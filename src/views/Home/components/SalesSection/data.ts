import { SalesSectionProps } from '.'

export const swapSectionData: SalesSectionProps = {
  headingText: 'AMM Aggregator protocol will soon be enabled.',
  bodyText: 'Trade tokens at the best prices on Ethereum blockchain, Binance blockchain, Polygon blockchain and, Avalanche blockchain. Using our DEX aggregator, tap into liquidity on 35+ decentralized exchanges, such as 0x, Uniswap, 1inch, pancakeswap, and Kyber, to execute your trade with the best return and lowest transaction fees.',
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: 'Trade Now',
    external: false,
  },
 
  images: {
    path: '/images/home/',
    attributes: [
      { src: 'BNB', alt: 'BNB token' },
    ],
  },
}

export const earnSectionData: SalesSectionProps = {
  headingText: 'Earn passive income with crypto.',
  bodyText: 'Big Swap makes it simple to make your crypto work for you!.',
  reverse: true,
  primaryButton: {
    to: '/farms',
    text: 'Explore',
    external: false,
  },
 
  images: {
    path: '/images/home/',
    attributes: [
      { src: 'pie', alt: 'Pie chart' },
    ],
  },
}

export const earnExtraData: SalesSectionProps = {
  headingText: 'Trade Cryptocurrency. No registration, no KYC, no hassle.Trade any token on Binance Smart Chain in seconds, just by connecting your wallet.',
  bodyText: 'Will you join them?',
  reverse: true,
  primaryButton: {
    to: '/pools',
    text: 'Explore',
    external: false,
  },
 
  images: {
    path: '/images/home/',
    attributes: [
      { src: 'extra', alt: 'Extra chart' },
    ],
  },
}

export const cakeSectionData: SalesSectionProps = {
  headingText: 'MASS is the governance token of Big Swap.',
  bodyText:
    'MASS token is at the core of the Big Swap ecosystem. Buy, trade,  farm, stake, earn, and vote with BIG.',
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0x4416AC96BEBDD02AE3e0a479Fc759c8A28D6ef25',
    text: 'Buy BIG',
    external: false,
  },


  images: {
    path: '/images/home/',
    attributes: [
      { src: 'coin', alt: 'MASS token' }
    ],
  },
}
