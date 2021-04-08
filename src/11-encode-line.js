/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = [...str];
  const answer = [];
  let current = [0, ''];
  arr.push('');
  arr.forEach((e) => {
    if (e !== current[1]) {
      answer.push((current[0] ? current[0] + 1 : '') + current[1]);
      current = [0, e];
    } else current[0]++;
  });
  return answer.join('');
}

module.exports = encodeLine;
