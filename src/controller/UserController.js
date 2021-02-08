module.exports = {
  async index(request, response) {
    return response.json({ msg: 'Listou usuários' });
  },

  async show(request, response) {
    const { id } = request.params;
    return response.json({ msg: 'Listou um usuário' });
  },

  async authenticate(request, response) {
    const { email, password } = request.body;

    return response.json({ msg: 'Autenticou usuário' });
  },

  async create(request, response) {
    const { email, username, password } = request.body;

    return response.json({ msg: 'Criou usuário' });
  },
};
