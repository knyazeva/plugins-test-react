import React, {useState, useCallback} from 'react';
import Slider from "react-slick";
import Carousel, {Modal, ModalGateway} from "react-images";


/* Слайдер с фото */
const img = [
    {id: 1, src: '/../images/img2.png', alt: "Картинка 1"},
    {id: 2, src: '/../images/img3.jpg', alt: "Картинка 2"},
    {id: 3, src: '/../images/img5.jpg', alt: "Картинка 3"},
    {id: 4, src: '/../images/img6.jpg', alt: "Картинка 4"},
];

function SliderPhoto() {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, index) => {
        setCurrentImage(index-1);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };
    let settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
        <h2>Слайдер с картинками</h2>
        <Slider {...settings} className="slider-photo" >
            {img.map(img => <div key={img.id}><img src={img.src} alt={img.alt} onClick={e => openLightbox(e, img.id)} /></div>)}
        </Slider>
        <ModalGateway>
            {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                    <Carousel
                        currentIndex={currentImage}
                        views={img}
                    />
                </Modal>
            ) : null}
        </ModalGateway>
        </>
    );
}

export default SliderPhoto;