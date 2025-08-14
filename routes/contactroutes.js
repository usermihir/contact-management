const { getcontacts,
        createcontacts,
        getcontact,
        updatecontact,
        deletecontact
 } = require('../controllers/contactcontroller');
const express = require('express');
const validatetoken = require('../middlewares/validatetokenhandler');
const router = express.Router();

router.use(validatetoken)
// router.get("/",getcontacts);
// router.post("/",createcontacts);

router.route("/")
            .get(getcontacts)
            .post(createcontacts)

// router.get("/:id",getcontact);
// router.put("/:id",updatecontact);
// router.delete("/:id",deletecontact);

router.route("/:id")
            .get(getcontact)
            .put(updatecontact)
            .delete(deletecontact)


module.exports = router;