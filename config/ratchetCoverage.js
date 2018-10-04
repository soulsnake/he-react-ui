const fs = require('fs');
const path = require('path');

const minCoveragePath = path.join(__dirname, '..', 'min-coverage.json');
const outputCoveragePath = path.join(
  __dirname,
  '..',
  'coverage',
  'coverage-summary.json',
);

const OK = 0;
const ERROR = 1;

function print(text) {
  // eslint-disable-next-line no-console
  console.log(text);
}

function checkCoverage() {
  let coverageSummary;
  try {
    coverageSummary = JSON.parse(
      fs.readFileSync(outputCoveragePath).toString(),
    );
  } catch (err) {
    print(
      'Could not load a valid JSON summary from coverage/coverage-summary.json',
    );
    return ERROR;
  }

  const currentCoverage = coverageSummary.total.lines;

  let minCoverage;

  try {
    minCoverage = JSON.parse(fs.readFileSync(minCoveragePath).toString());
  } catch (err) {
    minCoverage = currentCoverage;
  }

  const maxUntestedLines = minCoverage.total - minCoverage.covered;
  const currentUntestedLines = currentCoverage.total - currentCoverage.covered;

  const change = maxUntestedLines - currentUntestedLines;

  function format(number) {
    return `${number} ${number === 1 ? 'line' : 'lines'}`;
  }

  if (change < 0) {
    print(`⚠️  Test coverage decreased by ${format(-change)}.`);
    return ERROR;
  }
  if (change === 0) {
    print('Test coverage stayed exactly the same. Weird. ¯\\_(ツ)_/¯');
  } else {
    print(`✨  Test coverage increased by ${format(change)}! Nice.`);
  }

  fs.writeFileSync(minCoveragePath, JSON.stringify(currentCoverage), 'utf8');
  return OK;
}

process.exit(checkCoverage());
