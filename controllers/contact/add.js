const { Contact } = require("../../models/contact");

const add = async (req, res) => {
  console.log(req.user);
  // const { _id: owner } = req.user;
  // const data = await Contact.create(req.body);
  // res.status(201).json(data);
};

module.exports = add;
