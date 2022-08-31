import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
import AnchorLink from "react-anchor-link-smooth-scroll";

import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Image from "../../components/StrapiImage";
import RichText from "../../components/RichText";
//import { SECTIONS } from "./constants";
import ShareTools from "./ShareTools";
import ReactFlagsSelect from "react-flags-select";

import { useTranslation } from 'react-i18next';

import lessonPlanStyle from "assets/jss/material-kit-pro-react/views/lessonPlanStyle.js";
const useStyles = makeStyles(lessonPlanStyle);

const getLatestSubRelease = (sections) => {
  const versionSection = sections.versions
  if (!versionSection) return null;
  
  const lastRelease =
    versionSection.Data[versionSection.Data.length - 1].sub_releases;
  const lastSubRelease = lastRelease[lastRelease.length - 1];
  return lastSubRelease;
};

const getLanguage = new Intl.DisplayNames(['en'], {type: 'language'})
const countryToLoc= {"US": "en-US", "GB": "en-GB", "NZ": "en-NZ", "FR": "fr", "DE": "de", "IT": "it", "AW": "fr-AW"}

const Header = ({
  availLocales, 
  selectedLocale,
  selectLocale,
  location,
  Title,
  Subtitle,
  SponsoredBy,
  CoverImage,
  SponsorImage,
  Section,
  t, 
  i18n
}) => {
  const classes = useStyles();
  const lastSubRelease = getLatestSubRelease(Section);

  // temporary code until we decide how multiple sponsor images should be displayed
  if (Array.isArray(SponsorImage.url)){
    SponsorImage.url = SponsorImage.url[0]
  }
  
  let countries = []
  let labels = {}

  availLocales.forEach((loc) => {
    const locale = new Intl.Locale(loc)
    countries.push(locale.region);
    labels[locale.region] = { primary: locale.language, secondary: getLanguage.of(loc) };
  })

  return (
    <div className="Header">
      <div className={classes.container}>
        {/* SectionHeading Div used for nav dots */}
        <div
          className="SectionHeading"
          id={t('headers.Title')}
          style={{ padding: 0, margin: 0 }}
        >
          {/* Dots nav text; not displayed on page */}
          <span style={{ display: "none" }}>{t('headers.Title')}</span>
        </div>
        <div style={{display: "flex", justifyContent: "space-between"}}>
          {lastSubRelease && (
            <AnchorLink href="#version_notes" offset="125px">
              <p>
                {t('headers.version')} {lastSubRelease.version} ({t('headers.updated')}{" "}
                {moment(new Date(lastSubRelease.date))
                  .format("MMM D, yyyy")}
                )
              </p>
            </AnchorLink>
          )}
          <ReactFlagsSelect selected={selectedLocale} countries={countries} customLabels={labels} showSelectedLabel={false} showSecondarySelectedLabel={false} showOptionLabel={false} showSecondaryOptionLabel={true} 
          onSelect={countryCode => {
            const loc = countryToLoc[countryCode];
            selectLocale(loc);
            i18n.changeLanguage(loc.replace('-', ''));
          }} placeholder={t('headers.currentLocale') + selectedLocale} alignOptionsToRight={true} fullWidth={false}
          />
        </div>
        <h2>{Title}</h2>
        <h4>{Subtitle}</h4>

        <ShareTools location={location} lessonTitle={Title} />

        <GridContainer className="text-center">
          <div className="col">
            <Image {...CoverImage} className="self-center" />
          </div>
        </GridContainer>
        <GridContainer className="sponsor">
          <GridItem xs={12} sm={9} md={9} className="sponsorDescr">
            <h5>{t('headers.sponsoredBy')}:</h5>
            <RichText content={SponsoredBy} />
          </GridItem>
          <GridItem xs={4} sm={3} md={2} className="sponsorLogo">
            <Image {...SponsorImage} />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
};

Header.propTypes = {
  Title: PropTypes.string,
  Subtitle: PropTypes.string,
  SponsoredBy: PropTypes.string,
  CoverImage: PropTypes.object,
  SponsorImage: PropTypes.object,
};

export default Header;
