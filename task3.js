//const because developers array will not be reassigned
 const developers = [
    { name:"Ahmed", role:"Developer" },
    { name: "Zara", role:"Developer" },
];
//const because designers array will not be reassigned
const designers = [
    { name: "Nida", role: "Designer" },
    { name: "Omar", role: "Designer" },
];
//const because team array is created once and not reassigned 
const team = [...developers, ...designers];
//Arrow function is used because the task says not to use the function keyword
team.forEach(member => {
    console.log(`${member .role}:${member .name}`);
});