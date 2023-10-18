import React from 'react';

const Notices = () => {
  const notices = [
    { title: 'Notice 1', pdfLink: 'pdf1.pdf' },
    { title: 'Notice 2', pdfLink: 'pdf2.pdf' },
    { title: 'Notice 3', pdfLink: 'pdf3.pdf' },
    { title: 'Notice 4', pdfLink: 'pdf4.pdf' },
    { title: 'Notice 5', pdfLink: 'pdf5.pdf' },
  ];

  return (
    <div className="notices-container">
      <div className="notices-card">
        {notices.map((notice, index) => (
          <div key={index} className="notice">
            <h3>{notice.title}</h3>
            <a href={notice.pdfLink} target="_blank" rel="noopener noreferrer">
              View PDF
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notices;
