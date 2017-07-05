module.exports = function(sequelize, DataTypes) {
  var FriendProfileImages = sequelize.define("FriendProfileImages", {
    image: {
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
         
          FriendProfileImages.belongsTo(models.User, {
           
          });
        }
      }
    
  });
  return FriendProfileImages;
};