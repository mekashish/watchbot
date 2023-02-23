const express = require("express");
const {
    getclientDetails,
    registerClient,
} = require("../controllers/ClientFormController");

const router = express.Router();

router.route("/register/:id").get(getclientDetails);
router.route("/register/client").post(registerClient);

module.exports = router;
