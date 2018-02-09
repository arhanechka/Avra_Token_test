module.exports = function(app) {

    var users = require('../controllers/user.controller.js');
    app.get('/login', users.loginPage);

    app.post('/login', users.login);

    app.post('/logout', users.logout);

    app.get('/register', users.register);

     // Create a new User
     app.post('/register', users.create);

     // Retrieve all Users
     app.get('/users', users.findAll);

     // Retrieve a single User with userId
     app.get('/users/:userId', users.findOne);

     // Update a User with userId
     app.put('/users/:userId', users.update);

     // Delete a User with userId
     app.delete('/users/:userId', users.delete);
};
