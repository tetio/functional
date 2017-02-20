let map = (func) => (arr) => arr.map(func);
let filter = (func) => (arr) => arr.filter(func);
let reduce = (func, initial) => (arr) => arr.reduce(func, initial);
let compose = (f, g) => (x) => f(g(x));

let sum = reduce((a, b) => (a+b), 0);
let dividend = (a, b) => (a / b);
let round = (a) => Math.round(a);
let size = (arr) => arr.length;
let avg = (arr) => dividend(sum(arr), size(arr));
let mapProp = (prop) =>  map((item) => item[prop]);
let filterProp = (prop) => (matchVal) => filter((item) => item[prop] === matchVal);
let mapAvg = (func) => compose(round, compose(avg, func));

let mapTotalY = mapProp("totalTimeSpentStudying");
let mapX = mapProp("score");
let filterByX = filterProp("score");
export let getXAvg = mapAvg(mapX);
let filterByXAvg = (result) => compose(filterByX, getXAvg)(result)(result);
export let getYAvgForXAvg = mapAvg(compose(mapTotalY, filterByXAvg));
