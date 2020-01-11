module.exports = function (sequelize, DataTypes) {
    var Countries = sequelize.define("Countries", {
        cName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cCode: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
            
    });

return Countries
}