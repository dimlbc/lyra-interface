import { Network } from '@lyrafinance/lyra-js'

export default function getNetworkForChainId(chainId: number): Network {
  switch (chainId) {
    case 42161:
    case 421613:
      return Network.Arbitrum
    case 10:
    case 420:
      return Network.Optimism
    default:
      throw new Error('Chain ID is not supported by Lyra')
  }
}
