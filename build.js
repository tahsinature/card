'use strict';

const fs = require('fs');
const boxen = require('boxen');
const chalk = require('chalk').default;
const path = require('path');
const data = require('./data.json');

// ASCII art name banner
const banner = [
  ' _____ _   _  _ ___ ___ _  _ ',
  '|_   _/_\\ | || / __|_ _| \\| |',
  '  | |/ _ \\| __ \\__ \\| || .` |',
  '  |_/_/ \\_\\_||_|___/___|_|\\_|',
].map(line => chalk.cyan.bold(line)).join('\n');

const separator = chalk.gray('─'.repeat(38));

const tagline = chalk.italic.magenta(`  "${data.tagline}"`);

const workLine = chalk.white.bold('  Work  ') + chalk.white(`${data.work.position} at `) + chalk.yellow.bold(data.work.at);

const skillsLine = chalk.white.bold('  Tech  ') + data.skills.map(s => chalk.bgMagenta.white.bold(` ${s} `)).join(' ');

const longestPlatform = data.links.reduce((max, l) => Math.max(max, l.platform.length), 0);

const templateParse = str => {
  const match = str.match(/\{(\w+)\}/);
  if (!match) return chalk.cyan(str);
  const word = match[1];
  return chalk.gray(str.replace(/\{\w+\}/, chalk.cyan.bold(word)));
};

const links = data.links.map(link => {
  const padding = ' '.repeat(longestPlatform - link.platform.length);
  const icon = {
    GitHub: chalk.white('  gh'),
    LinkedIn: chalk.blue('  in'),
    Twitter: chalk.cyan('  tw'),
    Web: chalk.green('  <>'),
  }[link.platform] || chalk.white('  --');
  return `${icon}  ${padding}${chalk.white.bold(link.platform)}  ${templateParse(link.url)}`;
}).join('\n');

const tip = chalk.gray('  Card? ') + chalk.green.bold(`$ ${data.tip}`);

const output = [
  '',
  banner,
  '',
  tagline,
  '',
  separator,
  '',
  workLine,
  '',
  skillsLine,
  '',
  separator,
  '',
  links,
  '',
  separator,
  '',
  tip,
  '',
].join('\n');

const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'double',
  borderColor: 'cyan',
};

fs.writeFileSync(path.join(__dirname, 'bin/output'), boxen(output, options));
