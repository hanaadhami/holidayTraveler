module.exports = function (sequelize, DataTypes) {
    var Trips = sequelize.define("Trips", {
        cName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        month: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        monthName: {
            type: DataTypes.STRING,
            allowNull: false
        }



    });
    Trips.associate = function(models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Trips.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }
        });
      };

      return Trips
}