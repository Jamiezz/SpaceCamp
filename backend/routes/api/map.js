const router = require('express').Router();

const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');
router.get(
  '/',
  asyncHandler(async (req, res) => {
    return res.json({
      username: "test"
    })
  })
)

module.exports = router