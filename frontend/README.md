# Electrixa Frontend

Electrixa is your all-in-one platform for Electrical, Electronics, Software, and Emerging Technologies.

## Development

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
```

The build output will be in the `dist` directory.

## Deployment

### Static Hosting (Netlify, Vercel, GitHub Pages)

1. Run `npm run build`
2. Deploy the `dist` folder to your hosting provider

### For Netlify:
- Build command: `npm run build`
- Publish directory: `dist`

### For Vercel:
- Build command: `npm run build`
- Output directory: `dist`

### For GitHub Pages:
1. Run `npm run build`
2. Push the `dist` folder to your repository
3. Configure GitHub Pages to serve from the `dist` folder

### Traditional Web Server (Apache, Nginx)

1. Run `npm run build`
2. Upload the contents of the `dist` folder to your web server
3. Configure your server to handle client-side routing (SPA)

**Nginx example:**
```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

**Apache example (.htaccess):**
```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```
