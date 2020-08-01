import Sequelize, { Model } from 'sequelize';

class Note extends Model {
  static init(sequelize) {
    super.init(
      {
        uid: {
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
          type: Sequelize.DATE,
        },
        hour: {
          allowNull: false,
          type: Sequelize.TIME,
        },
      },
      {
        sequelize,
      }
    );
    this.removeAttribute('id');
    return this;
  }
}

export default Note;
