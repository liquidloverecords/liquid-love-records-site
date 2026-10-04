# Liquid Love Records

This repo contains the initial storefront and editorial landing page for Liquid Love Records.

## Preview locally

Open `index.html` directly in a browser, or serve the folder with a local static server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## What’s included

- Modern dark-themed storefront for a digital label
- Artist roster with real Bandcamp links
- Digital release store with add-to-cart interactions
- Magazine / journal landing page
- Responsive layout for mobile and desktop
- Snipcart-ready product buttons with a fallback cart for demo use

## Customization

Before going live:

1. Replace `YOUR_SNIPCART_PUBLIC_KEY` in `index.html` with your actual Snipcart public key.
2. Add real PayPal / Snipcart credentials inside your Snipcart dashboard.
3. Swap sample artist images and release copy if needed.
4. Connect your domain (for example `liquidloverecords.com`) to GitHub Pages or Netlify.

## Notes

GitHub Pages can serve this static site directly from the root of the repository. For a custom domain, configure your DNS and enable GitHub Pages or deploy through a host like Netlify.

## License

This is a starter project template for Liquid Love Records and can be customized for production use.
