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

### **GET /events/**<br>
Display all events<br>
Sample Response:<br>
```
[{_id, event, image, date, title, details, hosted, dressCode, ageRestrictions, location, fees, tags}, ....]
```



### **POST /events/**<br>
Create new event<br>
Sample Response:<br>
```
[{_id, event, image, date, title, details, hosted, dressCode, ageRestrictions, location, fees, tags}, ....]
```

### **POST /events/:eventId**<br>
Create event by id<br>
Sample Response:<br>
```
[{_id, event, image, date, title, details, hosted, dressCode, ageRestrictions, location, fees, tags}, ....]
```



### **DELETE /events/:eventId**<br>
Delete event by id<br>
Sample Response:<br>
```
[{_id}, ....]
```



### **PATCH /events/:id/edit**<br>
Event update by id<br>
Sample Response:<br>
```
[{_id}, ....]
```
---

## Contact
For bug or feature requests, please reach out to mohd.rafi854@gmail.com
