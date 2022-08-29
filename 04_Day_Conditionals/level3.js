month = () => {
  let month = prompt("Enter a month");
  let m = month.toLowerCase();
  if (
    m == "january" ||
    m == "march" ||
    m == "may" ||
    m == "july" ||
    m == "august" ||
    m == "october" ||
    m == "december"
  )
    alert(`${month} has 31 days`);
  else if (m == "april" || m == "june" || m == "september" || m == "november")
    alert(`${month} has 30 days`);
  else if (m == "february") alert(`${month} has 28 days`);
  else alert("Invlid input");
};
