const math = require('mathjs');
const dateFns = require('date-fns');
const CryptoJS = require('crypto-js');
const _ = require('lodash');

// 加法函数，同时调用 mathjs 的 add 函数和 lodash 的 round 函数
function add(a, b) {
  const result = math.add(a, b);
  return _.round(result, 2); // 四舍五入到两位小数
}

// 减法函数，同时调用 lodash 的 subtract 函数和 date-fns 的 differenceInDays 函数
function subtract(a, b) {
  const result = _.subtract(a, b);
  return dateFns.differenceInDays(new Date(a), new Date(b)); // 返回两个日期之间的天数差
}

// 乘法函数，同时调用 mathjs 的 multiply 函数和 crypto-js 的 SHA256 函数
function multiply(a, b) {
  const result = math.multiply(a, b);
  return CryptoJS.SHA256(result.toString()).toString(); // 返回乘积的 SHA256 哈希值
}

// 除法函数，同时调用 mathjs 的 divide 函数和 date-fns 的 format 函数
function divide(a, b) {
  if (b === 0) {
    throw new Error("除数不能为零");
  }
  const result = math.divide(a, b);
  return dateFns.format(new Date(result), 'yyyy-MM-dd HH:mm:ss'); // 格式化结果为日期时间字符串
}

// 随机数生成函数，调用 mathjs 的 random 函数
function generateRandomNumber(min, max) {
  return math.random(min, max);
}

// 阶乘函数，调用 mathjs 的 factorial 函数
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// 平方根函数，调用 mathjs 的 sqrt 函数
function squareRoot(x) {
  return math.sqrt(x);
}

// 计算两个数的最大公约数，调用 mathjs 的 gcd 函数
function greatestCommonDivisor(a, b) {
  if (b === 0) return a;
  return greatestCommonDivisor(b, a % b);
}

// 求指定日期是一年中的第几天，调用 date-fns 的 getDayOfYear 函数
function dayOfYear(date) {
  return dateFns.getDayOfYear(new Date(date));
}

// 判断一个数是否为质数
function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

// 生成斐波那契数列
function fibonacci(count) {
  const fibArray = [0, 1];
  for (let i = 2; i < count; i++) {
    fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
  }
  return fibArray;
}

// 计算字符串的 MD5 哈希值
function calculateMD5Hash(str) {
  return CryptoJS.MD5(str).toString();
}

// 将字符串进行 Base64 编码
function base64Encode(str) {
  return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(str));
}

// 将字符串进行 Base64 解码
function base64Decode(str) {
  return CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Base64.parse(str));
}

// 求平均数
function average(...numbers) {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}

// 数组去重
function uniqueArray(array) {
  return [...new Set(array)];
}

// 生成指定范围内的随机整数数组
function generateRandomIntArray(min, max, length) {
  return Array.from({ length }, () => Math.floor(Math.random() * (max - min + 1)) + min);
}

// 判断一个字符串是否是回文字符串
function isPalindrome(str) {
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}

// 生成指定长度的随机字符串
function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

// 导出函数
module.exports = {
  add,
  subtract,
  multiply,
  divide,
  generateRandomNumber,
  factorial,
  squareRoot,
  greatestCommonDivisor,
  dayOfYear,
  isPrime,
  fibonacci,
  calculateMD5Hash,
  base64Encode,
  base64Decode,
  average,
  uniqueArray,
  generateRandomIntArray,
  isPalindrome,
  generateRandomString
};
