import React from "react";
import "./AdSection.css"; // Make sure to create the appropriate CSS file
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Slider from "react-slick";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AdSection = () => {
  const customRenderItem = (item, props) => (
    <item.type {...item.props} {...props} />
  );
  function debounce(func, wait) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }

  // Toast messages
  const showAppStoreToast = () =>
    toast("We will soon be available on the App Store.");
  const showPlayStoreToast = () =>
    toast("We will soon be available on the Play Store!");

  // Debounced versions of the toast functions
  const debouncedAppStorePress = debounce(showAppStoreToast, 500);
  const debouncedPlayStorePress = debounce(showPlayStoreToast, 500);

  // Event handlers
  const onAppStorePress = () => debouncedAppStorePress();
  const onPlayStorePress = () => debouncedPlayStorePress();

  return (
    <div className="monument-valley">
      <div className="carousel-container">
        <Carousel
          autoPlay
          renderIndicator={false}
          showThumbs={false}
          infiniteLoop
        >
          <div>
            <img
              src={require("../assets/icons/_img_home.png")}
              alt="Monument Valley 1"
            />
          </div>
          <div>
            <img
              src={require("../assets/icons/_imag_saller2.png")}
              alt="Monument Valley 2"
            />
          </div>
          <div>
            <img
              src={require("../assets/icons/_img_saller.png")}
              alt="Monument Valley 3"
            />
          </div>

          <div>
            <img
              src={require("../assets/icons/_img_order.png")}
              alt="Monument Valley 3"
            />
          </div>
          <div>
            <img
              src={require("../assets/icons/_img_orderHealt.png")}
              alt="Monument Valley 3"
            />
          </div>
          <div>
            <img
              src={require("../assets/icons/_img_payement.png")}
              alt="Monument Valley 3"
            />
          </div>
        </Carousel>
      </div>
      <div className="description-container">
        <img
          src={require("../assets/icons/_ic_tshirt.png")}
          alt="Monument Valley Icon"
          className="app-icon"
        />
        <h1>Done</h1>
        <p className="byline">By Appcontrivace Pvt. Ltd.</p>
        <p className="byline">We Deliver Trust</p>
        <div className="download-buttons">
          <a href="#" onClick={onAppStorePress} className="app-store-btn">
            Download on the App Store
          </a>
          <a href="#" onClick={onPlayStorePress} className="play-store-btn">
            Get it on Google Play
          </a>
        </div>
        <div className="description">
          <p>
            Introducing Done: your go-to destination for buying and selling
            clothing! Seamlessly list your brand's latest collections or
            discover unique styles from top designers. Shop and sell
            effortlessly with our user-friendly interface. Join our
            fashion-forward community today!
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdSection;
