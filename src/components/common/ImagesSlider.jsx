import React from "react";
import Slider from "react-slick";
import Container from '@mui/material/Container';
import img1 from '../../assets/images/img-1.jpg';
import img2 from '../../assets/images/img-2.jpg';
import img3 from '../../assets/images/img-3.jpg';
import img4 from '../../assets/images/img-4.jpg';
import img5 from '../../assets/images/img-5.jpg';
import img6 from '../../assets/images/img-6.jpg';
import imagesSliderStyles from '../../styles/components/images_slider.module.css';

function CustomPaging() {   
  const images = [img1, img2, img3, img4, img5, img6];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    fade: true,
    // تخصيص شكل النقاط (الصور المصغرة)
    customPaging: (i) => (
      <div className={imagesSliderStyles['thumbnail-dot']}>
        <img
          src={images[i]}
          alt={`Thumbnail ${i}`}
        />
      </div>
    ),
    // تخصيص الـ div المحيط بالنقاط
    appendDots: dots => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
          marginTop: "20px", // يمكنك تعديل هذه القيمة حسب الحاجة
        }}
      >
        <ul style={{ 
          margin: "0px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "30px",
        }}> 
          {dots} 
        </ul>
      </div>
    ),
    dotsClass: imagesSliderStyles['slick-dots'],
  };

  return (
    <Container maxWidth="xl">
      <div className="slider-container my-10">
        <Slider {...settings}>
          {images.map((img, idx) => (
            <div key={idx} className="mt-10">
              <img
                style={{
                  width: "100%",
                  maxHeight: "600px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
                src={img}
                alt={`Slide ${idx}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
}

export default CustomPaging;