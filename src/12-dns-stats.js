/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let arr = domains.map((e) => e.split('.').map((el) => '.'.concat(el)));
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr[i].length - 1; j > 0; j--) {
      arr[i][j - 1] = arr[i][j].concat(arr[i][j - 1]);
    }
  }
  arr = arr.flat();
  const obj = [...new Set(arr)].reduce((o, key) => ({ ...o, [key]: 0 }), { });
  arr.forEach((e) => obj[e]++);
  return obj;
}

module.exports = getDNSStats;
