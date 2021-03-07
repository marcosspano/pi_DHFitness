module.exports = (Sequelize, DataType) => {

    const Plan = Sequelize.define('Plan', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          title: {
            type: DataType.STRING,
            allowNull: false
          },
          price: {
            type: DataType.FLOAT,
            allowNull: false
          },
          active: DataType.BOOLEAN,
          deleted: DataType.BOOLEAN,
          createdAt: {
            type: DataType.DATE
          },
          updatedAt: {
            type: DataType.DATE
          }
        },
    {
        tableName: "plans"
    });
    return Plan;
}