/**
 * @description Truncates string to a given length
 * @param str
 * @param len
 * @returns String
 */
function truncateStr(str: string, len: number): string {
  if (!str) return '';
  else if (str.length <= len) return str;
  else return str.slice(0, len) + '...';
}

/**
 * @description Adds highlight to found matches in string
 * @param query
 * @param str
 * @returns String
 */
function addHighlight(query: string, str: string): any {
  if (!query || !str) return '';

  let regex = new RegExp(`\\b${query}\\b`, 'gi');
  const newHighlightedStr = str.replace(regex, `<mark>${query}</mark>`);
  return newHighlightedStr;
}

export { truncateStr, addHighlight };
