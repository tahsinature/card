'use strict';

// Pull in our modules
const chalk = require('chalk');
const boxen = require('boxen');
const fs = require('fs');
const path = require('path');

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
};

// Text + chalk definitions
const data = {
  name: chalk.white('              Mohammad Tahsin'),
  work: chalk.white('Software Developer at HaloJasa'),
  // opensource: chalk.white("Node.js Community Committee ") + chalk.green("⬢"),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('t4h51n'),
  facebook: chalk.gray('https://facebook.com/') + chalk.cyan('t4h51n'),
  instagram: chalk.gray('https://instagram.com/') + chalk.cyan('t4h51n'),
  npm: chalk.gray('https://npmjs.com/') + chalk.red('~tahsin'),
  github: chalk.gray('https://github.com/') + chalk.green('tahsinature'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('t4h51n'),
  web: chalk.cyan('https://tahsin.codes'),
  npx: chalk.red('npx') + ' ' + chalk.white('@bnb/card  (via GitHub Package Registry)'),
  labelWork: chalk.white.bold('       Work:'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  labelnpm: chalk.white.bold('        npm:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelFacebook: chalk.white.bold('   Facebook:'),
  labelInstagram: chalk.white.bold('  Instagram:'),
  labelWeb: chalk.white.bold('        Web:'),
  labelCard: chalk.white.bold('       Card:'),
};

// Actual strings we're going to output
const newline = '\n';
const heading = `${data.name}`;
const working = `${data.labelWork}  ${data.work}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const facebooking = `${data.labelFacebook}  ${data.facebook}`;
const instagramming = `${data.labelInstagram}  ${data.instagram}`;
const npming = `${data.labelnpm}  ${data.npm}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output =
  heading + // data.name + data.handle
  newline +
  newline + // Add one whole blank line
  working +
  newline + // data.labelWork + data.work
  newline + // data.labelOpenSource + data.opensource
  facebooking +
  newline + // data.labelFacebook + data.facebook
  instagramming +
  newline + // data.labelFacebook + data.facebook
  twittering +
  newline + // data.labelTwitter + data.twitter
  linkedining +
  newline + // data.labelnpm + data.npm
  githubing +
  newline + // data.labelGitHub + data.github
  npming +
  newline + // data.labelLinkedIn + data.linkedin
  webing;

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)));
