export default {
  output: 'export',
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/news': { page: '/news' },
      '/learn/dos-ddos': { page: '/learn/dos-ddos' },
      '/learn/mitm': { page: '/learn/mitm' },
      '/learn/sql-injection': { page: '/learn/sql-injection' },
      '/learn/dns-spoofing': { page: '/learn/dns-spoofing' },
      '/learn/phishing': { page: '/learn/phishing' },
      '/about': { page: '/about' },
      '/contact': { page: '/contact' },
      '/login': { page: '/login' },
      '/signup': { page: '/signup' },
      '/profile': { page: '/profile' },
    };
  },
};