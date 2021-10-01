import React from 'react';
// import ReactDom from 'react-dom';

import Adds from './Adds';
import DailyHoroscopes from './DailyHoroscopes';
import TalkToAstrologer from './TalkToAstrologer';
import Reports from './Reports';
import AskQues from './AskQues';
import Feedback from './Feedback';

function Home() {
  return (
    <>
      <div className="content_">
        <Adds />
        <DailyHoroscopes />
        <TalkToAstrologer />
        <Reports />
        <AskQues />
        <Feedback />
        <div className="copyright_">
            &copy; Copyright 2020 All Rights Reserved
        </div>
      </div>
    </>
  )
}

export default Home