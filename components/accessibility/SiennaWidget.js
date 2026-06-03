"use client"; 

import Script from 'next/script';

export default function SiennaWidget() { 
  return (
      <Script
        src="https://cdn.jsdelivr.net/npm/sienna-accessibility@latest/dist/sienna-accessibility.umd.js"
        strategy="lazyOnload" 
        // Sienna auto-initializes upon loading, so you usually don't need an onLoad function!
      />
  );
}
