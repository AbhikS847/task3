var myObject = {
    "name": "jon",
    "gender": "male",
    "registered": "yes"
};
delete myObject.gender;

console.log(myObject);

delete myObject.gender;
delete myObject['gender'];
var prop = "gender";
delete myObject[prop];

function removeProperty(obj, prop) {
  
    if (obj.hasOwnProperty(prop)) { 
      delete obj[prop];
      return true;
    }
  
    return false;
  }

  function removeProperty(obj, prop) {
    if (obj[prop] != undefined) {
        delete obj[prop];
        return true;
    } else {
        return false;
    }
    return null;
    }