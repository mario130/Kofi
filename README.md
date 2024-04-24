# ☕ Kofi E-commerce

Kofi is a minimalist e-commerce platform dedicated to selling premium coffee products. Leveraging the power of modern web technologies, Kofi offers a seamless shopping experience for coffee enthusiasts.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Tech Stack](#tech-stack)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Homepage**: The homepage features a hero section with a call to action, a section for featured products, and a section for our collection.
- **About Us**: The about us page features a section about the company, a section about the team, and a section about the company's mission.
- **Product Catalog:** Users can browse through a curated selection of coffee products, each with detailed descriptions and images.
- **Filters and Sorting:** Advanced filtering and sorting options enable users to find their desired coffee products with ease, enhancing the shopping experience.
- **Product Page**: The product page features a product image, product name, product description, product price, size, and a button to add the product to the cart.
- **Suggestions Component:** A suggestions component displays related products to the user, encouraging them to explore more products.
- **Shopping Cart:** A fully functional shopping cart allows users to delete items items, adjust quantities, and proceed to checkout seamlessly.

## Demo

Check out the live demo [here](https://kofi-store.vercel.app/). First load of shop can take a few seconds for Lambda to kick off.

## Tech Stack

- **Frontend**: React, Next.js, Typescript, Tailwind CSS, Framer Motion, Zustand
- **Backend**: AWS, DynamoDB, Lambda, API Gateway, Amplify, S3, CloudFront

## Screenshots

![Homepage](/public/readme/homepage.jpg)
_Homepage_

![Product Page](/public/readme/product.png)
_Product Page_

![Shop Page](/public/readme/shop.png)
_Shop Page_

![Suggestions](/public/readme/suggestions.png)
_Suggestions Component_

...

## Installation

1. Install dependencies: `npm install`
2. Run the development server: `npm run dev`
3. You need to set up the backend services to make the application fully functional. I use AWS API Gateway to create the REST API, but you can use any backend service of your choice. (You'll find the Coffee interface in `src/interfaces/Coffee.tsx`)

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvement, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
