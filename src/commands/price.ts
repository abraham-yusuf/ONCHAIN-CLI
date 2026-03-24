import { program } from 'commander';
import axios from '../lib/api';
import chalk from 'chalk';
import { table } from 'table';

program
  .command('price <symbol>')
  .description('Cek harga crypto (CoinGecko default)')
  .option('--source <source>', 'coingecko atau cmc', 'coingecko')
  .option('--json')
  .action(async (symbol, options) => {
    try {
      let data;
      if (options.source === 'coingecko') {
        const res = await axios.get(`https://api.coingecko.com/api/v3/simple/price`, {
          params: { ids: symbol.toLowerCase(), vs_currencies: 'usd' },
        });
        data = res.data;
      } else {
        // CMC logic (butuh key)
        console.log(chalk.yellow('CMC belum diimplementasikan full'));
        return;
      }

      if (options.json) {
        console.log(JSON.stringify(data, null, 2));
      } else {
        const rows = Object.entries(data).map(([id, price]) => [
          id,
          `$${Object.values(price as any)[0]}`,
        ]);
        console.log(table(rows));
      }
    } catch (err: any) {
      console.error(chalk.red('Error:'), err.message);
    }
  });
