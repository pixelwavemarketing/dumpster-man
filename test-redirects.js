#!/usr/bin/env node

/**
 * Test script to verify redirects are working correctly
 * Run with: node test-redirects.js
 */

const https = require('https');
const http = require('http');

const testUrls = [
  'http://www.thedumpsterman518.com/',
  'https://www.thedumpsterman518.com/',
  'http://thedumpsterman518.com/',
  'https://thedumpsterman518.com/'
];

function testRedirect(url) {
  return new Promise((resolve) => {
    const protocol = url.startsWith('https:') ? https : http;
    
    const req = protocol.get(url, { followRedirect: false }, (res) => {
      const statusCode = res.statusCode;
      const location = res.headers.location;
      
      console.log(`\n${url}`);
      console.log(`Status: ${statusCode}`);
      console.log(`Location: ${location || 'No redirect'}`);
      
      if (statusCode >= 300 && statusCode < 400 && location) {
        if (location === 'https://thedumpsterman518.com/') {
          console.log('✅ Correct redirect to canonical URL');
        } else {
          console.log('❌ Incorrect redirect location');
        }
      } else if (statusCode === 200) {
        console.log('✅ Direct access (canonical URL)');
      } else {
        console.log('❌ Unexpected status code');
      }
      
      resolve();
    });
    
    req.on('error', (err) => {
      console.log(`\n${url}`);
      console.log(`❌ Error: ${err.message}`);
      resolve();
    });
    
    req.setTimeout(10000, () => {
      console.log(`\n${url}`);
      console.log('❌ Timeout');
      req.destroy();
      resolve();
    });
  });
}

async function runTests() {
  console.log('Testing redirects...\n');
  
  for (const url of testUrls) {
    await testRedirect(url);
  }
  
  console.log('\n✅ Redirect testing complete!');
  console.log('\nExpected results:');
  console.log('- www and non-www URLs should redirect to https://thedumpsterman518.com/');
  console.log('- Canonical URL should be accessible directly');
}

runTests().catch(console.error);
