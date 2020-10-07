//======> Tornado UI Core Base <=======//
import './Base/Tornado';
import Tornado from './Base/Tornado';

document.addEventListener('DOMContentLoaded', domReady => {
    //====> Loading <====//
    setTimeout(time => {
        Tornado.getElement('.loading')?.remove();
    }, 1000);

    //====> Hero Slide <====//
    Tornado.slider('.hero-slider', {
        animation : 'gallery',
    });
});

