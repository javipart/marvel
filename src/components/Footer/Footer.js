import React from 'react';
import CopyrightIcon from '@mui/icons-material/Copyright';
import './footer.css';

const Footer = () => (
  <footer className="page-footer indigo">
    <div className="footer-copyright">
      <div className="container">
        <div
          style={{
            display: 'inline-flex',
            verticalAlign: 'text-bottom',
            boxSizing: 'inherit',
            textAlign: 'center',
            alignItems: 'center',
          }}
        >
          <CopyrightIcon />&nbsp;&nbsp;Derechos reservados javipart
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;