# Library_management_system_backend

**Description**:

"This is a library management system API that allows users to manage book borrowing, returning, and tracking overdue books. It streamlines library operations by providing endpoints for CRUD operations on books and members, and tracking borrow records."

---

## Live URL

**Deployment Link**:  
[https://library-management-system-backend-chi.vercel.app](https://library-management-system-backend-chi.vercel.app)

---

## Technology Stack & Packages

**Backend Technologies**:

- **Node.js** and **Express** for server and API setup
- **Prisma ORM** for database management and querying
- **PostgreSQL** (or your database choice) for data storage
- **TypeScript** for type safety

**Packages**:

- **Prisma**: Object-Relational Mapping
- **Zod**: Schema validation
- **Express**: API framework
- **dotenv**: Environment variable management
- **http-status-codes**: Standardized HTTP status codes
- **date-fns**: For date manipulation (if used for overdue tracking)

---

## Setup Instructions

Follow these steps to set up the project locally:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/wahid1099/Library_management_system_backend
   cd your-repo
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:  
   Create a `.env` file in the root directory. Add the following values:

   ```plaintext
   DATABASE_URL=your_database_url
   ```

4. **Run Prisma Migrations**:

   ```bash
   npx prisma migrate dev
   ```

5. **Start the Development Server**:

   ```bash
   npm run dev
   ```

   Access the API at `http://localhost:3000`.

6. **Build and Run in Production** (optional):
   ```bash
   npm run build
   npm run prod
   ```

---

## Key Features & Functionality

- **CRUD Operations**: Manage books, members, and borrowing records.
- **Borrow and Return Books**: Endpoints to handle borrowing and returning of books with automatic availability tracking.
- **Overdue Book Tracking**: Automatically calculates overdue books based on a 14-day policy.
- **Error Handling**: Custom error responses for missing resources and validation errors.

---

## Known Issues/Bugs

- **Database Connectivity**: Sometimes fails to connect to the database on deployment due to Prisma configuration. Ensure that the database URL is correctly set in `.env`.
- **Date Validation**: `membershipDate` and other date fields may require specific formats, or they could return validation errors.

---

## Professional Formatting

This README is structured for clarity, making it easy for developers to navigate and understand the project setup, dependencies, and key features. Update sections as necessary to reflect any changes in the project structure.
