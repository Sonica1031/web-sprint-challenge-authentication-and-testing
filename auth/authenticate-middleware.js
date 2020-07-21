function protect(req, res, next) {
  if (req.session && req.session.name) {
    next();
  } else {
    res.status(401).json({ message: 'you shall not pass!!' });
  }
}

module.exports = (req, res, next) => {
  protect,
  res.status(401).json({ you: 'shall not pass!' });
};
