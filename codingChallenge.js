// CodeSmith Challenge 
// 06/23/2018

var firstName = "Atahualpa";
var lastName = " Pena";
var fullName = firstName + ' ' + lastName;
var github = "atahualpapena";
var email = "atahualpapena04@gmail.com";
var linkedIn = "https://www.linkedin.com/in/atahualpa-pena-219a2a165/";
var phone = "3476240144";
var city = "Jackson Heights";
var campus = "NY";

var contactInfo = [
  fullName,
  github,
  email,
  linkedIn,
  phone,
  city,
  campus
];

var education = [

  "UNIBE",
  "Computer Science: Software Development",
  2017
];

function createApp(contactInfo, education) {
  const application = {};

  application.contactInfo = contactInfo;
  application.education = education;

  return application;

}

function timesBy(n) {
  let o = n;
  const times = function (array) {
    let table = [];
    for (let i = 0; i < array.length; i += 1) {
      table.push(o * array[i]);
    }

    return table;
  }

  return times;
}



