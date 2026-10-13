const h=require('http'),f=require('fs'),p=require('path');const root=p.join(__dirname,'..','site');
const tipos={'.html':'text/html; charset=utf-8','.webp':'image/webp','.jpg':'image/jpeg','.png':'image/png','.svg':'image/svg+xml','.woff2':'font/woff2'};
h.createServer((q,s)=>{const u=p.join(root,decodeURIComponent(q.url.split('?')[0]).replace(/^\/$/,'/index.html'));f.readFile(u,(e,d)=>{if(e){s.writeHead(404);return s.end()}s.writeHead(200,{'Content-Type':tipos[p.extname(u).toLowerCase()]||'application/octet-stream'});s.end(d)})}).listen(8765);
