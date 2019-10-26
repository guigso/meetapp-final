import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                newEmail: Sequelize.VIRTUAL,
                password: Sequelize.VIRTUAL,
                password_hash: Sequelize.STRING,
            },
            { sequelize }
        );
        this.addHook('beforeSave', async user => {
            if (user.password) {
                user.password_hash = await bcrypt.hash(user.password, 8);
            }
            if (user.newEmail) {
                user.email = user.newEmail;
            }
        });
        return this;
    }

    checkPassword(password) {
        return bcrypt.compare(password, this.password_hash);
    }
}

export default User;
