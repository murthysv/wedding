import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Countdown from 'react-countdown';
import { CopyToClipboard } from "react-copy-to-clipboard";
import Notifications, { notify } from "react-notify-toast";


import { Row, Button } from "react-bootstrap";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import Youtube from "content/assets/images/about/insert.jpeg";
import YoutubeHover from "content/assets/images/about/insert.jpeg";
import "./Portfolio.scss";

const Portfolio = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header, subheader } = frontmatter;

  const copiedToClipboard= () => {
    const alertColor = { background: "#9ebc9f", text: "white" };
    notify.show(
      "Hashtag copied to clipboard. Take a selfie and tag us on social media!",
      "custom",
      5000,
      alertColor
    );
  }

  const Completionist = () => {
    return (
      <span className="finishedCountdown">
        <div className="countdownIntro">
            The ceremony is now live!
          </div>
          <div className="joinButtonWrapper">
            <div>
              <a
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
                rel="noreferrer"
              >
                <Button size="xl" variant="primary" className="text-uppercase main-button join-now">
                  <p className="buttonTitle">Watch Now!</p>
                </Button> <br/>
              </a>
            </div>
          </div> {/* joinButtonWrapper */}

      </span> // finishedCountdown
    )
  }

      
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    }
    if (days != 0) {
      return
      <div>
        <div className="joinButtonWrapper">
          <div>
            <a
              href="https://forms.gle/p8MaA7j8VzBq9cQf8"
              target="_blank"
              rel="noreferrer"
            >
            <Button size="xl" variant="primary" className="text-uppercase main-button join-now">
              <p className="buttonTitle">RSVP!</p>
            </Button> <br/>
            </a>
          </div>
        </div>
      <div>
    }	    
    if ((days === 0 && hours === 0 && minutes === 15 && seconds === 0) || (days === 0 && hours === 0 && minutes < 15)) {
      return <div>
        <div className="countdownAndMusic">
          <div className="countdownIntro">
            The ceremony will begin in
          </div>
          <div className="countdownWrapper">
            <div className="countdownSection">
              <div className="countWrapper">
                <div className="count">
                  {days} 
                </div>
                <div className="unit">
                  days
                </div>
              </div>
              <div className="countWrapper">
                <div className="count">
                  {hours} 
                </div>
                <div className="unit">
                  hours
                </div>
              </div>
            </div>
            <div className="countdownSection">
              <div className="countWrapper">
                <div className="count">
                  {minutes} 
                </div>
                <div className="unit">
                  minutes
                </div>
              </div>
              <div className="countWrapper">
                <div className="count">
                  {seconds} 
                </div>
                <div className="unit">
                  seconds
                </div>
              </div>
            </div>
          </div>
          <div className="joinButtonWrapper">
            <div>
              <a
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
                rel="noreferrer"
              >
                <Button size="xl" variant="primary" className="text-uppercase main-button join-now">
                  <p className="buttonTitle">Watch Now!</p>
                </Button> <br/>
              </a>
            </div>
          </div>
                  </div>
      </div>
    }
    // Render a countdown
    return <span>
        <div className="countdownAndDrive">
          <div className="countdownIntro">
            The ceremony will begin in
          </div> {/* countdownIntro */}
          <div className="countdownWrapper">
            <div className="countdownSection">
              <div className="countWrapper">
                <div className="count">
                  {days} 
                </div> {/* count */}
                <div className="unit">
                  days
                </div> {/* unit */}
              </div> {/* countWrapper */}
              <div className="countWrapper">
                <div className="count">
                  {hours} 
                </div> {/* count */}
                <div className="unit">
                  hours
                </div> {/* unit */}
              </div> {/* countWrapper */}
            </div> {/* countdownSection */}
            <div className="countdownSection">
              <div className="countWrapper">
                <div className="count">
                  {minutes} 
                </div> {/* count */}
                <div className="unit">
                  minutes
                </div> {/* unit */}
              </div> {/* countWrapper */}
              <div className="countWrapper">
                <div className="count">
                  {seconds} 
                </div> {/* count */}
                <div className="unit">
                  seconds
                </div> {/* unit */}
              </div> {/* countWrapper */}
            </div> {/* countdownSection */}
          </div> {/* countdownWrapper */}
          <div className="driveWrapper">
            <p className="checkOut">
              Check out 
              <a 
                href="https://drive.google.com"
                className="spacedCountdownLinks"
                target="_blank"
                rel="noreferrer"
              >
                Engagement Pictures
              </a>
              while you wait!
            </p>
          </div> {/* driveWrapper */}
        </div> {/* countdownAndDrive */}
      </span>;
  };

  return (
    <div className="outerWrapper">
      <PageSection className={clsx("portfolio-section", className)} id={anchor}>
        <Notifications options={{zIndex: 200, top: '50px'}} />
        <Row className="justify-content-center ceremony-header">
          <SectionHeader header={header} subheader={subheader}/>
          <CopyToClipboard text="#KaraMayo2022">
            <button
              onClick={copiedToClipboard}
              id="copy-to-clipboard"
              variant="primary"
              type="button" 
              size="xl"
              className="hashtag"
            >
              #KaraMayo2022
            </button>
          </CopyToClipboard>
        </Row>
        <div className="countdownAndVideoDiv">
          <Row>
            <Countdown
              date='2022-06-09T09:00:00+05:00'
              renderer={renderer}
            />
          </Row>
          <Row>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              rel="noreferrer"
              className="youtubeLink"
            >
              <div
                className="container"
              >
                <img 
                  src={Youtube} 
                  alt="youtubeLink" 
                  className="image"
                  width="560" 
                  height="auto"
                />
                <div className="middle">
                  <img 
                    src={YoutubeHover} 
                    alt="youtubeLink" 
                    className="imageHover"
                    width="560" 
                    height="auto"
                  />
                </div> {/* middle */}
              </div> {/* container */}
            </a>
          </Row>
        </div> {/* countdownAndVideoDiv */}
      </PageSection>
    </div>
  );
};

Portfolio.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Portfolio.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Portfolio;
