import * as Yup from 'yup';
import { Op } from 'sequelize';
import {
    isBefore,
    startOfHour,
    parseISO,
    startOfDay,
    endOfDay,
} from 'date-fns';

import Meetup from '../models/Meetup';
import Inscription from '../models/Inscription';
import User from '../models/User';
import File from '../models/File';

class MeetupController {
    async index(req, res) {
        const { page = 1 } = req.query;
        const date = parseISO(req.query.date);

        let meetups = await Meetup.findAll({
            where: {
                user_id: {
                    [Op.not]: req.userId,
                },
                date: {
                    [Op.between]: [startOfDay(date), endOfDay(date)],
                },
            },
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
            limit: 10,
            offset: 10 * page - 10,
        });

        const inscriptions = await Inscription.findAll({
            where: {
                user_id: {
                    [Op.eq]: req.userId,
                },
            },
            attributes: ['meetup_id'],
        });
        if (inscriptions) {
            const inscriptionsId = inscriptions.map(
                inscription => inscription.meetup_id
            );
            meetups = meetups.filter(
                meetup => inscriptionsId.indexOf(meetup.id) === -1
            );
        }

        return res.json(meetups);
    }

    async store(req, res) {
        const schema = Yup.object().shape({
            title: Yup.string().required(),
            description: Yup.string().required(),
            file_id: Yup.number().required(),
            location: Yup.string().required(),
            date: Yup.date().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fails' });
        }

        const { date } = req.body;
        const hourStart = startOfHour(parseISO(date));

        if (isBefore(hourStart, new Date())) {
            return res.status(400).json({
                error: 'Past dates are not permited',
            });
        }
        const { title, description, location, file_id } = req.body;

        const meetup = await Meetup.create({
            user_id: req.userId,
            title,
            description,
            location,
            date,
            file_id,
        });

        return res.json(meetup);
    }

    async update(req, res) {
        const schema = Yup.object().shape({
            title: Yup.string(),
            file_id: Yup.number(),
            description: Yup.string(),
            location: Yup.string(),
            date: Yup.date(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fails' });
        }

        const user_id = req.userId;
        const meetup = await Meetup.findByPk(req.params.id);

        if (!meetup) {
            return res.status(400).json({ error: 'Meetup not found' });
        }
        if (meetup.user_id !== user_id) {
            return res.status(401).json({ error: 'Not authorized.' });
        }

        if (isBefore(parseISO(req.body.date), new Date())) {
            return res.status(400).json({ error: "Can't register past dates" });
        }
        if (meetup.past) {
            return res
                .status(400)
                .json({ error: "Can't update past meetups." });
        }

        await meetup.update(req.body);

        return res.json(meetup);
    }

    async delete(req, res) {
        const user_id = req.userId;

        const meetup = await Meetup.findByPk(req.params.id);
        if (!meetup) {
            return res.status(400).json({ error: 'Meetup not found' });
        }
        if (meetup.user_id !== user_id) {
            return res.status(401).json({ error: 'Not authorized.' });
        }

        if (meetup.past) {
            return res
                .status(400)
                .json({ error: "Can't delete past meetups." });
        }

        await meetup.destroy();

        return res.send();
    }
}
export default new MeetupController();
