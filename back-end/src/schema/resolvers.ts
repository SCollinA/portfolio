import dotenv from "dotenv";
import { Credentials } from "google-auth-library";
import { google } from "googleapis";
import nodemailer from "nodemailer";
import { SmtpOptions } from "nodemailer-smtp-transport";
import serviceKey from "../service_key.json";
dotenv.config();

export const resolvers = {
    Mutation: {
        contact: (_obj: any, args: any, _context: any, _info: any) => {
            const { name, email, message } = args;
            const myEmail = "hi@collinargo.com";
            const jwtClient = new google.auth.JWT(
                serviceKey.client_email,
                undefined,
                serviceKey.private_key,
                ["https://mail.google.com/"],
                undefined,
                serviceKey.private_key_id,
            );
            jwtClient.authorize((error: Error | null, tokens?: Credentials | undefined) => {
                if (error) {
                    console.log('could not authorize', error) //tslint:disable-line
                    return false;
                }
                const transporter = nodemailer.createTransport({
                    auth: {
                        accessToken: (tokens && tokens.access_token) || undefined,
                        expires: (tokens && tokens.expiry_date) || undefined,
                        privateKey: serviceKey.private_key,
                        serviceClient: serviceKey.client_id,
                        type: "OAuth2",
                        user: myEmail,
                    },
                    host: "smtp.gmail.com",
                    port: 465,
                    secure: true,
                } as SmtpOptions); //tslint:disable-line

                transporter.sendMail({
                    from: "portfolio contact <" + email + ">", // this is being overwritten by gmail
                    replyTo: email,
                    subject: "portfolio contact",
                    text: `
                        ${name}
                        ${message}

                        - reply directly to this e-mail to respond -
                    `,
                    to: process.env.PORTFOLIO_EMAIL,
                }, (mailError: Error | null, mailInfo: any) => {
                    if (mailError) {
                        console.log("contact e-mail not sent!", mailError, mailInfo); //tslint:disable-line
                    }
                    return undefined;
                });
                return undefined;
            });
        },
    },
    Query: {
        getName: () => {
        // (obj: any, args, context, info) => {
            return "Hello World!";
        },
    },
};
