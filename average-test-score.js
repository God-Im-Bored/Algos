/*

Average test score from result array with varying group sizes

program was tested on several test case and each test case has the following results.."OK", "Wrong answer", "TimeOut", "Runtime error"

test cases were organized into groups numbered by consecutive natural numbers - program scored points for a group only when the result of every test case in the group was "OK" 

 for instance if test case names are test1, test2a, test2b, test2c, test3, test4. In this case test2a, test2b, test2c all form one group and must all score OK to receive a collective point

 Assume integer is within range 1-300 -arrays test and result have the same length -every test case appears just once -test case are ordered by consecutive natural integers from 1. -test cases in groups containing at least two tests are differentiated by a lowercase suffix in alphabetical order from a. -each string in results contains one of "OK", "Wrong answer", "TimeOut", "Runtime error"

 test = ['test1a', 'test2', 'test1b', 'test1c', 'test3']
 result = ['Wrong Answer', 'OK', 'Runtime error', 'OK', 'Time limit exceeded']

*/

T = ["test1a", "test2", "test1b", "test1c", "test3"];
R = ["Wrong Answer", "OK", "Runtime error", "OK", "Time limit exceeded"];

function solution(T, R) {
  const map = {}
  let score = 0,
    groups = {};

  for (let i = 0; i < T.length; i++) {
    let testName = T[i];

    if (!map[testName]) {
      map[testName] = R[i];
    }
    setGroups(testName, groups);
  }

  for (const key in groups) {
    groups[key].names.forEach((test) => {
      if (map[test] === "OK") {
        groups[key].total++;
      }
    });
    if (groups[key].total !== groups[key].names.length) {
      groups[key].total = 0;
    }
    score += groups[key].total;
  }

  console.log("Score -->", score);
  console.log('Groups w Score -->', groups)

  score = (score / Object.keys(groups).length) * 100
  return Math.floor(score)
}






const setGroups = (name, table) => {
  for (let i = 0; i < name.length; i++) {
    const elem = name[i];

    if (Number(elem)) {
      const groupKey = name.slice(0, name.indexOf(elem) + 1);
      if (!table[groupKey]) {
        table[groupKey] = {
          names: [name],
          total: null,
        };
      } else {
        table[groupKey].names.push(name);
      }
    }
  }
  return table;
};

console.log(solution(T, R));
