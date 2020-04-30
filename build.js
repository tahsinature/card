'use strict';

// Pull in our modules
const fs = require('fs');
const boxen = require('boxen');
const chalk = require('chalk').default;
const path = require('path');
const data = require('./data.json');

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
};

const longestWord = data.links.reduce((pv, cv) => (pv > cv.platform.length ? pv : cv.platform.length), 0);

const templateParse = str => {
  let templatted = str.match(/{\w+}/);
  if (!templatted) return chalk.cyan(str);
  else templatted = templatted[0];
  const word = templatted.slice(1, templatted.length - 1);
  const result = chalk.gray(str.replace(/{\w+}/, chalk.blue(word)));
  return result;
};

const spacify = word => {
  return `${Array(longestWord - word.length)
    .fill(' ')
    .join('')}${chalk.white.bold(word)}${word ? chalk.white.bold(':') : ' '}  `;
};

const links = data.links.reduce((pv, cv, i) => {
  return pv + `${spacify(cv.platform)}${templateParse(cv.url)}${i === data.links.length - 1 ? '' : '\n'}`;
}, '');

const output = `${spacify('') + data.name}\n\n${spacify('Work')}${chalk.white(`${data.work.position} at ${data.work.at}`)}\n\n${links}`;

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)));
