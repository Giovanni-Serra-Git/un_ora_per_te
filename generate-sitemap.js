import { SitemapStream } from 'sitemap';
import { createWriteStream } from 'fs';

// Definisci le rotte del tuo sito web
const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/servizi', changefreq: 'weekly', priority: 0.8 },
  { url: '/chi-sono', changefreq: 'monthly', priority: 0.8 },
  { url: '/galleria', changefreq: 'monthly', priority: 0.6 },
  { url: '/contatti', changefreq: 'monthly', priority: 0.7 }
];

async function generateSitemap() {
  const stream = new SitemapStream({ hostname: 'https://esteticaunoraperte.it' });
  const writeStream = createWriteStream('./public/sitemap.xml');

  // Collega lo stream della sitemap al file di scrittura
  stream.pipe(writeStream);

  // Scrive ciascun link alla sitemap
  links.forEach(link => stream.write(link));

  // Chiude lo stream
  stream.end();

  // Attende la chiusura del writeStream per confermare il completamento
  writeStream.on('finish', () => {
    console.log('Sitemap generata con successo!');
  });
}

generateSitemap();
