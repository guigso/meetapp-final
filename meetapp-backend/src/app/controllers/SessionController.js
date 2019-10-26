import jwt from 'jsonwebtoken';
import * as Yup from 'yup';

import User from '../models/User';
import auth from '../../config/auth';

class SessionController {
    async store(req, res) {
        const schema = Yup.object().shape({
            email: Yup.string()
                .email()
                .required(),
            password: Yup.string().required(),
        });

        if (!(await schema.isValid(req.body))) {
            schema.validate(req.body, { abortEarly: false }).catch(e => {
                return res.status(401).json({ error: e.errors });
            });
            return false;
        }

        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(401).json({ error: 'User not found' });
        }

        if (!(await user.checkPassword(password))) {
            return res.status(401).json({ error: 'Password does not match' });
        }

        const { id, name } = user;

        return res.json({
            user: { id, name, email },
            token: jwt.sign({ id }, auth.secret, { expiresIn: auth.expiresIn }),
        });
    }
}

export default new SessionController();
