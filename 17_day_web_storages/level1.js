let skills = ['HTML', 'CSS', 'JavaScript', 'Python', 'C++'];
let skillsJSON = JSON.stringify(skills, undefined, 4);
localStorage.setItem('skills', skillsJSON);
console.log(localStorage);
