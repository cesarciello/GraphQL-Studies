const { users, nextId } = require("../../data/db");

function indexUser(filter) {
  if (!filter) return -1;
  const { id, email } = filter;
  if (id) {
    return users.findIndex(u => u.id == id);
  } else if (email) {
    return users.findIndex(u => u.email == email);
  } else {
    return -1;
  }
}

module.exports = {
  newUser(_, { data }) {
    const hasEmail = users.some(u => u.email == data.email);
    if (hasEmail) throw new Error("E-mail already registered");
    const newUser = {
      id: nextId(),
      ...data,
      perfil_id: 1,
      status: 'ACTIVE'
    };
    users.push(newUser);
    return newUser;
  },
  deleteUser(_, { data }) {
    const i = indexUser(data)
    if (i < 0) return null;
    const deleted = users.splice(i, 1);
    return deleted[0] || null;
  },
  changeUser(_, { filter, data }) {
    const i = indexUser(filter)

    if (data.name) users[i].name = data.name;
    if (data.email) users[i].email = data.email;
    if (data.age) users[i].age = data.age;

    // // const user = {
    // //   ...users[i],
    // //   ...args
    // // };
    // // users[i] = user

    return users[i];
  }
};