import axios from "axios";

export default class MessageService {
    constructor(
        {idInstance, apiTokenInstance, phone},
        timeout = 10000,
        host = "https://api.green-api.com"
    ) {
        this.receiveUrl = `${host}/waInstance${idInstance}/receiveNotification/${apiTokenInstance}`
        this.deleteUrl = `${host}/waInstance${idInstance}/deleteNotification/${apiTokenInstance}/`
        this.sendUrl = `${host}/waInstance${idInstance}/sendMessage/${apiTokenInstance}`
        this.chatId = `${phone}@c.us`
        this.axiosTimeout = timeout
        console.log('Create Green-API service')
    }

    getLast = async () => {
        const response = await axios.get(
            this.receiveUrl,
            {timeout: this.axiosTimeout}
        )
        return response.data
    }

    deleteLast = async (receiptId) => {
        const response = await axios.delete(
            `${this.deleteUrl}${receiptId}`,
            {timeout: this.axiosTimeout}
        )
        return response.data.result
    }

    sendText = async (message) => {
        const data = {chatId: this.chatId, message}
        const response = await axios.post(
            this.sendUrl,
            data,
            {timeout: this.axiosTimeout}
        )
        return response.data
    }
}
