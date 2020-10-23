const isAdminMiddleware = (req, res, next) => {
  if (!req.user.isAdmin) {
    next({ status: 403, message: 'Access is forbidden.' }, null);
  }
  next();
};

export default isAdminMiddleware;
