const core = require('@actions/core');
const exec = require('@actions/exec');

try {
  await exec.exec('npm run lint:fix');
} catch (error) {
  core.setFailed(
    'The linters are failing. Your code is not formatted to standard and could not be automatically fixed.'
  );
}
