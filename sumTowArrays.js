module.exports = {
  sumArray: function (a, b) {
    let c = [];
    for (let i = 0; i < Math.max(a.length, b.length); i++) {
      c.push((a[i] || 0) + (b[i] || 0));
    }
    return c;
  },

  mySubstring: function (str, begin, end) {
    let result = '';
    if ((isNaN(end) && end !== undefined) || isNaN(begin)) {
      return '';
    } else if (begin < 0 || end < 0) {
      return '';
    } else if (typeof str !== 'string') {
      return '';
    } else if (begin > str.length || end > str.length) {
      return '';
    } else if (end === undefined) {
      for (let i = begin; i < str.length; i++) {
        result += str[i];
      }
    } else {
      for (let i = begin; i < end; i++) {
        result += str[i];
      }
    }
    return result;
  },
};
