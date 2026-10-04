# WanderWorld - Travel Agency Website

WanderWorld is a responsive travel agency website developed using HTML, CSS, Bootstrap, JavaScript and LocalStorage.

The project provides a complete travel booking website with customer-facing pages and an admin management dashboard.

---

## Project Features

### Customer Website

* Home page
* Destinations
* Tour Packages
* Package Details
* About Us
* Services
* Gallery
* Special Offers
* Customer Testimonials / Reviews
* Travel Blog
* Contact Us
* User Login
* Booking Form

### Admin Dashboard

The admin can manage:

* Destinations
* Tour Packages
* Bookings
* Customers
* Gallery Images
* Offers
* Blog Posts
* Customer Reviews

---

## Dynamic Features

The project uses JavaScript and Browser LocalStorage for data management.

### Destination Management

Admin can:

* Add destinations
* Edit destinations
* Delete destinations
* View destinations

### Package Management

Admin can:

* Add packages
* Edit packages
* Delete packages
* View package information

### Booking Management

Customers can book tour packages by entering:

* Customer name
* Email
* Phone number
* Number of travelers
* Travel date
* Room preference
* Special requirements

Bookings are stored in LocalStorage and displayed in the Admin Dashboard.

### Gallery Management

Admin can:

* Add gallery images
* Edit gallery images
* Delete gallery images

### Offer Management

Admin can:

* Add offers
* Edit offers
* Delete offers
* Set offer expiry dates

### Blog Management

Admin can:

* Add blog posts
* Edit blog posts
* Delete blog posts
* Publish or save posts as drafts

### Review Management

Customers can submit reviews.

Reviews are initially stored as:

`Pending`

Admin can:

* View reviews
* Edit reviews
* Publish reviews
* Delete reviews

Only published reviews appear on the public Testimonials page.

---

## Technologies Used

### Frontend

* HTML5
* CSS3
* Bootstrap 5
* Bootstrap Icons
* JavaScript

### Data Storage

* Browser LocalStorage

### Development Tools

* Visual Studio Code
* Node.js
* npm

---

## Project Structure

```text
Travel Agency/
│
├── index.html
├── destinations.html
├── packages.html
├── package-details.html
├── about.html
├── services.html
├── gallery.html
├── offers.html
├── testimonials.html
├── blog.html
├── contact.html
│
├── login.html
├── admin-login.html
├── admin.html
│
├── destinations.js
├── packages.js
├── gallery.js
├── offers.js
├── blog.js
├── reviews.js
├── script.js
│
├── style.css
├── README.md
├── .gitignore
│
├── package.json
├── package-lock.json
└── node_modules/
```

---

## Demo Login

### User Login

Email:

`user@wanderworld.com`

Password:

`user123`

### Admin Login

Username:

`admin`

Password:

`admin123`

---

## How to Run the Project

### Step 1

Open the project folder in Visual Studio Code.

### Step 2

Make sure Node.js and npm are installed.

### Step 3

Install Bootstrap:

```bash
npm install bootstrap
```

### Step 4

Install Bootstrap Icons:

```bash
npm install bootstrap-icons
```

### Step 5

Open `index.html` in the browser.

For better development experience, you can use the VS Code Live Server extension.

---

## Admin Dashboard

Open:

`admin-login.html`

Login using the demo admin credentials.

The admin dashboard provides management options for all major travel agency modules.

---

## Data Storage

This project is a frontend demonstration project.

Data is stored using Browser LocalStorage.

Examples of stored data include:

* Destinations
* Packages
* Bookings
* Gallery
* Offers
* Blogs
* Reviews

Because LocalStorage is browser-based, the data is specific to the browser/device being used.

---

## Future Enhancements

The following features can be added in a production version:

* Backend database
* Real user authentication
* Secure admin authentication
* Online payment gateway
* Email notifications
* SMS notifications
* Real-time booking availability
* Cloud image storage
* REST API
* MySQL / MongoDB database
* Password encryption
* Deployment to a cloud server

---

## Project Objective

The main objective of WanderWorld is to provide a user-friendly travel platform where customers can explore destinations, view tour packages, make bookings and share their travel experiences.

The admin dashboard provides centralized management of travel destinations, packages, bookings, customers, offers, gallery content, blogs and reviews.

---

## Author

Developed as a Travel Agency Web Development Project.

## License

This project is created for educational and demonstration purposes.

```

---

## 2. Create `.gitignore`

Create another file in the main **Travel Agency** folder:

`.gitignore`

Paste:

:::writing{variant="document" id="73154" title=".gitignore"}
node_modules/
.vscode/
.DS_Store
Thumbs.db
*.log
.env
.env.*
npm-debug.log*
yarn-debug.log*
yarn-error.log*

### One important GitHub point

**Do not upload `node_modules` to GitHub.** Your `.gitignore` now prevents that.

Your repository should contain the source files and:

- `package.json`
- `package-lock.json`

but **not** `node_modules`.

---

## Final project status

At this point you have:

| Module | Status |
|---|---|
| Home | ✅ |
| Destinations | ✅ |
| Tour Packages | ✅ |
| Package Details | ✅ |
| Booking | ✅ |
| About | ✅ |
| Services | ✅ |
| Gallery | ✅ |
| Offers | ✅ |
| Testimonials/Reviews | ✅ |
| Blog | ✅ |
| Contact | ✅ |
| User Login | ✅ |
| Admin Login | ✅ |
| Admin Dashboard | ✅ |
| Destination CRUD | ✅ |
| Package CRUD | ✅ |
| Booking Management | ✅ |
| Customer Management | ✅ |
| Gallery CRUD | ✅ |
| Offer CRUD | ✅ |
| Blog CRUD | ✅ |
| Review CRUD | ✅ |
| README | ✅ |
| `.gitignore` | ✅ |

### One final thing before GitHub

We should now **test the whole project once** and catch any broken links, JavaScript errors, or mismatched field names before you submit/push it.

