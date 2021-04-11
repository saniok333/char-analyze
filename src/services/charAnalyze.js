export const analyze = (str, num) => {
   const res = {};
   for (let char of str) {
      res[char] = res.hasOwnProperty(char) ? res[char] + 1 : 1;
   }
   return Object.values(res).includes(num);
};