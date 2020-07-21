const express = require("express");
// 컨트롤러에 작성한, api 함수를 가져온다.
const {
  getAllContacts,
  createContact,
  updateContact,
  deleteContact,
} = require("../controllers/contacts");

const router = express.Router();

router
  .route("/")
  .get(getAllContacts)
  .post(createContact)
  .put(updateContact)
  .delete(deleteContact);

module.exports = router;
