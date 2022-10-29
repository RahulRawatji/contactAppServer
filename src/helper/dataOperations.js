const fs = require('fs');

const fetchData = () => {
  const data = fs.readFileSync('../server/Database/contacts.json').toString();
  const { contacts } = JSON.parse(data);
  
  return contacts;
}

module.exports = {
  fetchData,

}
