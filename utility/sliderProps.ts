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
        effect: "fade",
        parallax: true,
        autoplay: true,
        speed: 1400,
    },
};
