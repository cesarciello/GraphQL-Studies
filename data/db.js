let id = 1
function nextId() {
    return id++
}

const perfis = [
    { id: 1, name: 'comum' },
    { id: 2, name: 'administrador' }
]

const users = [{
    id: nextId(),
    name: 'João Silva',
    email: 'jsilva@zemail.com',
    age: 29,
    perfil_id: 1,
    status: 'ACTIVE'
}, {
    id: nextId(),
    name: 'Rafael Junior',
    email: 'rafajun@wemail.com',
    age: 31,
    perfil_id: 2,
    status: 'INACTIVE'
}, {
    id: nextId(),
    name: 'Daniela Smith',
    email: 'danismi@umail.com',
    age: 24,
    perfil_id: 1,
    status: 'BLOCKED'
}]

module.exports = { users, perfis, nextId }