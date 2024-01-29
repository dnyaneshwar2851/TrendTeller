import React from "react";

export default function About(props) {
  let myStyle = {
    color: props.mode === "dark" ? "white" : "#042743",
    backgroundColor: props.mode === "dark" ? "rgb(36 74 104)" : "white",
  };

  return (
    <div className="container">
      <h1
        className="my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        About Us
      </h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong> What TrendTeller Offers </strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Welcome to TrendTeller - Unveiling Tomorrow's Headlines Today!
              Discover the Pulse of the Present and the Trends of Tomorrow with
              TrendTeller! In a fast-paced world, staying ahead is not just an
              advantage; it's a necessity. Introducing TrendTeller, your go-to
              source for breaking news, trendspotting, and thought-provoking
              analysis. We are not just a news app; we are your trend
              forecasters, delivering the news that shapes the future. Key
              Features: 1. Trend Forecasting: At TrendTeller, we don't just
              report the news; we predict the trends. Our expert analysts sift
              through the noise to bring you stories that will shape the world
              of tomorrow. 2. Live Trend Feed: Immerse yourself in the latest
              trends with our live feed. From emerging technologies to cultural
              shifts, TrendTeller keeps you informed about the forces driving
              change. 3. Trending Stories: Be the first to know what's buzzing.
              Our algorithm ensures that you're always in the loop, highlighting
              the stories gaining traction across various industries and
              communities. 4. Future Insights: Gain a competitive edge with our
              in-depth future insights. TrendTeller provides analyses that go
              beyond the surface, helping you anticipate and adapt to upcoming
              trends. 5. Custom Trend Watchlists: Tailor your news feed with our
              trend watchlists. Whether you're into tech innovations, lifestyle
              trends, or global affairs, TrendTeller lets you curate your news
              experience. Why TrendTeller? Proactive News Consumption: Stay
              ahead of the curve and make informed decisions. TrendTeller
              empowers you to anticipate changes and be at the forefront of
              what's next. Trend Community: Join a community of trend
              enthusiasts. Share your insights, engage in discussions, and be a
              part of a dynamic community that thrives on staying ahead of the
              trends. User-Friendly Interface: TrendTeller is designed for
              seamless navigation. Our intuitive interface ensures that you
              spend less time searching for news and more time exploring the
              trends that matter to you. Use TrendTeller now and step into a
              world where news isn't just about today; it's about tomorrow.
              Embrace the future with TrendTeller - where trends meet
              storytelling.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to use </strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Free to Use Empowering Access to Trends, Always Free! At
              TrendTeller, we believe in making trendspotting and insightful
              news accessible to everyone. Our commitment to democratizing
              information means that the core features of TrendTeller are
              available to you completely free of charge. What You Get for Free:
              Real-Time Trend Feed: Stay on top of the latest trends across
              various industries with our live feed, updated in real-time.
              Trending Stories: Explore and engage with trending stories from
              around the world without any subscription fees. Community Access:
              Join our vibrant community of trend enthusiasts, share your
              insights, and be part of the conversation. Personalized Trend
              Watchlists: Tailor your news feed by creating personalized trend
              watchlists to match your specific interests. No Hidden Costs, No
              Paywalls: TrendTeller is committed to providing a seamless and
              enriching experience without burdening you with hidden costs. We
              believe that staying informed about the future should be
              accessible to everyone.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible </strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              This News Application software works in any web browsers such as
              Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to
              count characters in facebook, blog, books, excel document, pdf
              document, essays, etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
