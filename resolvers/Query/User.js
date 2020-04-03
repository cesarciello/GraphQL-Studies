const { users } = require('../../data/db')

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
  users() {
    return users;
  },
  user(_, { filter }) {
    const i = indexUser(filter);
    return users[i] || null;
  }
}
