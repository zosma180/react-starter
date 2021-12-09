module.exports = {
  path: '/login',
  method: 'post',
  callback: (req, res) => {
    setTimeout(() => {
      res.json({
        email: req.body.email,
        firstName: 'Sub',
        lastName: 'Zero',
      });
    }, 2000);
  },
};
