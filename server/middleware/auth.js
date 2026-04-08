export default function auth(req, _res, next) {
  req.user = { id: 1, name: 'Admin User', email: 'admin@example.com', companyName: 'My Company', role: 'admin' };
  next();
}
