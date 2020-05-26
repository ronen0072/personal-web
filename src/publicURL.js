
const regularURL = 'https://ronen-finish-personal-web.firebaseapp.com/img/';
const forSmallDeviceURL = 'https://ronen-finish-personal-web.firebaseapp.com/for-small-devices/img/';


export default function get(){
    if (window.innerWidth > 800)
        return regularURL;
    else
        return forSmallDeviceURL
};
