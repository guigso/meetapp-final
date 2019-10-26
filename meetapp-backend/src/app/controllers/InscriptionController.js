import { Op } from 'sequelize';
import User from '../models/User';
import File from '../models/File';
import Meetup from '../models/Meetup';
import Inscription from '../models/Inscription';
import Queue from '../../lib/Queue';
import InscriptionMail from '../jobs/InscriptionMail';

class InscriptionController {
    async index(req, res) {
        const inscriptions = await Inscription.findAll({
            where: {
                user_id: req.userId,
            },
            include: [
                {
                    model: Meetup,
                    required: true,
                    include: [
                        {
                            model: User,
                            attributes: ['name', 'id'],
                        },
                        {
                            model: File,
                            attributes: ['id', 'path', 'url'],
                        },
                    ],
                },
            ],
            order: [[Meetup, 'date']],
        });

        return res.json(inscriptions);
    }

    async store(req, res) {
        const user = await User.findByPk(req.userId);
        const meetup = await Meetup.findByPk(req.params.meetupId, {
            include: [User],
        });
        if (!meetup) {
            return res.status(400).json({ error: 'Invalid meetup' });
        }

        if (meetup.user_id === req.userId) {
            return res
                .status(400)
                .json({ error: "Can't subscribe to your own meetup" });
        }

        if (meetup.past) {
            return res
                .status(400)
                .json({ error: "Can't subscribe to past meetups" });
        }

        const checkDate = await Inscription.findOne({
            where: {
                user_id: user.id,
            },
            include: [
                {
                    model: Meetup,
                    required: true,
                    where: {
                        date: meetup.date,
                    },
                },
            ],
        });

        if (checkDate) {
            return res.status(400).json({
                error: "Can't subscribe to two meetups at the same time",
            });
        }

        const inscription = await Inscription.create({
            user_id: user.id,
            meetup_id: meetup.id,
        });

        await Queue.add(InscriptionMail.key, {
            meetup,
            user,
        });

        return res.json(inscription);
    }

    async delete(req, res) {
        const user_id = req.userId;
        const { meetupId } = req.params;

        const inscription = await Inscription.findOne({
            where: { user_id, meetup_id: meetupId },
        });

        if (!inscription) {
            return res.status(404).json({
                error: 'Inscription not found',
            });
        }
        await inscription.destroy();

        return res.send();
    }
}

export default new InscriptionController();
