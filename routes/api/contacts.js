const express = require("express");
const {
  getAll,
  getById,
  add,
  deleteById,
  updateById,
  updateFavorite,
} = require("../../controllers/contact");
const router = express.Router();

const { validateBody, isValidId, authenticate } = require("../../middlewares");

const { schemas } = require("../../models/contact");

router.get("/", authenticate, getAll);

router.get("/:contactId", authenticate, isValidId, getById);

router.post("/", authenticate, validateBody(schemas.contactsSchemas), add);

router.delete("/:contactId", authenticate, isValidId, deleteById);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(schemas.contactsSchemas),
  updateById
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  updateFavorite
);

module.exports = router;
