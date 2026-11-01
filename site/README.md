# Poorvi Kapoor portfolio

A plain HTML, CSS and JavaScript site. No Wix, no build step, nothing to install. Open `index.html` in a browser to preview it.

## 1. Add your images

Put your images in `assets/img/` using these exact file names (JPG). Any missing image shows a coloured placeholder instead, so the site never looks broken.

| File | Where it appears |
| --- | --- |
| `portrait.jpg` | About section (tall, about 2:3) |
| `little-joys-1.jpg` to `little-joys-5.jpg` | Little Joys thumbnail (the first one) and gallery |
| `be-bodywise-1.jpg` to `be-bodywise-7.jpg` | Be Bodywise thumbnail and gallery |
| `man-matters-1.jpg` to `man-matters-3.jpg` | Man Matters' thumbnail and gallery |
| `prakhar-1.jpg` | Prakhar Ke Pravachan |
| `college-films-1.jpg`, `college-films-2.jpg` | College films |

Tip: resize images to about 1600 px on the long side before adding them. Smaller files make the site load faster.

To get your old images out of Wix, open each project in the Wix editor and download the media from the Media Manager.

## 2. Add a new project

In `index.html`, copy one whole `<article class="row"> ... </article>` block inside the `schedule` section and change:

- `data-rev` to `blue`, `pink`, `yellow`, `green` or `gold`
- `data-template` and the matching `<template id="...">` to a new unique name
- the title, role, dates, text and image file names

## 3. Put it online for free

Any of these work with the whole folder as it is:

- Netlify: drag the folder onto app.netlify.com/drop
- Cloudflare Pages: upload the folder as a direct upload
- GitHub Pages: push the folder to a repository and turn on Pages

Then connect your own domain in that service's settings.

## Things to check before publishing

- Email and phone are in `index.html` (search for `0324pk@gmail.com` and `8829870780`). Remove the phone if you would rather not list it.
- The Little Joys, Be Bodywise and Man Matters' dates say "Feb 2024 to present", as on your old site, while your About page says you joined Mosaic Wellness full time in 2025. Adjust whichever is wrong.
- The contact form opens the visitor's email app. For a form that sends straight to your inbox, a free service such as Formspree can be added later.
