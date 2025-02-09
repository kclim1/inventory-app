# Inventory-app

## Overview

This is a full-stack single page item management application built with React (Vite), Redux Toolkit, TypeScript, Express.js, and MySQL. It allows users to create, view, edit, and delete items in real-time using Redux for state management.

## Getting Started 
1. Run ``` git clone git@github.com:kclim1/inventory-app.git```
2. cd into inventory-app
3. Run ```npm install ``` in the root folder
<br>
NOTE : Make sure you've also installed all dependencies in frontend and backend before using npm start in the root folder. Instructions on how to setup frontend and backend can be found in their respective folders. Also ensure you alredy have mySQL installed. <br>

4. Run ```npm start```

## Tech Stack

Frontend: React, Redux Toolkit, TypeScript, TailwindCSS, Axios

Backend: Express.js, TypeScript, MySQL , Sequelize

State Management: Redux Toolkit

API Communication: RESTful API with Axios

Notifications: Sonner 

## Folder Structure 
```
📦 inventory-app
├── backend
│   ├── src
│   │   ├── controllers
│   │   │   ├── mainController.ts
│   │   ├── models
│   │   │   ├── config.ts
│   │   │   ├── itemModels.ts
│   │   ├── routes
│   │   │   ├── itemRoutes.ts
│   │   ├── validators
│   │   │   ├── validateItem.ts
│   │   ├── server.ts
│   ├── package.json
│   ├── tsconfig.json
│   ├── .env
│
├── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── CreateItemButton.tsx
│   │   │   ├── CreateItemForm.tsx
│   │   │   ├── DeleteConfirmationButton.tsx
│   │   │   ├── ItemCard.tsx
│   │   │   ├── ItemDisplayContainer.tsx
│   │   ├── store
│   │   │   ├── hooks.ts
│   │   │   ├── store.ts
│   │   │   ├── slices
│   │   │   │   ├── createItemFormSlice.ts
│   │   │   │   ├── deleteModalSlice.ts
│   │   │   │   ├── itemDetailsSlice.ts
│   │   ├── utils
│   │   │   ├── useFetchAllItems.ts
│   │   ├── Dashboard.tsx
│
├── .gitignore
├── README.md
```
## Features
1. Create Items 
2. Edit Items
3. Delete Items
4. View All Items

## Preview of app 
![app preview](./public/image.png)

## API ENDPOINTS 
### Fetch all items
```
GET /api/items
```
Response: Returns a list of all items.
<hr>

### Create a new item
```
POST /api/items
```
sample body :
```
{
  "itemName": "Item Name",
  "description": "Item description",
  "price": 100.99
}
```
Response: Returns the created item.
<hr>

### Update an item
```
PUT api/items/:id
```
```
Body:
{
  "itemName": "Updated Name",
  "description": "Updated description",
  "price": 150.75
}
```
Response: Returns the updated item.


### Delete an item
```
DELETE /api/items/:id
```
Response: Confirms deletion of the item.
<hr>


## Known Issues / Future Enhancements 
-Implement authentication (JWT/OAuth) <br>
-Pagination for item list <br>
-Can include quantity and automatically sums up price for that amount<br>
-Use Websockets for real time updates <br>
-Include loading states (eg. loading spinners ) 
## Lessons learnt 
I can improve Redux state management by storing all items globally instead of using local component state. That way I can ensure real-time updates using Redux by dispatching fetchItems() after every create, update, and delete operation. I didn't end up doing this because this is my first time using Redux and I wasn't familiar with it. In hindsight, I think I could've set up something called "redux thunks" to handle these operations. Unfortunately, I found out about that too late and I have to go back to finishing some work 😢. But besides that, the CRUD operation works, it's just a little unfortunate that you'd have to refresh to see those changes. 


