const connection = require('../database/connection');
const bcrypt = require('bcrypt');

module.exports = {
  async index(request, response) {
    const users = await connection('users').select('*');

    if (!users) {
      response.status(401).json({ error: 'Users not found' });
    }

    console.log(users);

    return response.json({ users });
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
    const cripto = await bcrypt.hash(password, 10);

    const trx = await connection.transaction();

    try {
      const userId = await trx('users').insert({
        email,
        username,
        password: cripto,
      });
      trx.commit();

      return response.status(201).json({ userId });
    } catch (err) {
      trx.rollback();

      return response.status(404).json({ error: 'Insert error' });
    }

    return response.json({ msg: 'Criou usuário' });
  },
};
