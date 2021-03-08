module.exports = (Sequelize, DataType) => {

    const Classe = Sequelize.define('Classe', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
          }, 
          id_students: {
            type: DataType.INTEGER,
            allowNull:false
          },
          id_teachers: {
            type: DataType.INTEGER,
            allowNull: false
          },
          id_plans: {
            type: DataType.INTEGER,
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
        tableName: "classes"
    });

    return Classe;
}