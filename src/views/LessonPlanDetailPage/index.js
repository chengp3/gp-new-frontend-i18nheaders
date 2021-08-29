import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import SiteHeader from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

import cachedLessons from "./data/lesson-plans.json";
import { fetchOne } from "./data/lessonsApi";

import Section from "./Section/index";
import Header from "./Header";
import { NUMBERED_SECTIONS } from "./constants";

import "./style.scss";
import Footer from "../../components/Footer/Footer";

import "../../components/NavDots/Dots.css";
import DotPanel from "../../components/LessonDots/DotPanel";
import scrollHandler from "../../components/LessonDots/obs";

import throttle from "lodash.throttle";

const LessonPlan = () => {
  const { lessonId } = useParams();
  const [lesson, setLesson] = useState(
    cachedLessons.find(({ id }) => id.toString() === lessonId.toString())
  );

  useEffect(() => {
    window.addEventListener("scroll", throttle(scrollHandler, 100));
    return () => {
      window.removeEventListener("scroll", throttle(scrollHandler, 100));
    };
  }, []);

  useEffect(() => {
    fetchOne(lessonId, 3000).then(setLesson).catch(console.log);
  }, [lessonId]);

  let numberedElements = 0;

  if (!lesson) return null;

  const renderSection = (section, i) => {
    if (NUMBERED_SECTIONS.indexOf(section.__component) !== -1) {
      numberedElements++;
    }
    return <Section key={i} index={numberedElements} section={section} />;
  };

  return (
    <Fragment>
      <SiteHeader
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="dark"
      />
      <div className="LessonPlan" id="top">
        <Header {...lesson} />

        {lesson.Section &&
          lesson.Section.map((section, i) => renderSection(section, i))}
      </div>
      <DotPanel sections={lesson.Section} />
    </Fragment>
  );
};

export default LessonPlan;
