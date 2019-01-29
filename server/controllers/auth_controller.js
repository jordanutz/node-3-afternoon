const users = '../models/users'
const id = 1

module.exports = {
  login: (req, res, next) => {
    const {username, password} = req.body
    const {user} = req.session
    let shoppingUser = users.find(user => user.username === username && user.password === password)
    if (user) {
      session.user.username = shoppingUser.username
      res.status(200).send(session.user)
    } else {
      res.status(500).send('Unauthorized')
    }
  },
  register: (req, res, next) => {
    const {username, password} = req.body
    users.push({id, username, password})
    id++
    session.user.username = username;
  },
  signout: (req, res, next) => {
    req.session.destory()
    res.status(200).send(req.session)
  },
  getUser: (req, res, next) => {
    res.status(200).send(req.session.user)
  }
}
