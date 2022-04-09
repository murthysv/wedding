import React from "react";
import PropTypes from "prop-types";

import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Popup from "reactjs-popup";
import Countdown from 'react-countdown';
import useSmoothScrollTo from "hooks/useSmoothScrollTo";
import ImageCard from "components/ImageCard";

const Top = ({ frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { header, subheader, imageFileName, jumpToAnchor } = frontmatter;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const scrollToSection = useSmoothScrollTo(jumpToAnchor);
 
  const renderer = ({ days }) => {
    if ( days <=0 ) {
      // Render a completed state
      return (
        <Button size="xl" variant="primary" className="text-uppercase main-button" onClick={scrollToSection}>
          <p className="buttonTitle">Watch Now!</p>
        </Button>
      );
    } 
    return (
      <Popup
        modal
        trigger={
          <Button size="xl" variant="primary" className="text-uppercase main-button" onClick={() => openInNewTab('https://forms.gle/a2XU4G1dQ3eahLDH7')}>
            <p className="buttonTitle">RSVP</p>
          </Button>
        }
      >
        {close => (
        <div className="addToCalModal">
          <button type="button" className="close" onClick={close}>
            &times;
          </button>
        </div> // addToCalModal
        )
      }
      </Popup>
    )
  }

  const extraInfoPart = (
    <Countdown
      date='2022-06-09T09:00:00+5:00'
      renderer={renderer}
    />
  );

  return (
    <ImageCard
      imageFileName={imageFileName}
      header={header}
      subheader={subheader}
      extraInfo={extraInfoPart}
    />
  );
};

Top.propTypes = {
  frontmatter: PropTypes.object,
};

Top.defaultProps = {
  frontmatter: null,
};

export default Top;
