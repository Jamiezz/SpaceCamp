// backend/routes/api/index.js
const router = require('express').Router();
// GET /api/set-token-cookie
const asyncHandler = require('express-async-handler');
const { User } = require('../../db/models');
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const { requireAuth, setTokenCookie, restoreUser } = require('../../utils/auth.js');


router.use('/session', sessionRouter);

router.use('/users', usersRouter);
// backend/routes/api/index.js


router.post('/test', function(req, res) {
  res.json({ requestBody: req.body });
});


router.get('/set-token-cookie', asyncHandler(async (req, res) => {
  const user = await User.findOne({
      where: {
        username: 'Demo-lition'
      },
    })
  setTokenCookie(res, user);
  return res.json({ user });
}));



router.get(
  '/restore-user',
  restoreUser,
  (req, res) => {
    return res.json(req.user);
  }
);

// backend/routes/api/index.js




// GET /api/require-auth

router.get(
  '/require-auth',
  requireAuth,
  (req, res) => {
    return res.json(req.user);
  }
);

// ...




module.exports = router