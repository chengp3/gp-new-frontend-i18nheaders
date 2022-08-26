import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import RichText from "../../../../components/RichText";

import './style.scss'

import lessonPlanStyle from "assets/jss/material-kit-pro-react/views/lessonPlanStyle.js";
import CollapsibleSection from "../CollapsibleSection";
import Carousel from "./Carousel";
import Card from "components/Card/Card.js";
const useStyles = makeStyles(lessonPlanStyle);


const Preview = ({
  index,
  SectionTitle,
  InitiallyExpanded,
  Multimedia,
  QuickPrep,
  t
}) => {
  const classes = useStyles();
  return (
    <CollapsibleSection
      className="Preview CollapsibleTextSection"
      index={index}
      SectionTitle={t('headers.Preview')}
      initiallyExpanded={InitiallyExpanded !== false}
    >
      <div className={classes.container}>
        <Card className={classes.quickPrep}>
          <h5>{t('headers.teachItIn15')}</h5>
          <RichText content={QuickPrep} />
        </Card>
        {Multimedia && <Carousel items={Multimedia} /> }
      </div>
    </CollapsibleSection>
  );
};

Preview.propTypes = {
  Content: PropTypes.string,
};

export default Preview;
