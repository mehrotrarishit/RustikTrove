# RustikTrove E-commerce Website
RustikTrove is a full-stack web application tailored specifically for the e-commerce needs of our clothing brand, RustikTrove. The website is meticulously designed to offer a seamless and secure shopping experience to our customers. It incorporates advanced features such as secure payment processing and robust user authentication to ensure a smooth and safe interaction with the platform.

# Features:
#### Frontend- #### 
The frontend of RustikTrove is created using React.js, which allows for a highly interactive and responsive user interface. Additionally, the integration of Material UI significantly elevated the website's aesthetic appeal, delivering a modern and visually captivating design.
#### Backend- ####
The backend is developed with Node.js, providing a robust foundation for handling server-side operations. This includes managing user requests, processing payments, and interacting with the database to ensure data consistency and reliability.
#### Secure Payment Processing- ####
To facilitate secure transactions, RustikTrove integrates Razorpay, a trusted payment gateway. This integration ensures that all payment information is handled securely, providing customers with a safe and reliable way to purchase our products online.
#### Robust Authentication System- ####
We prioritize the security of our users' data. RustikTrove implements bcrypt for password hashing, ensuring that passwords are stored securely. Additionally, JWT (JSON Web Tokens) is used for user authentication, providing a secure way to manage user sessions and access.
#### Database Management- ####
The application uses MongoDB to manage data efficiently. This ensures that all user interactions, such as adding items to the cart, making purchases, and updating user profiles, are handled smoothly and reliably.
## Installation ##
### Prerequisites ###
1. Node.js
2. npm (Node Package Manager)
3. MongoDB 
### Backend Setup ###
1. Clone the repository:
Markup :  `git clone https://github.com/your-username/project-name.git`.
2. Navigate to the backend directory:
Markup :  `cd project-name/backend`
3. Install the dependencies:
Markup :  `npm install`
4. Create a .env file in the backend directory and add the following environment variables:
Markup :  `MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret`
5. Start the backend server:
Markup :  `npm start`
### Frontend Setup ###
1. Navigate to the frontend directory:
Markup :  `cd ../frontend`
2. Install the dependencies:
Markup :  `npm install` 
3. Create a .env file in the frontend directory and add the following environment variables:
Markup :  `REACT_APP_RAZORPAY_KEY_ID=your_razorpay_key_id
REACT_APP_API_URL=your_backend_api_url`
4. Start the frontend server:
Markup :  `npm start`
## Usage ##
1. Open your browser and navigate to http://localhost:3000 to view the application.
2. Register or log in to your account.
3. Explore the features and make secure payments.

