import React from 'react';
import { Link } from 'react-router-dom';

const Error500 = () => (
  <div className="gx-page-error-container">
    <div className="gx-page-error-content">
      <div className="gx-error-code gx-text-red">500</div>
      <h2 className="gx-text-center">extraPages.500Msg</h2>

      <p className="gx-text-center">
        <Link className="gx-btn gx-btn-primary" to="/">
          extraPages.goHome
        </Link>
      </p>
    </div>
  </div>
);

export default Error500;
