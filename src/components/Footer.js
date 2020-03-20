import React from 'react';

function Footer() {
  return (
    <footer className='page-footer'>
      <div className='footer-copyright'>
        <div className='container'>
          Developed by Shathu{' '}
          <a
            style={{
              padding: '1px 3px',
              borderRadius: '5px',
              fontWeight: 'bold'
            }}
            className='white'
            href='https://www.facebook.com/devshathu/'
            target='_blank'
          >
            FB
          </a>{' '}
          <a
            style={{
              padding: '1px 3px',
              borderRadius: '5px',
              fontWeight: 'bold'
            }}
            className='white'
            href='https://www.instagram.com/_shathu/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Insta
          </a>{' '}
          <a
            style={{
              padding: '1px 3px',
              borderRadius: '5px',
              fontWeight: 'bold'
            }}
            className='white'
            href='https://twitter.com/_shathu'
            target='_blank'
            rel='noopener noreferrer'
          >
            Twitter
          </a>
          <a
            className='grey-text text-lighten-4 right'
            href='https://www.arcgis.com/'
            target='_blank'
            rel='noopener noreferrer'
          
            ArcGIS API
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
