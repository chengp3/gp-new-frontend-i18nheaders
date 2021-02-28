import React, { useState } from "react";
import PropTypes from "prop-types";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import Dimension from "./Dimension";

const Subject = ({ sets, subject }) => {
  const [expanded, expand] = useState(true);

  return (
    <ExpansionPanel expanded={expanded} onChange={() => expand(!expanded)}>
      <ExpansionPanelSummary
        className="ExpansionPanelSummary"
        expandIcon={<ExpandMoreIcon />}
      >
        <h4>
          {subject} - {sets[0].name}
        </h4>
      </ExpansionPanelSummary>

      <ExpansionPanelDetails>
        {sets[0].dimensions.map((dim, i) => (
          <Dimension key={i} {...dim} />
        ))}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

Subject.propTypes = {
  sets: PropTypes.array,
  subject: PropTypes.string,
};

export default Subject;
