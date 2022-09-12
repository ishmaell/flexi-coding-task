/**
 * Truncate string to a given length
 */
function truncateStr(str: string, len: number): string {
  if (!str) return '';
  else if (str.length <= len) return str;
  else return str.slice(0, len) + '...';
}

export { truncateStr };
