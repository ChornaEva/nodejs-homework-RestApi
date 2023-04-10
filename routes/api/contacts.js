const express = require("express");

const ctrl = require("../../controllers/contacts");

const router = express.Router();

const { validateBody } = require("../../utils");
const { schemas } = require("../../models/contact");

router.get("/", ctrl.getAllContacts);

router.get("/:contactId", ctrl.deletContactById);

router.post("/", validateBody(schemas.addSchema), ctrl.addContact);

router.delete("/:contactId", ctrl.deletContactById);

router.patch(
  "/:contactId/favorite",
  validateBody(schemas.updateFavoriteSchema),
  ctrl.udateStatusContact
);

router.put(
  "/:contactId",
  validateBody(schemas.addSchema),
  ctrl.updateContactById
);

module.exports = router;
