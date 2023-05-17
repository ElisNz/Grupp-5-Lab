const pgp = require('pg-promise')(/* options */)
const db = pgp('postgres://postgres:Temple1!=Temple2@localhost:5432/dvdrental')

async function selectAllCustomers() {

  let data = await db.many("SELECT * FROM customer")

  return data;
}

async function updateCustomerEmailById(id, email) {

  await db.none(`UPDATE customer SET email = '${email}' WHERE customer_id = ${id}` );
}

async function selectAllCities() {

  let data = await db.many("SELECT * FROM city")

  return data;
}

async function insertCity(city, country_id) {

  let result = await db.none(`INSERT INTO city (city, country_id) VALUES('${city}', ${country_id})`);

  return result;
}

async function deleteCity(city, country_id) {

  let result = await db.none(`DELETE FROM city WHERE city = '${city}'`);

  return result;
}

module.exports = {
    selectAllCustomers,
    selectAllCities,
    insertCity,
    deleteCity,
    updateCustomerEmailById
}
