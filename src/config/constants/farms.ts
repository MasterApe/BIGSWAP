import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
   {
    pid: 0,
    lpSymbol: 'MASS',
    lpAddresses: {
      96: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      56: '0x4416AC96BEBDD02AE3e0a479Fc759c8A28D6ef25',
    },
    token: tokens.syrup,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'MASS-BNB LP',
    lpAddresses: {
      96: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0xd3495db722EC3777737A80407fB32bD771d2CcC3',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      96: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 3,
    lpSymbol: '$BIG-MASS LP',
    lpAddresses: {
      96: '',
      56: '0x6dA12A518ECFAB12b235fa150cDdB52AB2b5cD94',
    },
    token: tokens.big,
    quoteToken: tokens.cake,
  },
  {
    pid: 4,
    lpSymbol: '$BIG-BNB LP',
    lpAddresses: {
      96: '',
      56: '0x3b3940eb3d198bB467255d5b190659b4013AC608',
    },
    token: tokens.big,
    quoteToken: tokens.wbnb,
  },
  
  /**
   * 
   * V3 by order of release (some may be out of PID order due to multiplier boost)
   */
  
  
  
]

export default farms
