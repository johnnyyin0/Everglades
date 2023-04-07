import React, { useState } from 'react';
import axios from 'axios';

const ReportButton = ({ answerId }) => {
  const [isReported, setIsReported] = useState(false);

  const handleReportClick = () => {
    // console.log('REPORTING: ', answerId)
    if (isReported) {
      return;
    }
    axios.put('/api/answer/report', {answerId})
    .then(()=>{
      // console.log('SUCCESSFULLY REPORTED: ', answerId)
      setIsReported(true)
    })
    .catch(err => {
      console.log('ERROR FOR REPORT: ', err)
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