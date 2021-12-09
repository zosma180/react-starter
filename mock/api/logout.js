module.exports = {
  path: '/logout',
  method: 'post',
  callback: (req, res) => {
    res.sendStatus(200);
  },
};
