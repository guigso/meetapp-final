import Mail from '../../lib/Mail';

class InscriptionMail {
    get key() {
        return 'InscriptionMail';
    }

    async handle({ data }) {
        const { meetup, user } = data;

        await Mail.sendMail({
            to: `${meetup.User.name} <${meetup.User.email}>`,
            subject: `[${meetup.title}] Nova inscrição`,
            template: 'inscription',
            context: {
                organizer: meetup.User.name,
                meetup: meetup.title,
                user: user.name,
                email: user.email,
            },
        });
    }
}

export default new InscriptionMail();
