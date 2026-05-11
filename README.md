# Boutique Hairstylist Website

Static Vite + Tailwind CSS site for Glass Heart, a professional hairstylist brand. Includes placeholder areas for Square booking widget, Square checkout/payment links, social media links, services, gallery, policies, and contact details.

## Setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Netlify

- Build command: `npm run build`
- Publish directory: `dist`

## Recommended Booking Order

Use a service-first flow: the client selects the service first, then chooses the available date/time. This is better because service duration, price, deposit rules, prep notes, and availability can change by service. Deposit/checkout links should come after the client knows the service they are booking.

## Square Booking

Replace the Square booking placeholder in `index.html` with the official embed code generated from the stylist's Square Dashboard.

Suggested Square path:

```txt
Square Dashboard → Appointments / Online Booking → Channels → Add booking flow to existing site
```

## Square Checkout Links

Replace:

```txt
https://square.link/REPLACE-DEPOSIT-LINK
https://square.link/REPLACE-CHECKOUT-LINK
```

with actual Square Payment Links.

## Image Asset

The logo and plaid/tartan background assets are located at:

```txt
public/glass-heart-logo.png
public/plaid-brand.jpg
```

## Replace Placeholders

- Glass Heart
- Stylist Name
- City / Service Area
- Service names, prices, and durations
- Square booking embed code
- Square checkout links
- Instagram / TikTok / Facebook URLs
- Email address
- Gallery images
- Policy wording
