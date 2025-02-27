import React from 'react';
import { Page } from 'zmp-ui';

const NongHo = ({ cauHoiContent }) => {
  return (
    <Page className="page">
      <div className="section-container">
        <h1>Nông Hộ</h1>
        <p>{cauHoiContent}</p>
      </div>
    </Page>
  );
};

export default NongHo;