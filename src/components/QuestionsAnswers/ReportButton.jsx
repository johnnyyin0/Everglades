import React, { useState } from 'react';
import axios from 'axios';

const ReportButton = ({ answerId }) => {
  const [isReported, setIsReported] = useState(false);

  const handleReportClick = () => {
    if (isReported) {
      return;
    }
    axios.put('/api/answer/report', { answerId })
      .then(() => {
        setIsReported(true);
      })
      .catch(err => {
        console.log('ERROR FOR REPORT: ', err);
      });
  };

  return (
    <>
      <span
        style={{
          textDecoration: isReported ? 'none' : 'underline',
          cursor: 'pointer',
          pointerEvents: isReported ? 'none' : 'auto',
        }}
        onClick={handleReportClick}
      >
        {isReported ? 'Reported!' : 'Report'}
      </span>
    </>
  );
};

export default ReportButton;