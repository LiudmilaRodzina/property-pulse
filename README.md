## Property Pulse

> [A web application to help you find your next rental property.](https://property-pulse-jet.vercel.app/)

### Features

Here are some of the current features that Property Pulse has:

- [x] User authentication with Google & Next Auth
- [x] User authorization
- [x] Route protection
- [x] User profile with user listings
- [x] Property Listing CRUD
- [x] Property image upload (Multiple)
- [x] Property search
- [x] Internal messages with 'unread' notifications
- [x] Photoswipe image gallery
- [x] Toast notifications
- [x] Property bookmarking / saved properties
- [x] Property sharing to social media
- [x] Loading spinners
- [x] Responsive design (Tailwind)
- [x] Custom 404 page

### Property Pulse uses the following technologies:

[![React 18](https://img.shields.io/badge/React-v.18-blue?logo=react)](https://reactjs.org/) [![Next.js 14](https://img.shields.io/badge/Next.js-v.14-black?logo=next.js)](https://nextjs.org/) [![NextAuth.js](https://img.shields.io/badge/NextAuth.js-Authentication-black?logo=next.js)](https://next-auth.js.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?logo=mongodb)](https://www.mongodb.com/) [![Mongoose](https://img.shields.io/badge/Mongoose-ODM-red?logo=mongodb)](https://mongoosejs.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-CSS%20Framework-06B6D4?logo=tailwind-css)](https://tailwindcss.com/)
[![Cloudinary](https://img.shields.io/badge/Cloudinary-Media%20Management-blue?logo=cloudinary)](https://cloudinary.com/) [![Photoswipe](https://img.shields.io/badge/Photoswipe-Gallery%20Lightbox-blue)](https://photoswipe.com/)
[![React Spinners](https://img.shields.io/badge/React%20Spinners-Loading%20Spinners-blue?logo=react)](https://www.npmjs.com/package/react-spinners) [![React Icons](https://img.shields.io/badge/React%20Icons-Icons%20Library-blue?logo=react)](https://react-icons.github.io/react-icons/)
[![React Toastify](https://img.shields.io/badge/React%20Toastify-Toast%20Notifications-blue?logo=react)](https://fkhadra.github.io/react-toastify/) [![React Share](https://img.shields.io/badge/React%20Share-Social%20Sharing-blue?logo=react)](https://www.npmjs.com/package/react-share)

### Getting Started

#### Prerequisites

- Node.js version 18 or higher
- MongoDB Atlas account and a cluster. Sign up and create a cluster at [MongoDB](https://www.mongodb.com/)
- Cloudinary account. Sign up at [Cloudinary](https://cloudinary.com/)
- Google console account. Sign up at [Google Cloud](https://console.cloud.google.com/)

#### `.env` File

Rename the `env.example` file to `.env` and fill in the following environment variables:

- Get your MongoDB connection string from your MongoDB Atlas cluster and add it to `MONGODB_URI`.
- Get your Google client ID and secret from your Google console account and add them to `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`.
- Add a secret to `NEXTAUTH_SECRET`. You can generate with the following command:
  ```bash
  openssl rand -base64 32
  ```
- Get your Cloudinary cloud name, API key, and API secret from your Cloudinary account and add them to `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, and `CLOUDINARY_API_SECRET`.

#### Install Dependencies

```bash
npm install
```

#### Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

#### Credits

This project is based on the Property Pulse project by Brad Traversy. You can find the original project [here](https://github.com/bradtraversy/property-pulse).

#### License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
