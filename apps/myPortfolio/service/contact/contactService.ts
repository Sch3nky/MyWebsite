
import { CodeResponse, ContactMessage } from '@/types/api';
import { CONTACT_API} from '@/utils/api';

const contactFetch = async (url: string, options: RequestInit, json = false): Promise<CodeResponse> => {
    try {
        const response = await fetch(url, options);

        const message = await response.text();

        if (response.status !== 200) {
            return new Promise((resolve) => {
                resolve({
                    ok: false,
                    message: message
                });
            });
        }

        return new Promise((resolve) => {
            resolve({
                ok: true,
                message: message
            });
        });

    } catch (e) {
        return new Promise((resolve) => {
            resolve({
                ok: false,
                message: "Unable to reach server."
            });
        });
    }
};

const sendMessage = async (message: ContactMessage) => {
    console.log('fetchAllNotificationService', 'Retrieving data');

    const options: RequestInit = {
        method: 'POST',
        body: JSON.stringify(message),
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return contactFetch(CONTACT_API, options, true);
};

export { sendMessage };