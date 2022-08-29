res = () => {
  let grade = prompt("Enter marks");
  let g = parseInt(grade);
  if (g >= 80 || g <= 100) alert("A");
  else if (g >= 70 || g <= 89) alert("B");
  else if (g >= 60 || g <= 69) alert("C");
  else if (g >= 50 || g <= 59) alert("D");
  else if (g >= 0 || g <= 49) alert("F");
  else alert("Invalid number");
};

season = () => {
  let s = prompt("Enter month ");
  let se = s.toLowerCase();
  if (se == "september" || se == "october" || se == "november")
    alert("The season is Autum");
  else if (se == "december" || se == "january" || se == "february")
    alert("The season is Winter");
  else if (se == "march" || se == "april" || se == "may")
    alert("The season is spring");
  else if (se == "june" || se == "july" || se == "august")
    alert("The season is summer");
  else alert("Invalid Input");
};

weekend = () => {
  let d = prompt("What is the day today?");
  let day = d.toLowerCase();
  if (
    day == "monday" ||
    day == "tuesday" ||
    day == "wednesday" ||
    day == "thursday" ||
    day == "friday"
  )
    alert(`${d} is a working day`);
  else if (day == "saturday" || day == "sunday") alert(`${d} is a weekend`);
  else alert("Invalid input");
};
