import React from "react";
import cardImageOne from "../../assets/images/tailwind-img.webp";
import cardImageTwo from "../../assets/images/cardImageTwo.webp";
import cardImageThree from "../../assets/images/cardImageThree.webp";
import serviceImageOne from "../../assets/images/service-image-one.webp";
import serviceImageTwo from "../../assets/images/service-image-two.webp";
import serviceImageThree from "../../assets/images/service-image-three.webp";
import serviceImageFour from "../../assets/images/service-image-four.webp";
import serviceImageFive from "../../assets/images/service-image-five.webp";
import serviceImageSix from "../../assets/images/service-image-six.webp";
import "../../fonts.css";
/**Importing conponents */
import Navbar from "../Navbar/Navbar";
const Home = () => {
  return (
    <>
      <header>
        <div className="max-w-[1200px] m-auto px-4 py-0">
            <Navbar/>
        </div>
      </header>
      <section className="collegeEassy">
        <div className="container max-w-[1200px] m-auto px-4 py-0">
          <div className="collegeEassyWrap mt-[68px] mb-[68px]">
            <h1 className="text-center font-[700] text-[44px] text-[#231F20]">
              Why Our Economics Essay Service Stands Out
            </h1>
            <p className="text-center font-[450] text-[18px] text-[#231F20] w-[909px] m-auto mt-[19px] leading-[27px]">
              From experienced professionals to personalized support, discover
              how our economics essay writing service can take your academic
              success to the next level.
            </p>
            <div className="max-w-[1012px] flex justify-between m-auto mt-[60px] col-gap-8">
              {/* Card one*/}
              <div className="max-w-[304px] px-[15px] py-[38px] border rounded-2xl">
                <img
                  className="m-auto"
                  src={cardImageOne}
                  alt="tailwind image"
                />
                <h1 className="text-center font-[600] mt-[20px] mb-[24px] text-[18px] text-[#231F20]">
                  Expert writers
                </h1>
                <p className="text-center text-[14px] font-[400]">
                  Writers from Stanford, Harvard, Columbia, and Oxford are
                  waiting to help you with your economics essay!
                </p>
              </div>
              {/* Card Two*/}
              <div className="max-w-[304px] px-[15px] py-[38px] border rounded-2xl">
                <img
                  className="m-auto"
                  src={cardImageTwo}
                  alt="tailwind image"
                />
                <h1 className="text-center font-[600] mt-[20px] mb-[24px] text-[18px] text-[#231F20]">
                  Affordable pricing
                </h1>
                <p className="text-center text-[14px] font-[400]">
                  Prices that fit any budget - starting at just $11/page you can
                  get your economics essay easily!
                </p>
              </div>
              {/* Card Three*/}
              <div className="max-w-[304px] px-[15px] py-[38px] border rounded-2xl">
                <img
                  className="m-auto"
                  src={cardImageThree}
                  alt="tailwind image"
                />
                <h1 className="text-center font-[600] mt-[20px] mb-[24px] text-[18px] text-[#231F20]">
                  24/7 customer support
                </h1>
                <p className="text-center text-[14px] font-[400]">
                  We want you to be happy with your essay. If you're not, we'll
                  revise it for free!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* our service section */}
      <section className="ourServices bg-[#F8FCFF]">
        <div className="container max-w-1200 m-auto px-4">
          <div className="ourServicesWrap pt-[60px] pb-[149px]">
            <h2 className="text-center text-[44px] text-[#231F20]">
              Our Service Features
            </h2>
            <p className="text-center mt-[19px] mb-[60px]">
              Our service is designed to make your life easier. Here are just a
              few of the features that help you make the most out of our
              service:
            </p>
            <div className="max-w-[950px] m-auto flex flex-wrap justify-between gap-y-[51px]">
              {/*Card one*/}
              <div className="max-w-[425px] flex gap-x-[15px] align-center">
                <div>
                  <img
                    className="max-w-none h-auto"
                    src={serviceImageOne}
                    alt="image one"
                  />
                </div>
                <div>
                  <h2 className="text-[16px] text-[#231F20]">
                    Online Order Tracking
                  </h2>
                  <p className="text-[14px] text-[#221F1F] mt-[15px]">
                    Never lose track of your order - get regular updates and
                    check the progress through the student portal.
                  </p>
                </div>
              </div>
              {/*Card Two*/}
              <div className="max-w-[425px] flex gap-x-[15px] align-center">
                <div>
                  <img
                    className="max-w-none h-auto"
                    src={serviceImageTwo}
                    alt="image one"
                  />
                </div>
                <div>
                  <h2 className="text-[16px] text-[#231F20]">
                    On-time delivery
                  </h2>
                  <p className="text-[14px] text-[#221F1F] mt-[15px]">
                    6-12-24 hours - no deadline is too difficult for us as we
                    always deliver within the agreed timeframe!
                  </p>
                </div>
              </div>
              {/*Card Three*/}
              <div className="max-w-[425px] flex gap-x-[15px] align-center">
                <div>
                  <img
                    className="max-w-none h-auto"
                    src={serviceImageThree}
                    alt="image one"
                  />
                </div>
                <div>
                  <h2 className="text-[16px] text-[#231F20]">
                    Customized essays
                  </h2>
                  <p className="text-[14px] text-[#221F1F] mt-[15px]">
                    Whether it’s the choice of sources or the formatting of
                    citations - we keep your requirements in mind!
                  </p>
                </div>
              </div>
              {/*Card Four*/}
              <div className="max-w-[425px] flex gap-x-[15px] align-center">
                <div>
                  <img
                    className="max-w-none h-auto"
                    src={serviceImageFour}
                    alt="image one"
                  />
                </div>
                <div>
                  <h2 className="text-[16px] text-[#231F20]">
                    Plagiarism-free Guarantee
                  </h2>
                  <p className="text-[14px] text-[#221F1F] mt-[15px]">
                    You get 100% unique essays written from scratch with a FREE
                    Turnitin report showing originality.
                  </p>
                </div>
              </div>
              {/*Card Five*/}
              <div className="max-w-[425px] flex gap-x-[15px] align-center">
                <div>
                  <img
                    className="max-w-none h-auto"
                    src={serviceImageFive}
                    alt="image one"
                  />
                </div>
                <div>
                  <h2 className="text-[16px] text-[#231F20]">
                    Confidentiality
                  </h2>
                  <p className="text-[14px] text-[#221F1F] mt-[15px]">
                    Your payment data, personal information, and assignments are
                    never shared with your peers, teachers, or other clients.
                  </p>
                </div>
              </div>
              {/*Card Six*/}
              <div className="max-w-[425px] flex gap-x-[15px] align-center">
                <div>
                  <img
                    className="max-w-none h-auto"
                    src={serviceImageSix}
                    alt="image one"
                  />
                </div>
                <div>
                  <h2 className="text-[16px] text-[#231F20]">Free Features</h2>
                  <p className="text-[14px] text-[#221F1F] mt-[15px]">
                    With each paid order you get a FREE title page, bibliography
                    section, formatting, proofreading, and editing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
