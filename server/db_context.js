const mongoose = require('mongoose');

const uri ='mongodb+srv://enz:MV6qCi73W7sQ7sTG@cluster0.ohmduf8.mongodb.net/mydatabase?retryWrites=true&w=majority';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to the MongoDB database');
  })
  .catch((error) => {
    console.error('Error connecting to the MongoDB database:', error);
  });

async function updateCustomerEmailById(id, email) {
  // Implement your update logic here
}

async function insertLocation() {
  // Implement your insert logic here
}

async function deleteLocation() {
  // Implement your delete logic here
}

module.exports = {
  updateCustomerEmailById,
  insertLocation,
  deleteLocation
};
