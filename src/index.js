import Commander from 'commander';
import { version } from '../package';

Commander
  .version(version);

Commander
  .command('echo <value>')
  .description('Echos something')
  .action((value, options) => {
    console.log(value);
  });
//  .command("echo <value>", "Echo back whatever value is passed.")
//  .command("component <name>", "Creates an Angular component.")
//  .command("factory <name>", "Creates an Angular factory.")

Commander
  .parse(process.argv);