import Sequelize, { Model } from 'sequelize';

class Note extends Model {
  static init(sequelize) {
    super.init(
      {
        udi: {
          primarykey: true,
          allowNull: false,
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
        },
        title: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        content: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        date: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        hour: {
          allowNull: false,
          type: Sequelize.STRING,
        },
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default Note;
