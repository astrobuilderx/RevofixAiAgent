import { users } from '../routes/_data.js';

export default function auth(req, _res, next) {
  req.user = users[0];
  next();
}
