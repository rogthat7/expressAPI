const swaggerAutogen = require('swagger-autogen')();



const swaggerDefinition = {
    info: {
      title: 'Express API for JSONPlaceholder',
      version: '1.0.0',
    },
    host: "localhost:9000",
    basePath: "/aliens",
    securityDefinitions: {
      api_key: {
          type: "apiKey",
          name: "api_key",
          in: "header"
      },
      petstore_auth: {
          type: "oauth2",
          authorizationUrl: "https://petstore.swagger.io/oauth/authorize",
          flow: "implicit",
          scopes: {
              read_pets: "read your pets",
              write_pets: "modify pets in your account"
          }
      }
  },
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    securityDefinitions: {
      api_key: {
          type: "apiKey",
          name: "api_key",
          in: "header"
      },
    },
  };

const outputFile = './swagger/swagger_output.json';
const endpointsFiles = ['./routes/aliens.js'];
swaggerAutogen(outputFile, endpointsFiles, swaggerDefinition).then(() => {
    require('../index')           // Your project's root file
});