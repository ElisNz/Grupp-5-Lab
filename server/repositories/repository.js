const customerModel = require("../models/customerModel");
const db_context = require("../db_context");

// async function getAllCustomers() {

//     let customers = [];

//     let data = await db_context.selectAllCustomers()

//     data.forEach(customer => {
//         customers.push(new customerModel(customer.first_name, customer.email))
//     });

//     return customers;
// };

async function getAllCustomers() {

    let customers = [];

    let data = await db_context.selectAllCustomers()

    data.forEach(customer => {
        customers.push(new customerModel(customer.first_name, customer.email))
    });

    return customers;
};

async function editCustomer(id, email) {

    db_context.updateCustomerEmailById(id, email);
};

module.exports = {
    getAllCustomers,
    editCustomer
}