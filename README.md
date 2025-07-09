# Ecommerce App

A full-stack event web app built with the MERN stack (MongoDB, Express.js, React, Node.js). Users can browse upcoming events on the landing page, search by title, filter by online/offline, and view detailed event.

---

## Demo Link

[Live Demo](https://meetup-event.vercel.app)

---

## Quick Start
```
git clone https://github.com/mohdrafi854/meetupAppFrontend.git
cd <your-repo>
npm install
npm run dev  # or `npm run start` / `yarn dev`
```

## Technologies
- React JS
- React Router
- Node JS
- Express JS
- MongoDB
---

## Demo Video
Watch a walkthrough (5–7 minutes) of all major features of this app: [Loom Video Link]()

## Features
**Home**
- Display list of all events
- Filter events type online or offline
- Search event by title

**Detail Page**
- View full information

## API Refrence

### **GET /api/categories**<br>
Display all categories<br>
Sample Response:<br>
```
[{_id, name, imageUrl}, ....]
```

### **GET /api/products**<br>
Display all List<br>
Sample Response:<br>
```
[{_id, name, price, rating, size, imageUrl}, ....]
```

### **GET /api/products**<br>
View full details<br>
Sample Response:<br>
```
[{_id, name, price, rating, size, imageUrl}, ....]
```

### **GET /api/wishlist**<br>
Display all wishlist items<br>
Sample Response:<br>
```
[{_id, Category, imageUrl, name, price, rating, size}, ....]
```

### **GET /api/cart**<br>
Display all cart items<br>
Sample Response:<br>
```
[{_id, items, totalPrice}, ....]
```

### **POST /api/products**<br>
Create new item<br>
Sample Response:<br>
```
[{_id, name, price, imageUrl, Category}, ....]
```

### **PATCH /api/products/:id**<br>
Create new item<br>
Sample Response:<br>
```
[{_id, name, price, imageUrl, Category}, ....]
```

### **POST /api/categories**<br>
Create new category<br>
Sample Response:<br>
```
[{_id, name, imageUrl}, ....]
```

### **DELETE /api/categories/:id**<br>
Delete item by id<br>
Sample Response:<br>
```
[{_id}, ....]
```

### **POST /api/cart**<br>
Add to cart item<br>
Sample Response:<br>
```
[{_id, quantity}, ....]
```

### **DELETE /api/cart/item/:id**<br>
Delete cart item<br>
Sample Response:<br>
```
[{_id}, ....]
```

### **POST /api/wishlist**<br>
Add to wishlist item<br>
Sample Response:<br>
```
[{_id}, ....]
```

### **DELETE /api/wishlist/:id**<br>
Delete wishlist item<br>
Sample Response:<br>
```
[{_id}, ....]
```
---

## Contact
For bug or feature requests, please reach out to mohd.rafi854@gmail.com
