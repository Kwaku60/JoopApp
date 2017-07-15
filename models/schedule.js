
module.exports = function(sequelize, DataTypes) {
  var Schedule = sequelize.define("Schedule", {
    Monday: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }

  },

  Teusday: {
      type: DataTypes.STRING,
      allowNull: true
  },

  Wednesday: {
      type: DataTypes.STRING,
      allowNull: true,
      //cannot use arrays in sequilize. Work around below. store as a json.
      get: function() {
            return JSON.parse(this.getDataValue('myArrayField'));
        }, 
        set: function(val) {
            return this.setDataValue('myArrayField', JSON.stringify(val));
        }
  },

  Thursday: {
      type: DataTypes.STRING,
      allowNull: true,
      get: function() {
            return JSON.parse(this.getDataValue('myArrayField'));
        }, 
        set: function(val) {
            return this.setDataValue('myArrayField', JSON.stringify(val));
        }
  },

  Friday: {
      type: DataTypes.STRING,
      allowNull: true,
      get: function() {
            return JSON.parse(this.getDataValue('myArrayField'));
        }, 
        set: function(val) {
            return this.setDataValue('myArrayField', JSON.stringify(val));
        }
  },

  Saturday: {
      type: DataTypes.STRING,
      allowNull: true,
      get: function() {
            return JSON.parse(this.getDataValue('myArrayField'));
        }, 
        set: function(val) {
            return this.setDataValue('myArrayField', JSON.stringify(val));
        }
  },

  Sunday: {
      type: DataTypes.STRING,
      allowNull: true,
      get: function() {
            return JSON.parse(this.getDataValue('myArrayField'));
        }, 
        set: function(val) {
            return this.setDataValue('myArrayField', JSON.stringify(val));
        }
  },

  userEmail: {
      type: DataTypes.STRING,
      allowNull: false,
      get: function() {
            return JSON.parse(this.getDataValue('myArrayField'));
        }, 
        set: function(val) {
            return this.setDataValue('myArrayField', JSON.stringify(val));
        }
  },


    },


    {
   
      classMethods: {
        associate: function(models) {
         
          Schedule.belongsTo(models.User, {
           
          });
        }
      }
    
  });
  return Schedule;
};