import SwiperCore from "swiper";
import {
    Autoplay,
    EffectFade,
    Grid,
    Navigation,
    Pagination,
    Parallax,
} from "swiper/modules";

SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay, Grid, Parallax]);

export const sliderProps = {
    testimonials: {
        slidesPerView: 1,
        spaceBetween: 40,
        parallax: true,
        autoplay: false,
        speed: 1400,
        navigation: {
            nextEl: "#certificates-next",
            prevEl: "#certificates-prev",
        },
    },
    homeSlider: {
        slidesPerView: 1,
        effect: "slide",
        parallax: true,
        autoplay: {
            delay: 4000, // 4 seconds between slides
            disableOnInteraction: false, // Continue autoplay after user interaction
        },
        speed: 1000,
        loop: true, // Loop back to first slide
    },
};
