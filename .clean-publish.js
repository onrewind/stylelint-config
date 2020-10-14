// CLEAN BEFORE PUBLISH
module.exports = {
  // Fields in package.json to remove
  fields: ['scripts', 'husky', 'lint-staged'],
  // Files to remove
  files: [
    '.clean-publish.js',
    '.gitignore',
    '.npmrc',
    '.prettierrc',
    'npm-shrinkwrap.json',
    'CHANGELOG.md',
  ],
};
