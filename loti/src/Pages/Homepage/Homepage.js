import React from "react";
import "./homepage.css";
import rightone from "../../components/Assets/rightone.png";
import righttwo from "../../components/Assets/righttwo.png";
import featuredon from "../../components/Assets/featured.png";
import step1 from "../../components/Assets/step1.png";

import step2 from "../../components/Assets/step2.png";

import step3 from "../../components/Assets/step3.png";
import prod1 from "../../components/Assets/prod1.png";
import prod2 from "../../components/Assets/prod2.png";

import prod3 from "../../components/Assets/prod3.png";
import getlti from "../../components/Assets/getloti.png";

import { Swiper, SwiperSlide } from "swiper/react";
import testimonialone from "../../components/Assets/testimonialone.png";
import ratingstars from "../../components/Assets/starsrating.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export function Homepage() {
  return (
    <>
      <div className="firstsection">
        <div className="mainsection">
          <div className="main-txt-btn">
            <h2>
              Unbox happiness,<br></br>
              every month.
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </p>
            <button className="subscribe-btn secondary">Subscribe now</button>
          </div>
        </div>
        <div className="rightsection">
          <img src={rightone} alt="" />
          <img src={righttwo} alt="" />
        </div>
      </div>

      <div className="secondsection container sec-pad">
        <div className="featuredon">
          <h5>Featured On</h5>
          <img src={featuredon} alt="" />
        </div>
        <div className="sec-unbox">
          <h2>
            Unbox happiness, <br></br>
            every month
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </p>

          <div className="sec-steps">
            <div className="sec-single-step">
              <img src={step1} alt="step1" />
              <h5>Subscribe to Loti</h5>
              <p>
                Start your wellness journey & get a a new self-care kit
                delivered to your home every month! Starting from CAD $47.95 per
                box
              </p>
            </div>
            <div></div>
            <div className="sec-single-step">
              <img src={step2} alt="step2" />
              <h5>Subscribe to Loti</h5>
              <p>
                Start your wellness journey & get a a new self-care kit
                delivered to your home every month! Starting from CAD $47.95 per
                box
              </p>
            </div>
            <div></div>
            <div className="sec-single-step">
              <img src={step3} alt="step3" />
              <h5>Subscribe to Loti</h5>
              <p>
                Start your wellness journey & get a a new self-care kit
                delivered to your home every month! Starting from CAD $47.95 per
                box
              </p>
            </div>
          </div>
          <button className="subscribe-btn">Subscribe now</button>
        </div>
      </div>

      <div className="thirdsection  sec-pad">
        <div className="singleProd">
          <div className="sp-img">
            <img src={prod1} alt="prod1" />
          </div>
          <div className="sp-text">
            {" "}
            <h4>Lavender body lotion</h4>
            <p className="findout">Find out more</p>
            <p className="text-more-info">
              hasjk hhdgaskjldh klasjdh klsaj hd kasljdhg kashdkjashd kajsdh
              lkasjdh aslkjd haslkdh askdhaslkjdh alksdh askjdh askljdhaskljdh
              askljd haskjdh alskjdhaksdh aksdh askhd aksdh
            </p>
          </div>
        </div>
        <div className="singleProd">
          <div className="sp-img">
            <img src={prod2} alt="prod2" />
          </div>
          <div className="sp-text">
            {" "}
            <h4>Lavender body lotion</h4>
            <p className="findout">Find out more</p>
            <p className="text-more-info">
              hasjk hhdgaskjldh klasjdh klsaj hd kasljdhg kashdkjashd kajsdh
              lkasjdh aslkjd haslkdh askdhaslkjdh alksdh askjdh askljdhaskljdh
              askljd haskjdh alskjdhaksdh aksdh askhd aksdh
            </p>
          </div>
        </div>
        <div className="singleProd">
          <div className="sp-img">
            <img src={prod3} alt="prod3" />
          </div>
          <div className="sp-text">
            {" "}
            <h4>Lavender body lotion</h4>
            <p className="findout">Find out more</p>
            <p className="text-more-info">
              hasjk hhdgaskjldh klasjdh klsaj hd kasljdhg kashdkjashd kajsdh
              lkasjdh aslkjd haslkdh askdhaslkjdh alksdh askjdh askljdhaskljdh
              askljd haskjdh alskjdhaksdh aksdh askhd aksdh
            </p>
          </div>
        </div>
        <div className="singleProd">
          <div className="sp-img">
            {" "}
            <img src={prod2} alt="prod4" />
          </div>
          <div className="sp-text">
            {" "}
            <h4>Lavender body lotion</h4>
            <p className="findout">Find out more</p>
            <p className="text-more-info">
              hasjk hhdgaskjldh klasjdh klsaj hd kasljdhg kashdkjashd kajsdh
              lkasjdh aslkjd haslkdh askdhaslkjdh alksdh askjdh askljdhaskljdh
              askljd haskjdh alskjdhaksdh aksdh askhd aksdh
            </p>
          </div>
        </div>
      </div>

      <div className="fourthsection sec-pad">
        <div className="fourth-txt">
          <h2>Benefits of Loti Wellness</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </p>
        </div>

        <div className="benefits-tabs">
          <div className="benefit-card" id="benefit1">
            <div className="hidden">
              <h4>Boxes come monthly</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              </p>
            </div>
          </div>
          <div className="benefit-card" id="benefit2">
            <div className="hidden">
              <h4>Boxes come monthly</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              </p>
            </div>
          </div>
          <div className="benefit-card" id="benefit3">
            <div className="hidden">
              <h4>Boxes come monthly</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="fifthsection container sec-pad">
        <div className="fifth-images">
          <img src={getlti} alt="" />
        </div>
        <div className="fifth-text">
          <h2>
            Get Your Loti Box <br></br> Today!
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </p>
          <button className="subscribe-btn">Susbscribe now</button>
        </div>
      </div>

      <div className="testimonials sec-pad">
        <div className="testimonial-txt-container">
          <h4>Hear what our customers have to say</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </p>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            600: {
              slidesPerView: 2,
            },
          }}
        >
          <SwiperSlide>
            <div className="single-testimonial">
              <div className="testimonial-img">
                <img src={testimonialone} alt="" />
              </div>
              <div className="testimonial-txt">
                <h6>Jane Cooper</h6>
                <img src={ratingstars} alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minimam,ncididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="single-testimonial">
              <div className="testimonial-img">
                <img src={testimonialone} alt="" />
              </div>
              <div className="testimonial-txt">
                <h6>Jane Cooper</h6>
                <img src={ratingstars} alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minimam,ncididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="single-testimonial">
              <div className="testimonial-img">
                <img src={testimonialone} alt="" />
              </div>
              <div className="testimonial-txt">
                <h6>Jane Cooper</h6>
                <img src={ratingstars} alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minimam,ncididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="single-testimonial">
              <div className="testimonial-img">
                <img src={testimonialone} alt="" />
              </div>
              <div className="testimonial-txt">
                <h6>Jane Cooper</h6>
                <img src={ratingstars} alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minimam,ncididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="single-testimonial">
              <div className="testimonial-img">
                <img src={testimonialone} alt="" />
              </div>
              <div className="testimonial-txt">
                <h6>Jane Cooper</h6>
                <img src={ratingstars} alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minimam,ncididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="subscribe sec-pad">
        <div className="container">
          <div className="giftbox-btn">
            <h3>Get a gift box</h3>
            <button className="subscribe-btn">Get a giftbox</button>
          </div>
          <div className="subscribe-input">
            <h6>LET'S TALK</h6>
            <h3>Our newsletter!</h3>
            <div className="input">
              <input type="text" placeholder="Enter your email here " />
              <button className="subscribe-btn subemail">Sign Up</button>
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
}
