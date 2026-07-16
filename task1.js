 const students = [
    {name: "Ali", marks: 75 },
    {name: "Sara", marks: 45 },
    {name: "Usman", marks: 88},
    {name: "Hina", marks: 60},
    {name: "Bilal", marks: 30},
];
students.forEach(({name,
    marks }) => {
        console.log(name, marks);
})
const gradedStudents = students.map(({name, marks }) =>
{
    let grade;
    if (marks >= 80) {
        grade = "A";
    } else if (marks >= 60) {
        grade = "B";
    } else {
        grade = "C";
    }
    return { name, marks, grade };
});
console.log(gradedStudents);
const passedStudents = gradedStudents.filter(student => student.marks >= 50);
console.log(passedStudents);
passedStudents.forEach(({name,marks,grade}) => {
    console.log(`${name} scored ${marks} and got grade ${grade}`);
});




