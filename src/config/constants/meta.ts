import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Big Swap',
  description:
    'The most popular AMM on BSC by user count! Earn BIG through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by Big Swap), NFTs, and more, on a platform you can trust.',
  image: 'https://Bigswap.finance/logo.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('Big Swap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('Big Swap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('Big Swap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('Big Swap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('Big Swap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('Big Swap')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('Big Swap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('Big Swap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('Big Swap')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('Big Swap')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('Big Swap')}`,
      }
    default:
      return null
  }
}
