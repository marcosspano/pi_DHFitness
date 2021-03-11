module.exports = (Sequelize, DataType) => {

    const Help = Sequelize.define('Help', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          full_name: {
            type: DataType.STRING
          },
          email: {
            type: DataType.STRING
          },
          subject: {
            type: DataType.STRING
          },
          text: {
            type: DataType.STRING
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
        tableName: "helps"
    });
    return Help;
}