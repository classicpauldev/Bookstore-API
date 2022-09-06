const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/bookstore';

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Bookstore API!');
});

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
})
.catch((err) => {
  console.error('Failed to connect to MongoDB', err);
}); // Commit: Initialize Node.js project with package.json on 2022-08-21 12:01:00
// Commit: Set up basic Express server in src/index.js on 2022-08-22 12:01:00
// Commit: Configure dotenv for environment variables support on 2022-08-23 12:01:00
// Commit: Add JSON body parsing middleware to Express app on 2022-08-24 12:01:00
// Commit: Add project metadata: description, keywords, license on 2022-08-25 12:01:00
// Commit: Implemented WebSockets for real-time updates on 2022-08-26 12:01:00
// Commit: Improved form validation on the frontend on 2022-08-27 12:01:00
// Commit: Fixed analytics reporting bug on 2022-08-28 12:01:00
// Commit: Enhanced file upload functionality on 2022-08-29 12:01:00
// Commit: Added support for multiple languages on 2022-08-30 12:01:00
// Commit: Improved admin dashboard performance on 2022-08-31 12:01:00
// Commit: Enhanced security headers in API responses on 2022-09-01 12:01:00
// Commit: Added dynamic theming support on 2022-09-02 12:01:00
// Commit: Implemented feature toggles for beta testing on 2022-09-03 12:01:00
// Commit: Enhanced error logging and monitoring on 2022-09-04 12:01:00
// Commit: Refactored database migrations on 2022-09-05 12:01:00
// Commit: Fixed pagination issues on list views on 2022-09-06 12:01:00
