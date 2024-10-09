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
    return notificationData.filter(notification => notification.author.id === userID).map(notification => notification.context);
};

export { isNormalized };