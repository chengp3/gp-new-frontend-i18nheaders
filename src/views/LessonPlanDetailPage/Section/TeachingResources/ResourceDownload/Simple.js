import React from "react";
import PropTypes from "prop-types";

import RichText from "../../../../../components/RichText";
import ICONS from "../../../icons";

const SimpleResourceDownload = ({
  Title,
  Description,
  DownloadGroups = [],
}) => {
  // eslint-disable-next-line
  const renderDownloadGroup = ({ Name, Downloads = [] }, i) => {
    if (Downloads.length === 0 && !Name) return null;

    return (
      <div className="row" key={i}>
        {Name && <div className="col-md-auto">{Name}:</div>}
        {Downloads.map(renderDownload)}
      </div>
    );
  };

  // eslint-disable-next-line
  const renderDownload = ({ Label, Link }, i) => {
    let icon = "📄";

    for (const slug in ICONS) {
      // eslint-disable-next-line
      if (Label.match(new RegExp(slug, "gi"))) icon = ICONS[slug];
    }

    return (
      <div className="col-md-auto" key={i}>
        {icon}{" "}
        <a href={Link} target="_blank" rel="noopener noreferrer">
          {Label}
        </a>
      </div>
    );
  };

  return (
    <div className="SimpleResourceDownload">
      <RichText content={"**" + Title + ":** " + Description} />
      {DownloadGroups.map(renderDownloadGroup)}
    </div>
  );
};

SimpleResourceDownload.propTypes = {
  Title: PropTypes.string,
  Description: PropTypes.object,
  DownloadGroups: PropTypes.arrayOf(
    PropTypes.shape({
      Name: PropTypes.string,
      Downloads: PropTypes.array,
    })
  ),
};

export default SimpleResourceDownload;
