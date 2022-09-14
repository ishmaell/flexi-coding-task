A simple web application for searching GitHub repos built with React &amp; TypeScript.

## Summary

- [Getting Started](#getting-started)
- [Dependencies](#dependencies)
- [Prerequisites](#prerequisites)
- [Challenges](#challenges)
- [Repo Structure](#repo-structure)
- [Authors](#authors-[dev])

## Getting Started

- Clone the repo using `git clone https://github.com/ishmaell/flexi-coding-task`
- Install the dependencies using `npm install`
- Start the application using `npm run dev`
- Visit `http://localhost:3000` on your browser to view the application

### Dependencies

- Node v16.13.0
- Tailwindcss

### Prerequisites

The following are required to run the app

- [node v16.13.0](https://nodejs.org)

## Challenges

- GitHub recently modified its policy about accesing List repository collbaorators. It says;
  `You must authenticate using an access token with the read:org and repo scopes with push access to use this endpoint. GitHub Apps must have the members organization permission and metadata repository permission to use this endpoint.`
- To view my implementation of collaborators, you can access the [demo](https://flexi-coding-task.herokuapp.com) and search `ishmaell/website`, then click on the `View Contributors` button and a collaborator will pop up.

## Repo Structure

```
├── README.md
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.test.tsx
│   ├── App.tsx
│   ├── api
│   │   └── index.ts
│   ├── app
│   │   └── store.ts
│   ├── components
│   │   ├── Card.tsx
│   │   ├── Collaborators.tsx
│   │   ├── Header.tsx
│   │   ├── Modal.tsx
│   │   ├── NoData.tsx
│   │   ├── SearchWidget.tsx
│   │   ├── Spinner.tsx
│   │   └── table
│   │       ├── RepositoryTable.tsx
│   │       ├── RepositoryTableHead.tsx
│   │       └── RepositoryTableRow.tsx
│   ├── context
│   │   └── SearchQueryContext.tsx
│   ├── css
│   │   ├── components
│   │   │   ├── button.css
│   │   │   ├── card.css
│   │   │   ├── collaborator.css
│   │   │   ├── header.css
│   │   │   ├── modal.css
│   │   │   ├── no-data.css
│   │   │   ├── search-widget.css
│   │   │   ├── spinner.css
│   │   │   └── table-area.css
│   │   ├── index.css
│   │   └── layout
│   │       └── main-layout.css
│   ├── features
│   │   ├── collaborators
│   │   │   └── collaboratorsSlice.ts
│   │   └── repository
│   │       └── repositoryApiSlice.ts
│   ├── hooks
│   │   ├── useRedux.ts
│   │   └── useSearchQuery.ts
│   ├── index.tsx
│   ├── layout
│   │   └── MainLayout.tsx
│   ├── models
│   │   ├── collaborator.ts
│   │   ├── repository.ts
│   │   └── searchQuery.ts
│   ├── pages
│   │   └── Home.tsx
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   ├── setupTests.ts
│   └── utils
│       └── index.ts
├── tailwind.config.js
└── tsconfig.json
```

## Authors [Dev]

- **Isiaka Ismaila**
  ​​
