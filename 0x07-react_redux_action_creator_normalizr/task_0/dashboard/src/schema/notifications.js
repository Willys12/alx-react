import * as notificationData from "../../../../notifications.json";

// Create a function named getAllNotificationsByUser that 
//accepts userId as an argument
//The function should return a list containing all the context objects from the notifications.json data when the author id is the same as the userId
export const getAllNotificationsByUser = (userID) => {
    return notificationData.filter(notification => notification.author.id === userID).map(notification => notification.context);
};
