const fs = require('fs');
const path = require('path');

/**
 * Reads and parses a JSON file from the given file path.
 */
function readJsonFile(relativeFilePath) {
  const absolutePath = path.resolve(__dirname, '..', relativeFilePath);
  if (!fs.existsSync(absolutePath)) {
    throw new Error(`File not found: ${absolutePath}`);
  }
  const data = fs.readFileSync(absolutePath, 'utf-8');
  return JSON.parse(data);
}

/**
 * Writes data to a JSON file.
 */
function writeJsonFile(relativeFilePath, data) {
  const absolutePath = path.resolve(__dirname, '..', relativeFilePath);
  fs.writeFileSync(absolutePath, JSON.stringify(data, null, 2), 'utf-8');
}

module.exports = {
  readJsonFile,
  writeJsonFile
};
