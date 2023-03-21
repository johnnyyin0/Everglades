import React, { useState } from 'react';
import axios from 'axios';

const ReportButton = ({ answerId }) => {
  const [isReported, setIsReported] = useState(false);

  const handleReportClick = () => {
    // console.log('REPORTING: ', answerId)
    if (isReported) {
      return;
    }
    axios.put('http://localhost:3000/answer/report', {answerId})
    .then(()=>{
      setIsReported(true)
      // console.log('SUCCESSFULLY REPORTED: ', answerId)
    })
    .catch(err => {
      console.log('THIS IS ERROR FOR REPORT: ', err)
    })
  };

  return (
    <>
      <span
        style={{
          textDecoration: isReported ? 'none' : 'underline',
          cursor: 'pointer',
        }}
        onClick={handleReportClick}
      >
        {isReported ? 'Reported' : 'Report'}
      </span>
    </>
  );
};

export default ReportButton;