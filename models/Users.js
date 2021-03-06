// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as the regular bcrypt module
// sometimes causes errors on Windows machines
var bcrypt = require("bcrypt-nodejs");
// Creating our User model
module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
            // The email cannot be null, and must be a proper email before creation
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    isEmail: true
                }
            },
            // The password cannot be null
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },


        



            bio: {

                type: DataTypes.STRING,
                allowNull: true

            }
        },


        {
            classMethods: {
                associate: function(models) {
                  
                    User.hasMany(models.FriendNames, {
                        onDelete: "cascade"
                    });
                },

                associate: function(models) {
                  
                    User.hasMany(models.FriendProfileImages, {
                        onDelete: "cascade"
                    });
                },


                associate: function(models) {
                    
                    User.hasMany(models.LastSees, {
                        onDelete: "cascade"
                    });
                },

                 associate: function(models) {
                    
                    User.hasMany(models.NextSees, {
                        onDelete: "cascade"
                    });
                }

            },
            // Creating a custom method for our User model. This will check if an unhashed password entered by
            // The user can be compared to the hashed password stored in our database
            instanceMethods: {
                validPassword: function(password) {
                    return bcrypt.compareSync(password, this.password);
                }
            },
            // Hooks are automatic methods that run during various phases of the User Model lifecycle
            // In this case, before a User is created, we will automatically hash their password
            hooks: {
                beforeCreate: function(user, options, cb) {
                    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
                    cb(null, options);
                }
            }

      });


return User;

};