import { program } from 'commander';
import { execSync } from 'child_process';
import chalk from 'chalk';

program
  .command('bankr <prompt...>')
  .description('Jalankan perintah natural language via Bankr CLI')
  .action((prompt) => {
    const fullPrompt = prompt.join(' ');
    try {
      console.log(chalk.blue(`🚀 Menjalankan Bankr: "${fullPrompt}"`));
      execSync(`bankr ${fullPrompt}`, { stdio: 'inherit' });
    } catch (err) {
      console.error(chalk.red('Bankr CLI error (pastikan sudah install: npm i -g @bankr/cli)'));
    }
  });
