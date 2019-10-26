import Sequelize from 'sequelize';

import User from '../app/models/User';
import Meetup from '../app/models/Meetup';
import File from '../app/models/File';
import Inscription from '../app/models/Inscription';

import databaseConfig from '../config/database';

const models = [User, File, Meetup, Inscription];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig);

        models.forEach(model => model.init(this.connection));
        models.forEach(
            model => model.associate && model.associate(this.connection.models)
        );
    }
}

export default new Database();
