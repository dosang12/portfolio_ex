import React, { useRef } from "react";
import Slider from "react-slick";
import Project from "./Project";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";

let data = [
  {
    img: "https://www.kwater.or.kr/main_vision/bg1-11.jpg",
    disc: "수자원공사 리뉴얼 페이지 프로젝트",
  },
  {
    img: "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/307859034_180681467858996_2464066227778309423_n.png?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=NUeySyl9IDQAX8I_V2_&_nc_ht=scontent-ssn1-1.xx&oh=00_AfBecrV2sj668cuvGVtzYde13sVVi7WGs85841panjvPDQ&oe=64340A04",
    disc: "풀스택 가구 쇼핑몰 4niture 프로젝트",
  },
  {
    img: "https://www.kwater.or.kr/main_vision/bg1-11.jpg",
    disc: "수자원공사 리뉴얼 페이지 프로젝트",
  },
  {
    img: "https://www.kwater.or.kr/main_vision/bg1-11.jpg",
    disc: "수자원공사 리뉴얼 페이지 프로젝트",
  },
  {
    img: "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/307859034_180681467858996_2464066227778309423_n.png?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=NUeySyl9IDQAX8I_V2_&_nc_ht=scontent-ssn1-1.xx&oh=00_AfBecrV2sj668cuvGVtzYde13sVVi7WGs85841panjvPDQ&oe=64340A04",
    disc: "풀스택 가구 쇼핑몰 4niture 프로젝트",
  },
];

var settings = {
  className: "center",
  centerMode: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
};
const SliderComp = () => {
  const arrowRef = useRef(null);
  let sliderProject = "";
  sliderProject = data.map((item, i) => <Project item={item} key={i} />);
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
        {sliderProject}
      </Slider>
      <Buttons>
        <button onClick={() => arrowRef.current.slickPrev()} className="back">
          <IoIosArrowBack />
        </button>
        <button onClick={() => arrowRef.current.slickNext()} className="next">
          <IoIosArrowForward />
        </button>
      </Buttons>
    </Container>
  );
};

export default SliderComp;

const Container = styled.div`
  position: relative;
`;

const Buttons = styled.div`
  button {
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back {
    left: -1rem;
  }
`;
