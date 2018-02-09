var config = {
    production: {
        DBHost: "mongodb://localhost:27017/avra-prod"
    },
    test: {
        DBHost: "mongodb://localhost:27017/avra-test"
    },
    default: {
        DBHost: "mongodb://localhost:27017/avra-dev"
    }
  }
  exports.get = function get(env) {
      //console.log(env)
    return config[env] || config.default;
  }