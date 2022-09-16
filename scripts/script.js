
let oLastModif = new Date(document.lastModified);
// console.log(oLastModif.get);

const month = oLastModif.getMonth() + 1;
const hours = oLastModif.getHours();
const minutes = oLastModif.getMinutes();
const seconds = oLastModif.getSeconds();

const lastDate = month + "/" + oLastModif.getDate() + "/" + oLastModif.getFullYear() + " " + hours + ":" + minutes + ":" + seconds;
document.getElementById("updated").innerHTML  = lastDate;