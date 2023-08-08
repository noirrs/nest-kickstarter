# 🤩 Nest Kickstarter


🤠 Cool Template for NestJS includes JWT authentication, SHA256 hashing and MongoDB connection.


# 🦾 Features
  
- using fastify 

- swagger ui

- fastify helmet

- auto validation with class validator

- customizable guards and decorators

- MongoDB connection

- JWT authentication

- Perfect structure


  
  
# ✍️ Repository Structure 

```
├─ .github
│  └─ FUNDING.yml
├─ src
│  ├─ main.ts
│  ├─ app.service.ts
│  ├─ app.module.ts
│  ├─ app.controller.ts
│  ├─ core
│  │  ├─ decorators
│  │  │  └─ bypass.guard.ts
│  │  ├─ guards
│  │  │  ├─ jwt.guard.ts
│  │  │  ├─ bypass.guard.ts
│  │  │  └─ admin.guard.ts
│  │  ├─ initializers
│  │  │  ├─ swagger.initializer.ts
│  │  │  ├─ morgan.initializer.ts
│  │  │  └─ cors.initializer.ts
│  │  ├─ lib
│  │  │  └─ index.ts
│  │  ├─ strategies
│  │  │  └─ jwt.strategy.ts
│  │  └─ utils
│  │     ├─ nullCheck.ts
│  │     ├─ idGenerator.ts
│  │     └─ encode.ts
│  └─ modules
│     ├─ user
│     │  ├─ user.service.ts
│     │  ├─ user.module.ts
│     │  ├─ user.controller.ts
│     │  └─ etc
│     │     ├─ user.schema.ts
│     │     ├─ register.dto.ts
│     │     └─ find.dto.ts
│     ├─ api
│     │  ├─ api.service.ts
│     │  ├─ api.module.ts
│     │  └─ api.controller.ts
│     └─ auth
│        ├─ auth.service.ts
│        └─ auth.module.ts
├─ .eslintrc.js
├─ .gitignore
├─ .prettierrc
├─ README.md
├─ nest-cli.json
├─ package-lock.json
├─ package.json
├─ tsconfig.build.json
└─ tsconfig.json
```

# 🔗 Resources

[NestJS](https://docs.nestjs.com/)

[Mongoose](https://mongoosejs.com/)

[Typescript](https://www.typescriptlang.org/docs/)

[MongoDB](https://www.mongodb.com/)

[MongoDB Compass](https://www.mongodb.com/products/compass) (for local usage)

[Another Useful Repo](https://github.com/fishuke/nest-boilerplate/tree/master)

[Medium Article](https://mohaned-benmansour.medium.com/jwt-authentication-using-node-nestjs-mongoose-passport-ionic5-part1-bd07becc7a52)


## Running the app

```bash
# development
$ npm run start
```


# 📱 Contact

<div align="center">
<a href="https://github.com/Noirrs" target="_blank"><img src="https://img.shields.io/badge/Noirrs%20-191717.svg?&style=for-the-badge&logo=github&logoColor=white"></a>
<a href="https://discord.com/users/922078187788308510" target="_blank"><img src="https://shields.io/badge/Noir-111111.svg?&style=for-the-badge&logo=discord"></a>
<a href="https://www.npmjs.com/~noirr" target="_blank"><img src="https://shields.io/badge/Noirr-111111.svg?&style=for-the-badge&logo=npm"></a>
<a href="https://open.spotify.com/user/oitziwwbyioezmtmfndiu3qqw" target= "_blank"><img src="https://img.shields.io/badge/Spotify%20-1ed760.svg?&style=for-the-badge&logo=spotify&logoColor=black"></a>
  </div>

