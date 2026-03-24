import axios from 'axios';
import Conf from 'conf';

const config = new Conf({
  projectName: 'onchain-cli',
  defaults: {
    chains: {
      ethereum: { explorer: 'https://api.etherscan.io/api', apiKey: '' },
      base: { explorer: 'https://api.basescan.org/api', apiKey: '' },
      bsc: { explorer: 'https://api.bscscan.com/api', apiKey: '' },
      polygon: { explorer: 'https://api.polygonscan.com/api', apiKey: '' },
      // tambah chain lain sesuai kebutuhan
    },
    coingecko: true,
    cmcApiKey: '',
  },
});

export const getChainConfig = (chain: string) => {
  const chains = config.get('chains') as any;
  return chains[chain.toLowerCase()] || chains.ethereum;
};

export const getApiKey = (service: string) => {
  if (service === 'cmc') return config.get('cmcApiKey') as string;
  return '';
};

export default axios;
