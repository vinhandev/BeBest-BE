const admin = require('./initialize.js');

const message = {
notification: {
title: 'New Notification',
body: 'This is a new notification',
},
token: 'DEVICE_TOKEN',
};

admin.messaging().send(message).then((response) => {
console.log('Successfully sent message: ', response);
})
.catch((error) => {
console.log('Error sending message: ', error);
});