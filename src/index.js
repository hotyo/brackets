module.exports = function check(str, bracketsConfig) {
  let newStr = str;
  for (let i = 0; i < bracketsConfig.length; i++) {
    let pair = bracketsConfig[i].map(element => !isNaN(+element) ? element : `\\${element}`);
    newStr = str.replace(new RegExp(pair.join(''), 'g'), '');
    if (newStr !== str)
      break;
  }
  if (!newStr.length)
    return true;
  else {
    if (newStr === str)
      return false;
    else
      return check(newStr, bracketsConfig)
  }
}
