# TeamSpace

## Instructions

1. install Dependencies
```bash
npm i
```
2. Launch project 
```bash
npm start
```
3. Launch server
```bash
npm run start-server
```

3. go to /dashboard link to avoid login page (it does not contain back-end auth)

## My part of the project

1. Side Navigation (`src/components/mainLayout/layoutComponents/Navbar/MainNavigation`)
2. Breadcrumbs (`src/components/Breadcrumbs`)
3. Newsfeed (`src/components/newsFeedCard`)
4. Newsfeed Masonry Grid (`src/components/MasonryGrid`)
5. Search functionality (by tags (not side tags though), by search bar and by datepicker individual filtering and crossfiltering) in Reservations page (`src/pages/ReservationsPage`)
6. Restaurant reviews (`src/components/Reviews`)
7. Modal (`src/components/Modal`). Used in:
      1. Newsfeed "Add new Post"
      2. Restaurant page "Show more reviews"
      3. Sign up page "Successful registration"
8. Newsfeed connection to Firestore database
      1. Only this part is connected as to practice fetching and sending the data after the project was abandoned
      
Newsfeed does not support videos. It's only a placeholder. When posting URL, it has to be image URL.
