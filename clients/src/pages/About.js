import React from "react";
import Layout from "../compoents/Layout/Layout";

const About = () => {
    return (
      <Layout>
        <div className="row contactus ">
          <div className="col-md-6 ">
            <img
              src="/img/aboutus.jpg"
              alt="contactus"
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-md-4">
            <p className="text-justify mt-2">

            <b>About Us</b>
            <br></br>
            <br></br>
            <br></br>
            

            Welcome to Threads & Trends, your ultimate destination for the latest in fashion and style. At Threads & Trends, we believe that clothing is more than just fabric—it's an expression of who you are. Our mission is to provide you with a diverse range of high-quality, stylish apparel that caters to every personality and occasion. Whether you're looking for timeless classics, contemporary trends, or unique statement pieces, we have something for everyone. Our carefully curated collections are designed to inspire and empower you to create your own personal style. With a commitment to exceptional customer service and a seamless shopping experience, Threads & Trends is here to make fashion accessible and enjoyable for all. Join us on this sartorial journey and discover the perfect pieces to enhance your wardrobe. Fashion is fleeting, but style is forever. Welcome to Threads & Trends—where your style story begins.
            </p>
          </div>
        </div>
      </Layout>
    );
  };

export default About;