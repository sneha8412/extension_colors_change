// This file contains our logic for sending the notification. 
// Here, the options object represents the template for our notification 
// as discussed above. We use the chrome.notifications.create function 
// to create the notification.
// The first argument taken is the option template 
// and the next argument is the callback function which 
// is a simple console.log.
var options = {
    type: "basic",
    title: "Notification from opengenus foundation",
    message: "https://iq.opengenus.org",
    iconUrl: "icon128.png"
    };
    
    
    chrome.notifications.create(options, callback);
    
    function callback(){
        console.log('Popup done!')
    }
