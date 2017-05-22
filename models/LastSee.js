module.exports = function(sequelize, DataTypes) {
  var LastSee = sequelize.define("LastSee", {
    body: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }

  },

  userEmail: {
      type: DataTypes.STRING,
      allowNull: false
  },



updateId: {
      type: DataTypes.INTEGER,
      allowNull: false
  }



    },




    {
      // We're saying that we want our Author to have Posts
      classMethods: {
        associate: function(models) {
          // An Author (foreignKey) is required or a Post can't be made
          LastSee.belongsTo(models.Users, {
            // //can manually set foreign key equal to the user email
            // //id of posts will be foreign key for the user. 
            // foreignKey: {
            //  field: "email",
            //   allowNull: false
            // }
          });
        }
      }
    
  });
  return LastSee;
};