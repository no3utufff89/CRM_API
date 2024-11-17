import { knex } from "../connectDataBase.js";

export const getUsers = async (req, res) => {
    try {
        const users = await knex('user_role')
        .join('user_profile','user_role.id', 'user_profile.user_role_id')
        .select(
          'user_profile.id', 
          'user_role.user_role_name as role',
          'user_profile.user_name as name',
          'user_profile.user_avatar as avatar',);
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  export const getUserById = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await knex('users').where({ id }).first();

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  export const deleteUserById = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await knex('users').where({ id }).delete();

      if (!deleted) {
        return res.status(404).json({ error: "User not found" });
      }

      res.status(204).send('Пользователь удален');
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  export const createUser = async (req, res) => {
    console.log(req.body);
    
    try {
      const { name, email, avatar } = req.body;
      console.log(name, email, avatar);
      if (!name ||!email ||!avatar) {
        return res.status(400).json({ error: "Missing required fields" });
      }
      const newUser = await knex('users').insert({ name, email, avatar });
     if (!newUser) {
        return res.status(400).json({ error: "Invalid user data" });
      }
      res.status(201).json(' Пользователь создан');
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
