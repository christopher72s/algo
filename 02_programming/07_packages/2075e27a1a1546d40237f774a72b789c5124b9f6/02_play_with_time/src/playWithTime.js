import moment from "moment" ;


function formatDate (datecomplete) {

  return moment(datecomplete).format ("dddd","MMM","YY");

};

function yearsSinceDate (anne) {

  return moment(anne).formatDate ("20000531", "YYYYMMDD").fromNow();

};


function getDayFromDate (semaine) {

  return moment(semaine).format ("dddd");

};






export {formatDate, yearsSinceDate ,getDayFromDate};


