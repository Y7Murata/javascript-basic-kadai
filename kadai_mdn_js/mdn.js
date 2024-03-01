const date = new Date();

const [month, day, year] = [
  date.getMonth()+6,
  date.getDate()+21,
  date.getFullYear()-1,
];

console.log(year + '年' + month +'月' + day + '日');