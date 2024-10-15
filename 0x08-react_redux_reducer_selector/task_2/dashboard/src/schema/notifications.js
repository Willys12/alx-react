import * as notificationData from "../../../../notifications.json";
import { normalize, schema } from "normalizr";

// Create a function named getAllNotificationsByUser that 
//accepts userId as an argument
//The function should return a list containing all the context objects from
//the notifications.json data when the author id is the same as the userId
const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, {idAttribute: "guid"});
const notification = new schema.Entity("notifications", {
    author: user,
    context: message
});
const isNormalized = normalize(notificationData, [notification]);

export const getAllNotificationsByUser = (userID) => {
    const output = [];
    const notifications = isNormalized.entities.notification;
    const messages = isNormalized.entities.messages;

    for (const ID in notifications) {
        if (notifications[id].author === userID) {
            output.push(messages[notifications[id].context]);
        }
    }
    return output;
};

export { isNormalized };