import React from 'react';

interface WebflowIframeProps {
    webUrl: string
}
const WebflowIframe = ({webUrl}:WebflowIframeProps) => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <iframe
        src={webUrl} // Replace with your Webflow page URL
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="Webflow Page"
      />
    </div>
  );
};

export default WebflowIframe;
