/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const set = [...new Set(s1 > s2 ? s2 : s1)].sort();
  let answer = 0;
  const temp = [];
  let reg;
  for (let i = 0; i < set.length; i++) {
    reg = new RegExp(set[i], 'g');
    temp[0] = s1.match(reg) !== null ? s1.match(reg).length : 0;
    temp[1] = s2.match(reg) !== null ? s2.match(reg).length : 0;
    answer += Math.min(...temp);
  }

  return answer;
}

module.exports = getCommonCharacterCount;
