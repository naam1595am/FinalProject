// import GoogleTranslate from './googletranslate';
// <GoogleTranslate />

// to use ^^^^

import React, { useEffect } from 'react';

function GoogleTranslate() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: 'en' },
        'google_translate_element'
      );
    };
  }, []);

  return (
    <div>
     
      <div id="google_translate_element"></div>
      {/* <p> test </p>
      <p> this should work</p> */}
    </div>
  );
}

export default GoogleTranslate;