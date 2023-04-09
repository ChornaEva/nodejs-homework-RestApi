const contacts = require("../models/contacts");
const { ctrlWrapper } = require("../utils");
const { HttpError } = require("../helpers");

const getAllContacts = async (req, res) => {
  const allContacts = await contacts.listContacts();
  res.json(allContacts);
};

const getContactsById = async (req, res) => {
  const { contactId } = req.params;
  const contactById = await contacts.getContactById(contactId);
  if (!contactById) {
    throw HttpError(404, `Contact with id: ${contactId} not found`);
  }
  res.json(contactById);
};

const addContact = async (req, res) => {
  const addedContact = await contacts.addContact(req.body);
  res.status(201).json(addedContact);
};

const deletContactById = async (req, res) => {
  const { contactId } = req.params;
  const deletedContact = await contacts.removeContact(contactId);
  if (!deletedContact) {
    throw HttpError(404, `Contact with id: ${contactId} not found`);
  }
  res.json({ message: "contact deleted" });
};
const updateContactById = async (req, res) => {
  const { contactId } = req.params;
  const updatedContact = await contacts.updateContact(contactId, req.body);
  if (!updatedContact) {
    throw HttpError(404, `Contact with id: ${contactId} not found`);
  }
  res.json(updatedContact);
};

module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
  getContactsById: ctrlWrapper(getContactsById),
  addContact: ctrlWrapper(addContact),
  deletContactById: ctrlWrapper(deletContactById),
  updateContactById: ctrlWrapper(updateContactById),
};
