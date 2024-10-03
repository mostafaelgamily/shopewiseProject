const maxCharacters = (text, maxLength) => {
  if (!text || text.length <= maxLength) {
    return text; // Return the original text if it's within the limit
  }

  return `${text.slice(0, maxLength)}...`; // Truncate and append ellipsis
};

export default maxCharacters;

/**
 * Truncates a string to a specified number of characters and adds ellipsis (...) if the string exceeds the limit.
 *
 * @param {string} text - The text to be truncated.
 * @param {number} maxLength - The maximum number of characters allowed before truncating.
 * @returns {string} - The truncated text with ellipsis if applicable.
 */
