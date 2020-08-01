import Sequelize from 'sequelize';
import 'dotenv/config';
import databaseConfig from '../config/database';
import Note from '../app/models/Note';

const models = [Note];
class DataBase {
  constructor() {
    this.init();
  }

  init() {
    // eslint-disable-next-line no-console
    console.log('BOMBANDO!');

    this.connection = new Sequelize(process.env.DATABASE_URL, databaseConfig);

    models.map((model) => model.init(this.connection));
  }
}

export default new DataBase();
