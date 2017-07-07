module.exports = function(sequelize, DataTypes) {
  let Sequelize = sequelize.Sequelize;
  //console.log(sequelize.Sequelize);
  var FriendProfileImages = sequelize.define("FriendProfileImages", {
    image: {
      type: Sequelize.BLOB('long'),
      allowNull: false

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