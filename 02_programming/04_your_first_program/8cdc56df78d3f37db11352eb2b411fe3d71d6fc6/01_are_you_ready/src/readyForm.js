const readyForm = (reader) => {
// Code here

  reader.question ("Are you ready for today??!" ,(callback) => {
 
    console.log(`hello ${callback}!`);
    reader.close();

  });  

};



// Leave line below for tests to work
module.exports = readyForm;