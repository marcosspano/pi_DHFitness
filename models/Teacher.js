module.exports = (Sequelize, DataType) => {

    const Teacher = Sequelize.define('Teacher', {
        id: { 
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          full_name: {
            type: DataType.STRING,
            allowNull: false
          },
          email: {
            type: DataType.STRING,
            allowNull: false
          },
          speciality: {
            type: DataType.STRING,
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
        tableName: "teachers"
    });
    return Teacher;
}