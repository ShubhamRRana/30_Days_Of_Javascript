const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

// export { webTechs };

let a = console.log(webTechs.includes("Sass"));
if (a == false) console.log("Sass is a CSS preprocess");
else webTechs.push("Sass");
console.log(webTechs);
