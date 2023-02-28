const express = require("express");
const {
  getAll,
  getById,
  add,
  deleteById,
  updateById,
  updateFavorite,
} = require("../../controllers/contactsControllers");
const router = express.Router();

const { validateBody } = require("../../middlewares/validateBody");
const { isValidId } = require("../../middlewares/isValidId");

const { schemas } = require("../../models/contact");

router.get("/", getAll);

router.get("/:contactId", isValidId, getById);

router.post("/", validateBody(schemas.contactsSchemas), add);

router.delete("/:contactId", isValidId, deleteById);

router.put(
  "/:contactId",
  isValidId,
  validateBody(schemas.contactsSchemas),
  updateById
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  updateFavorite
);

module.exports = router;
