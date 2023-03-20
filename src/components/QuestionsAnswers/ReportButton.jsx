import React, { useState } from 'react';

//MODAL(STILL WIP)
const Report = ({ answerId }) => {
  const [showModal, setShowModal] = useState(false);

  const handleReportClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleReportSubmit = (e) => {
    e.preventDefault();
    setShowModal(false);
  };

  return (
    <>
      <span style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={handleReportClick}>
        Report
      </span>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleModalClose}>
              &times;
            </span>
            <h2>Report Answer</h2>
            <p>Are you sure you want to report this answer?</p>
            <form onSubmit={handleReportSubmit}>
              <button type="submit">Yes</button>
              <button type="button" onClick={handleModalClose}>
                No
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Report;