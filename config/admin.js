module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5ec030fee02dbe8499a28833536fb945'),
  },
});
