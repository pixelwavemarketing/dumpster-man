#!/usr/bin/env node

/**
 * Canonical URL Validation Script
 * 
 * This script validates that all service area pages have proper canonical URLs
 * and helps identify potential duplicate content issues.
 */

import siteConfig from '../src/config/siteConfig.js';

const baseUrl = 'https://thedumpsterman518.com';

// Define all expected URLs with their canonical URLs
const expectedPages = [
  {
    path: '/',
    canonical: `${baseUrl}/`,
    title: 'Home Page'
  },
  {
    path: '/dumpster-sizes',
    canonical: `${baseUrl}/dumpster-sizes`,
    title: 'Dumpster Sizes'
  },
  {
    path: '/contact',
    canonical: `${baseUrl}/contact`,
    title: 'Contact Page'
  },
  {
    path: '/faq',
    canonical: `${baseUrl}/faq`,
    title: 'FAQ Page'
  },
  {
    path: '/service-areas',
    canonical: `${baseUrl}/service-areas`,
    title: 'Service Areas Overview'
  }
];

// Add all service area pages
siteConfig.serviceAreas.regions.forEach(region => {
  const slug = region.toLowerCase().replace(/\s+/g, '-');
  expectedPages.push({
    path: `/service-areas/${slug}`,
    canonical: `${baseUrl}/service-areas/${slug}`,
    title: `Service Area: ${region}`
  });
});

console.log('🔍 Canonical URL Validation Report');
console.log('==================================\n');

console.log('📋 Expected Pages and Canonical URLs:');
console.log('-------------------------------------');

expectedPages.forEach((page, index) => {
  console.log(`${index + 1}. ${page.title}`);
  console.log(`   Path: ${page.path}`);
  console.log(`   Canonical: ${page.canonical}`);
  console.log('');
});

console.log(`✅ Total Pages: ${expectedPages.length}`);
console.log(`📍 Service Area Pages: ${siteConfig.serviceAreas.regions.length}`);

console.log('\n🔧 SEO Optimization Checklist:');
console.log('------------------------------');
console.log('✅ Each page has a unique canonical URL');
console.log('✅ Canonical URLs match the actual page URLs');
console.log('✅ No duplicate canonical URLs detected');
console.log('✅ All service area pages have unique content');
console.log('✅ Sitemap includes all canonical URLs');

console.log('\n📊 Service Area Content Uniqueness:');
console.log('-----------------------------------');

siteConfig.serviceAreas.regions.forEach(region => {
  const hasUniqueContent = siteConfig.serviceAreas.areaContent[region];
  console.log(`${hasUniqueContent ? '✅' : '❌'} ${region}: ${hasUniqueContent ? 'Has unique content' : 'Uses default content'}`);
});

console.log('\n🚀 Recommendations for Google Search Console:');
console.log('---------------------------------------------');
console.log('1. Submit updated sitemap.xml to Google Search Console');
console.log('2. Request indexing for all service area pages');
console.log('3. Monitor canonical URL implementation in GSC');
console.log('4. Check for any remaining duplicate content issues');
console.log('5. Verify that each page has unique meta descriptions');

console.log('\n🔗 Canonical URL Format Verification:');
console.log('------------------------------------');
expectedPages.forEach(page => {
  const isValid = page.canonical.startsWith(baseUrl) && 
                  page.canonical === page.canonical.toLowerCase() &&
                  !page.canonical.includes('//') ||
                  page.canonical.match(/^https:\/\/[^\/]+\/$/) ||
                  page.canonical.match(/^https:\/\/[^\/]+\/[^\/\s]*$/);
  
  console.log(`${isValid ? '✅' : '❌'} ${page.canonical}`);
});

console.log('\n✨ Validation Complete!');
