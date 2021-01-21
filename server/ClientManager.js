const userTemplates = require('../config/users')

module.exports = function () {
  // mapping of all connected clients
  const clients = new Map()

  function addClient(client) {
    clients.set(client.id, { client })
  }

  // 接続済のユーザーをclientsに登録
  function registerClient(client, user) {
    clients.set(client.id, { client, user })
  }

  function removeClient(client) {
    clients.delete(client.id)
  }

  // 未接続のユーザーのjsonを返す
  function getAvailableUsers() {
    const usersTaken = new Set(
      Array.from(clients.values())
        .filter(c => c.user)
        .map(c => c.user.name)
    )
    return userTemplates
      .filter(u => !usersTaken.has(u.name))
  }

  // 選択ユーザー情報を返す
  function getUserByName(userName) {
    return { name: userName, lastName: '', statusText: '', image: 'users/rick.jpg' }
  }

  function getUserByClientId(clientId) {
    return (clients.get(clientId) || {}).user
  }

  return {
    addClient,
    registerClient,
    removeClient,
    getAvailableUsers,
    getUserByName,
    getUserByClientId
  }
}
