# Node Boilerplate

## Dependencies

- **Node** - `^12.*.*`
- **NPM** - `^6.*.*`
- **Postgres** - `^11.*`

## Getting Started

1. Create database locally with name - `local`
2. Install dependencies
   ```
   npm install
   ```
3. Migrate database
   ```
   npm run db:migrate
   ```
4. Start the server
   ```
   npm start
   ```

## PM2 Server Deployment Script

- [**PM2 Documentation**](https://pm2.keymetrics.io/docs/usage/pm2-doc-single-page/)
- Install PM2 globally
  ```
  npm i -g pm2
  ```
- Setup for deployment on server
  ```
  pm2 deploy <environment> setup
  ```
- Update & redeploy code on server
  ```
  pm2 deploy <environment> update
  ```
- Revert to previouse deployment
  ```
  pm2 deploy <environment> revert 1
  ```
- Execute command on remote device
  ```
  pm2 deploy <environment> exec "pm2 reload all"
  ```

---

## Schema Validation Example

- [Joi Schema Validation](https://hapi.dev/module/joi/)

  ```js
  import Joi from '@hapi/joi';

  router.get(
    '/',
    wrapAsync(async (req, res, next) => {
      const { body } = req;
      const schema = Joi.object({
        type: Joi.any().valid(['scheduled', 'immediate']).required(),
      });
      const { value, error } = schema.validate(body);
      if (error) {
        throw new Errors.BadRequestError(error[0].message);
      }
    })
  );
  ```
