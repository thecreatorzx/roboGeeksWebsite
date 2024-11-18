import React from "react";
import {
  CarouselProvider,
  Slider,
  Image,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

const Carousel = () => {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={60}
      totalSlides={7}
      infinite
      touchEnabled
      isPlaying
      interval={4000}
      hasMasterSpinner
    >
      <ButtonBack className="buttonback">
        <MdNavigateBefore />
      </ButtonBack>
      <ButtonNext className="buttonnext">
        <MdNavigateNext />
      </ButtonNext>
      <Slider>
        <Slide index={0}>
          <Image src="/images/img1.png" />
        </Slide>
        <Slide index={1}>
          <Image src="/images/img2.png" />
        </Slide>
        <Slide index={2}>
          <Image src="/images/img3.jpg" />
        </Slide>
        <Slide index={3}>
          <Image src="/images/img4.jpg" />
        </Slide>
        <Slide index={4}>
          <Image src="/images/img5.jpg" />
        </Slide>
        <Slide index={5}>
          <Image src="/images/img6.jpg" />
        </Slide>
        <Slide index={6}>
          <Image src="/images/img7.jpeg" />
        </Slide>
      </Slider>
    </CarouselProvider>
  );
};

export default Carousel;
