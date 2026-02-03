# 🧠 Master Quiz - Full Stack Edition

Master Quiz is a comprehensive web platform for technical assessments. This version features a robust **Spring Boot backend** to manage quiz data, user scores, and authentication, paired with a high-performance, responsive frontend.



## 🏗️ System Architecture

* **Frontend:** HTML5, CSS3 (Grid/Flexbox), and Vanilla JavaScript.
* **Backend:** Java 17+, Spring Boot 3.x, Spring Security (JWT).
* **Database:** MySQL / PostgreSQL for persistent storage of users and scores.
* **API:** RESTful endpoints for quiz delivery and leaderboard updates.

## 🚀 Key Features

* **Secure Authentication:** User registration and login powered by Spring Security.
* **Dynamic Quiz Engine:** Quizzes are fetched via REST API, allowing for easy content updates without changing frontend code.
* **Real-time Leaderboard:** Top performers are calculated server-side and updated instantly.
* **Persistence:** Your progress and certificates are saved securely in the database.
* **Responsive Design:** Fully optimized for all device sizes.

## 🛠️ Tech Stack Details

### Backend (The Brain)
* **Spring Data JPA:** For seamless database communication.
* **Maven:** For dependency management.
* **Hibernate:** ORM for mapping Java objects to database tables.

### Frontend (The Face)
* **Modern CSS:** Professional grids for the "Top Performers" and "Notes" sections.
* **Fetch API:** To communicate with the Spring Boot controllers.



## 📂 Project Structure

```text
.
├── master-quiz-backend/     # Spring Boot Source Code
│   ├── src/main/java        # Controllers, Services, Models
│   └── src/main/resources   # application.properties & SQL scripts
├── master-quiz-frontend/    # Client-side files
│   ├── index.html
│   ├── style.css
│   └── script.js
└── README.md
