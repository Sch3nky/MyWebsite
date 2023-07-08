import { sendMessage } from '@/service/contact/contactService';
import { useContext } from 'react';
import { ContactMessage } from '@/types/api';
import { AlertContext } from '@/Components/Layouts/context/AlertContext';

const useContact = () => {
    const { showDanger, showSuccess } = useContext(AlertContext);
    

    const send_message = async (message: ContactMessage) => {
        try {
            const response = await sendMessage(message);
            console.log(response)
            if (!response.ok) {
                showDanger("Odesílání zprávy", response.message || "Zprávu se nepodařilo odeslat")
                return false;
            }
            showSuccess("Odesílání zprávy", response.message )
            return true
        }
        catch (e) {
            console.error("Error sending message:", e);
            // Handle the error state or display an error message to the user
        }
    };

    return { send_message };
};

export default useContact;