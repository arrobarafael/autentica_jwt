const { index } = require('./UserController');

module.exports = {
  async index(request, response) {
    return response.json({ ok: true, id: request.userId });
  },
};
