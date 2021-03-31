/*eslint-disable*/
import React, { useState, useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Footer from "components/Footer/Footer.js";

import { ModalTable } from "../modalTable/ModalTable";
// @material-ui/core components

// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import CardAvatar from "components/Card/CardAvatar.js";
import brick1 from "assets/img/faces/brick1.jpg";
import branch2 from "assets/img/faces/branch2.jpg";
import vertBracket from "assets/img/jobviz-vert-bracket.png";
import vertStem from "assets/img/jobviz-vert-stem.png";

import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Dialog from "@material-ui/core/Dialog";
// import DialogTitle from "@material-ui/core/DialogTitle";
// import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Slide from "@material-ui/core/Slide";
// import Close from "@material-ui/icons/Close";
// import { cardTitle } from "assets/jss/material-kit-pro-react.js";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

// const style = {
//   cardTitle,
//   textCenter: {
//     textAlign: "center",
//   },
//   textRight: {
//     textAlign: "right",
//   },
// };

// sections for this page Added by JOB VIZ TEAM
import { Link } from "react-router-dom";

import JobManager from "../modules/JobManager";
//Custom Jobviz Styling
import "../styling/Style.css";
import { makeUrlPath, compare, addIdPathway } from "../Helper";
import { LrAutoSearchV2 } from "../search/LRautoSearchV2";
import { Level2Card } from "./Level2Card";
// sections for this page Added by JOB VIZ TEAM


import JobVizHeader from "../modules/JobVizComponents";
import JobVizStyle from "assets/jss/material-kit-pro-react/views/JobVizStyle.js";
import GPcopyrightFooter from "../../../components/Footer/GPcopyrightFooter";

const useStyles = makeStyles(JobVizStyle);

export const Level2List = (props) => {
  const level = props.level1;
  const [classicModal, setClassicModal] = React.useState(false);
  const [originalJobs, setOriginalJobs] = useState([]);
  const [jobs, setJobs] = useState([]);
  //alphabatized jobs Array
  const alphaList = jobs.sort(compare);
  const [jobTitleList, setJobTitleList] = useState([]);
  const [jobObject, setJobObject] = useState({
    id: 0,
    title: "",
    Hierarchy: "",
    OccupationType: "",
    Employment2016: 0,
    Employment2026: 0,
    ChgEmploy2016to26Num: 0,
    ChgEmploy2016to26Perc: 0,
    PercentSelfEmployed2016: 0,
    OccupationalOpenings2016to2026AnnualAverage: 0,
    MedianAnnualWage2017: "",
    TypicalEducationNeededForEntr: "",
    WorkExperienceInARelatedOccupation: "",
    TypicalOnTheJobTrainingNeededToAttainCompetencyInTheOccupation: "",
    ttl: "",
    Level0: "",
    Level4: "",
    Level3: "",
    Level2: "",
    Level1: "",
    pathString: "",
    Def: "",
    children: [],
    parent: [],
  });

  const isModalSetToTrue = () => {
    if (classicModal === false) {
      console.log('False')
    } else {console.log('True')}
  }

  //Make Parent and grandparent Names into url frienldy stirng
  const title = makeUrlPath(jobObject.title);

  ////FETCH ORIGINAL JOB DATA
  useEffect(() => {
    isModalSetToTrue();
    JobManager.getAll().then((jobs) => {
      setOriginalJobs(jobs);
    });
  }, []);

  /////// I need to get the jobObject
  const getJobObject = (level) => {
    jobs.map((job) => {
      if (parseInt(level) === job.id) {
        setJobObject(job);
      }
    });
  };

  useEffect(() => {
    isModalSetToTrue();
    setJobs(addIdPathway(originalJobs));
  }, [originalJobs]);

  useEffect(() => {
    isModalSetToTrue();
    ///Set job object to state
    getJobObject(level);

    //get all job Titles for AutoSearch
    const getAllJobNames = (jobs) => {
      let jobTList = [];
      jobs.forEach((job) => {
        if (!jobTList.includes(job.title)) {
          jobTList.push(job.title);
        }
      });
      setJobTitleList(jobTList);
    };
    ////Call the Function
    getAllJobNames(jobs);
  }, [jobs, level]);

  //THis causes the page to jump to top and it's super not helpful with all the navigation buttons
  // React.useEffect(() => {
  //   window.scrollTo(0, 0);
  //   document.body.scrollTop = 0;
  // });
  const classes = useStyles();
  return (
    <div>
      <Header
        brand="Galactic Polymath"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 50,
          color: "dark",
        }}
      />

      <Parallax className={classes.bgColor} small>
        <div className={classes.container}>
          <GridContainer
            style={{placeItems: "center"}}
          >
            <GridItem
              xs={12}
              sm={12}
              md={6}

              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textLeft
              )}

            >
              <JobVizHeader />
            </GridItem>
            <GridItem
                xs={12}
                sm={12}
                md={6}
                className={classNames(
                    classes.hideLogo,
                    classes.mlAuto,
                    classes.mrAuto,
                    classes.textLeft
                )}
            >
              <img
                src={require("assets/img/hero-images/JobViz_Bubble.svg")}
                height="auto"
                width="120%"
                style={{paddingTop:"2rem"}}
                alt={"horizontal lines with bubbles, background pattern"}
              />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.main}>
          <GridContainer>
            <GridItem>
              {/* //////////////// S E A R C H  C O M P O N E N T///////////////// */}
              <LrAutoSearchV2
                jobs={jobs}
                jobTitleList={jobTitleList}
                {...props}
              />
            </GridItem>
          </GridContainer>
        </div>

        {/* //////////////// C R U M B S////////////////// */}
        <div className={classes.container}>
          <div id="crumb-container">
            <div className="crumb-img-container">
              <img
                style={{ height: "40px", width: "40px" }}
                src={brick1}
                alt="brick nodes"
              />

              <h6>
                <Link to={`/jobviz`}>Job Categories</Link>
              </h6>
            </div>
            <div className="crumb-img-container">
              <img className="vert-stem-img" src={vertStem} alt="..." />
            </div>
          </div>
          {/* //////////////// P A R E N T ////////////////// */}
          <div className="crumbs">
            <Card className={classes.textCenter} style={{ width: "20rem" }}>
              <CardAvatar profile>
                <a href="" onClick={(e) => e.preventDefault()}>
                  <img src={branch2} alt="..." />
                </a>
              </CardAvatar>
              <CardBody>
                <h4 className={classes.cardTitle}>{jobObject.title}</h4>

                <Button
                  onClick={() => {
                    setClassicModal(true);
                  }}
                  color={"primary"}
                >
                  <LibraryBooks />
                  Details
                </Button>

                <Dialog
                  classes={{
                    root: classes.modalRoot,
                    paper: classes.modal,
                  }}
                  open={classicModal}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={() => setClassicModal(false)}
                  aria-labelledby="classic-modal-slide-title"
                  aria-describedby="classic-modal-slide-description"
                >
                  <ModalTable jobObject={jobObject} />
                  <DialogActions className={classes.modalFooter}>
                    <Button
                      onClick={() => setClassicModal(false)}
                      color="danger"
                      simple
                    >
                      Close
                    </Button>
                  </DialogActions>
                </Dialog>
              </CardBody>
            </Card>
          </div>

          {/* Where children are mapped out to individual card component */}
          <div className={classes.container}>
            <img className="vert-bracket-img" src={vertBracket} alt="..." />

            <div className="card-child-container">
              {alphaList.map((job) => {
                for (let j = 0; j <= jobObject.children.length; j++) {
                  if (jobObject.children[j] === job.id) {
                    return (
                      <Level2Card
                        titleParent={title}
                        key={job.id}
                        level={level}
                        job={job}
                        {...props}
                      />
                    );
                  }
                }
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer
        content={
          <div>
            {/*<div className={classes.left}>*/}
            {/*  <List className={classes.list}>*/}
            {/*    <ListItem className={classes.inlineBlock}>*/}
            {/*      <a*/}
            {/*        href="https://www.creative-tim.com/?ref=mkpr-pricing"*/}
            {/*        target="_blank"*/}
            {/*        className={classes.block}*/}
            {/*      >*/}
            {/*        Creative Tim*/}
            {/*      </a>*/}
            {/*    </ListItem>*/}
            {/*    <ListItem className={classes.inlineBlock}>*/}
            {/*      <a*/}
            {/*        href="https://www.creative-tim.com/presentation?ref=mkpr-pricing"*/}
            {/*        target="_blank"*/}
            {/*        className={classes.block}*/}
            {/*      >*/}
            {/*        About us*/}
            {/*      </a>*/}
            {/*    </ListItem>*/}
            {/*    <ListItem className={classes.inlineBlock}>*/}
            {/*      <a href="//blog.creative-tim.com/" className={classes.block}>*/}
            {/*        Blog*/}
            {/*      </a>*/}
            {/*    </ListItem>*/}
            {/*    <ListItem className={classes.inlineBlock}>*/}
            {/*      <a*/}
            {/*        href="https://www.creative-tim.com/license?ref=mkpr-pricing"*/}
            {/*        target="_blank"*/}
            {/*        className={classes.block}*/}
            {/*      >*/}
            {/*        Licenses*/}
            {/*      </a>*/}
            {/*    </ListItem>*/}
            {/*  </List>*/}
            {/*</div>*/}
            <GPcopyrightFooter/>
          </div>
        }
      />
    </div>
  );
};
