const { getAllCustomers, editCustomer } = require("../repositories/customerRepository" );

async function get(req, res) {

    let data = await getAllCustomers();

    return res.json(data);
}

async function edit(req, res) {

    await editCustomer(req.body.id, req.body.email);

    return res.json({ message: 'edited' });
}

module.exports = {
    get,
    edit
}

