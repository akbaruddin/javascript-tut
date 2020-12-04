// Input: [1,2,3] -> sum-> Output: 6
// write function here
function sum() {
  return arr.reduce((total, num) => {
    return total + num;
  }, 0);
}


/**
 Input: [
   { name: 'Tyler', age: 28},
   { name: 'Mikenzi', age: 26},
   { name: 'Blaine', age: 30 }
  ] -> Just the names -> Output: ['Tyler', 'Mikenzi', 'Blaine']
*/
// function
const names = lists.map(list => list.name);


/**

Input: [
 { name: 'Tyler', age: 28},
 { name: 'Mikenzi', age: 26},
 { name: 'Blaine', age: 30 }
] -> Length and age count -> Output: { users: 3, ageTotal: 84}

*/
function getUserData (users) {
  return users.reduce((data, user) => {
    data.users += 1
    data.ageTotal += user.age

    return data
  }, { users: 0, ageTotal: 0 })
}

const users = [
 { name: 'Tyler', age: 28},
 { name: 'Mikenzi', age: 26},
 { name: 'Blaine', age: 30 }
]

getUserData(users)
