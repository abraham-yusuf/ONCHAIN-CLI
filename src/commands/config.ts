import { program } from 'commander';
import Conf from 'conf';
import chalk from 'chalk';

const config = new Conf({ projectName: 'onchain-cli' });

program
  .command('config')
  .description('Kelola konfigurasi')
  .option('--set <key> <value>')
  .action((options) => {
    if (options.set) {
      const [key, value] = options.set.split('=');
      config.set(key, value);
      console.log(chalk.green(`✅ ${key} disimpan`));
    } else {
      console.log(config.store);
    }
  });
