/**
 * Returns the current date formatted as DD/MM/YYYY.
 */
function getCurrentDate() {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

/**
 * Returns a future date based on the number of days added.
 */
function getFutureDate(daysToAdd) {
  const date = new Date();
  date.setDate(date.getDate() + daysToAdd);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

module.exports = {
  getCurrentDate,
  getFutureDate
};
