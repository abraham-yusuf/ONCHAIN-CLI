#!/usr/bin/env node

import { program } from 'commander';
import dotenv from 'dotenv';
import chalk from 'chalk';

dotenv.config();

console.log(chalk.cyan.bold('🔗 ONCHAIN CLI - Multichain On-Chain Tool'));

program
  .name('onchain')
  .description('CLI untuk data on-chain, price, balance, explorer & integrasi Bankr.bot')
  .version('0.1.0')
  .option('--json', 'Output sebagai JSON (untuk AI Agent)');

// Load semua commands
import('./commands/price');
import('./commands/balance');
import('./commands/tx');
import('./commands/bankr');
import('./commands/config');

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
