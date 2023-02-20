const express = require("express");
const {
  getAll,
  getById,
  add,
  deleteById,
  updateById,
} = require("../../controllers/contactsControllers");
const router = express.Router();

const { validateBody } = require("../../middlewares/validateBody");

const { contactsSchemas } = require("../../schemas/contactsSchemas");

router.get("/", getAll);

router.get("/:contactId", getById);

router.post("/", validateBody(contactsSchemas), add);

router.delete("/:contactId", deleteById);

router.put("/:contactId", validateBody(contactsSchemas), updateById);

module.exports = router;
