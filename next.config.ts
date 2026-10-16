import type { NextConfig } from 'next';
const config: NextConfig = {
  async redirects() {
    return ['index', 'about', 'courses', 'contact'].map(page => ({ source: `/${page}.html`, destination: page === 'index' ? '/' : `/${page}`, permanent: true }));
  },
};
export default config;
