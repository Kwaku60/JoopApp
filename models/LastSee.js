module.exports = function(sequelize, DataTypes) {
  var LastSees = sequelize.define("LastSees", {
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
    
      classMethods: {
        associate: function(models) {
          
          LastSees.belongsTo(models.User, {
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
  return LastSees;
};