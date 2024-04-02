// const data = [
// {
//     names: 'Tomas',
//     age: 20,
//     marks: [6, 6, 5, 7]
// },
// {
//     names: 'Ona',
//     age: 25,
//     marks: [8, 9, 9]
// },
// ,{
//     names: 'Peter',
//     age: 22,
//     marks: [9, 9, 10, 11]
// }
// ,{
//     names: 'Darius',
//     age: 28,
//     marks: [10, 10, 12]
// },
// {
//     names: 'Maryte',
//     age: 21,
//     marks: [7, 10]
// }
// ]
// export default  data;

// app.get('/api/students', (req, res) => {
//     return res.send(JSON.stringify({
//         s1: `names - ${data[0].names}, age - ${data[0].age}, marks - ${data[0].marks.join(', ')}`,
//         s2: `names - ${data[1].names}, age - ${data[1].age}, marks - ${data[1].marks.join(', ')}`,
//         // s3: `names - ${data[2].names}, age - ${data[2].age}, marks - ${data[2].marks.join(', ')}`,
//         // s4: `names - ${data[3].names}, age - ${data[3].age}, marks - ${data[3].marks.join(', ')}`,
//         // s5: `names - ${data[4].names}, age - ${data[4].age}, marks - ${data.marks.join(', ')}`,
//     }));

//     if (order === 0) {
//         fetch('http://localhost:4836/api/students')
//           .then(res => res.json())
//           .then(data => {
//             setAnswer(JSON.stringify(data.s1));
//             setOrder(1); 
//           })
//           .catch(e => console.error(e));
//       }else if (order === 1) {
//         fetch('http://localhost:4836/api/students')
//           .then(res => res.json())
//           .then(data => {
//             setAnswer(JSON.stringify(data.s2));
//             setOrder(0); 
//           })
          
//           .catch(e => console.error(e));
//       }