const https = require('https');
const fs = require('fs');
const path = require('path');

const movies = {
    1: 'tt8178634',       // RRR
    2: 'tt2631186',       // Baahubali
    3: 'tt10698680',      // KGF 2
    4: 'tt1187043',       // 3 Idiots
    5: 'tt5074352',       // Dangal
    6: 'tt11855910',      // Aarya
    7: 'tt10816156',      // Ala Vaikuntapuram
    8: 'tt7200236',       // Arjun Reddy
    9: 'tt8630138',       // Dear Comrade
    10: 'tt9389998',      // Pushpa: The Rise
    11: 'tt12401562',     // Sarkaru Vaari Paata
    12: 'tt15197772'      // Salaam Venky
};

const imagesDir = path.join(__dirname, 'images');
if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir);
}

const posterRegex = /"image":\s*"([^"]+m\.media-amazon\.com\/images\/M\/[^"]+)"/;

async function fetchPoster(id, imdbId) {
    return new Promise((resolve, reject) => {
        const req = https.get(`https://www.imdb.com/title/${imdbId}/`, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            }
        }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                const match = data.match(posterRegex);
                if (match && match[1]) {
                    console.log(`Movie ${id}: Found poster ${match[1]}`);
                    resolve(match[1]);
                } else {
                    // Try looking for og:image
                    const ogMatch = data.match(/<meta property="og:image" content="([^"]+m\.media-amazon\.com\/images\/M\/[^"]+)"/);
                    if (ogMatch && ogMatch[1]) {
                        console.log(`Movie ${id}: Found og poster ${ogMatch[1]}`);
                        resolve(ogMatch[1]);
                    } else {
                        console.log(`Movie ${id}: Poster not found, downloading HTML...`);
                        fs.writeFileSync(`failed_${id}.html`, data);
                        resolve(null);
                    }
                }
            });
        });
        req.on('error', reject);
    });
}

async function main() {
    const scriptJsPath = path.join(__dirname, 'js', 'script.js');
    let scriptJs = fs.readFileSync(scriptJsPath, 'utf8');
    
    for (const [id, imdbId] of Object.entries(movies)) {
        try {
            const posterUrl = await fetchPoster(id, imdbId);
            if (posterUrl) {
                // Determine poster filename to save it locally
                const ext = path.extname(new URL(posterUrl).pathname);
                const filename = `poster_${id}${ext || '.jpg'}`;
                const localPath = path.join(imagesDir, filename);
                
                // Download the file
                console.log(`Downloading ${posterUrl} to ${localPath}`);
                await new Promise((resolveDownload, rejectDownload) => {
                    https.get(posterUrl, (res) => {
                        const fileStream = fs.createWriteStream(localPath);
                        res.pipe(fileStream);
                        fileStream.on('finish', () => resolveDownload());
                    }).on('error', rejectDownload);
                });
                
                // Update script.js with local path
                const movieRegex = new RegExp(`({\\s*id:\\s*${id},[^}]+poster:\\s*')([^']+)(',?\\s*})`, 'g');
                scriptJs = scriptJs.replace(movieRegex, `$1images/${filename}$3`);
            }
        } catch (e) {
            console.error(`Error processing movie ${id}:`, e.message);
        }
    }
    
    // Bump version again to clear cache
    scriptJs = scriptJs.replace(/app_version_105/g, 'app_version_106');
    fs.writeFileSync(scriptJsPath, scriptJs);
    console.log("Done! Updated script.js to use downloaded local images.");
}

main();
