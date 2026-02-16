# Smart Resume Matcher (Cloudflare Workers)

## 📌 Project Overview

Smart Resume Matcher is a cloud-based web application that compares a user's resume with a job description and generates a semantic similarity score based on skill and keyword overlap.

The application uses Natural Language Processing (NLP) techniques to tokenize resume and job description text and computes similarity using cosine matching.

This project is built using Cloudflare Workers with Hono framework and uses Cloudflare D1 as persistent storage.

---

## 🚀 Live Deployment

Application is deployed serverlessly on Cloudflare Workers.

Live URL:
https://resume-ai.veda-ai.workers.dev

---

## 🏗️ Architecture

User interacts with the frontend UI which sends REST API requests to the Cloudflare Worker backend.

The Worker performs:

- Resume–Job similarity matching
- Resume storage
- Resume retrieval
- Resume deletion

Matching scores are computed using cosine similarity and stored in the Cloudflare D1 database.

### System Architecture:

# Smart Resume Matcher (Cloudflare Workers)

## 📌 Project Overview

Smart Resume Matcher is a cloud-based web application that compares a user's resume with a job description and generates a semantic similarity score based on skill and keyword overlap.

The application uses Natural Language Processing (NLP) techniques to tokenize resume and job description text and computes similarity using cosine matching.

This project is built using Cloudflare Workers with Hono framework and uses Cloudflare D1 as persistent storage.

---

## 🚀 Live Deployment

Application is deployed serverlessly on Cloudflare Workers.

Live URL:
https://resume-ai.veda-ai.workers.dev

---

## 🏗️ Architecture

User interacts with the frontend UI which sends REST API requests to the Cloudflare Worker backend.

The Worker performs:

- Resume–Job similarity matching
- Resume storage
- Resume retrieval
- Resume deletion

Matching scores are computed using cosine similarity and stored in the Cloudflare D1 database.

### System Architecture:

User
↓
Web UI (HTML / CSS / JS)
↓
Cloudflare Worker API (Hono)
↓
Resume Matching Engine
↓
Cloudflare D1 Database

---

## 🧠 AI Matching Technique

Resume matching is implemented using:

- Text Tokenization
- Feature Extraction
- Cosine Similarity

The similarity score measures the semantic overlap between resume skills and job requirements.

---

## 📡 REST API Endpoints

### 1. Match Resume

POST /matchResume

Request Body:

{
"resume":"Python Developer with ML skills",
"job":"Machine Learning Engineer"
}

Response:

{
"score":72
}

---

### 2. Upload Resume

POST /uploadResume

---

### 3. Get All Resumes

GET /getResumes

---

### 4. Delete Resume

DELETE /deleteResume/:id

---

## 💾 Database (Cloudflare D1)

Resumes are stored persistently using Cloudflare D1.

Table:

resumes
--------
id
resume_text

---

## 🔐 Security Implementation

Input validation is implemented to prevent:

- SQL Injection
- Malicious inputs
- Oversized data submission

Example:

if(!resume || resume.length>5000){
return c.json({error:"Invalid Input"})
}

---

## 🌐 HTTP Methods Used

| Method | Endpoint |
|--------|-----------|
POST | /matchResume |
POST | /uploadResume |
GET | /getResumes |
DELETE | /deleteResume/:id |

---

## 🛠️ Technologies Used

- Cloudflare Workers
- Hono Framework
- Cloudflare D1 Database
- HTML / CSS / JavaScript
- REST APIs
- NLP Cosine Similarity

---

## 📦 Deployment Steps

1. Install Wrangler CLI
2. Create Worker Project
3. Bind D1 Database
4. Deploy using:

wrangler deploy

---

## 📈 Future Enhancements

- Resume Ranking
- PDF Resume Upload
- Job Recommendation
- User Authentication

---

## 👩‍💻 Author

Veda H S  
B.E – Information Science Engineering  
Channabasaveshwara Institute of Technology, Gubbi  
LinkedIn: https://www.linkedin.com/in/veda-h-s
