 

 This repository contains React/Next.js app styled with Tailwind CSS, tested with React Testing Library.
 <strong>This simple project is mostly about using React Testing Library with React/Next.js and APIs like Context API, fetch API and others...</strong>
 </br>
 <a href="http://spa-one-view.vercel.app"><strong>See the app deployed on Vercel »</strong></a>


## About the project:
-  SPA application with just one view connected to API (https://reqres.in/api/products)endpoint to display the paginated list of products. At the top of the view, there is a  search field, which allows the user to filter results by id. The input accepts only numbers, other signs don't even appear. Below this input user can see a table displaying the following items’ properties: id, name, and year. Additionally, the background colour of each row is be taken from the colour property. After clicking on a row a modal is displayed and presents all item data. The table displays 5 items per page. Under the table, there is a pagination component, which allows switching between pages with “next” and “previous” arrows.

 - when user inputs not existing product into the search input (situations when API endpoint returns error),  the user is informed about the error.
- pagination and filtering are reflected in the address URL, so users can copy and share the URL with each other,

-  filtering and pagination are performed within the API, not on the frontend side.



### Built With

* React Testing Library,
* HTML, 
* Tailwind CSS
* Next.js
* TypeScript
* Context API
* Vercel for deployment
* GitHub as a remote repository
* Visual Studio Code as a local IDE & repository.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
