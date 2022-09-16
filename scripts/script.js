// Set the year for copyright
document.getElementById("year").innerHTML = new Date().getFullYear()


//Set the date when last updated
let oLastModif = new Date(document.lastModified);

const month = oLastModif.getMonth() + 1;
const hours = oLastModif.getHours();
const minutes = oLastModif.getMinutes();
const seconds = oLastModif.getSeconds();

const lastDate = month + "/" + oLastModif.getDate() + "/" + oLastModif.getFullYear() + " " + hours + ":" + minutes + ":" + seconds;
document.getElementById("updated").innerHTML  = lastDate;