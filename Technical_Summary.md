# Technical Summary

Smart Resume Matcher is a cloud-based web application developed using Cloudflare Workers and Hono framework.

Cloudflare Workers were chosen as they provide a serverless execution environment that allows REST APIs to run at the edge without managing any infrastructure.

Cloudflare D1 database is used for persistent storage of resume data. This ensures that resume information is stored permanently and can be retrieved or deleted when required.

Resume–Job matching is performed using NLP-based cosine similarity. The resume and job description text is tokenized into feature vectors and similarity score is calculated based on overlapping keywords between both inputs.

CRUD APIs are implemented using REST architecture:

POST – Upload Resume  
GET – Retrieve Resume  
DELETE – Delete Resume  

These APIs allow the system to create, read and delete resume records from the database.

Input validation is implemented to prevent malicious inputs and ensure API security. This helps in avoiding SQL Injection attacks and prevents oversized or invalid data submission.

KV namespace is used for caching resume-job similarity scores to improve response time and reduce computation overhead.

The application is deployed serverlessly using Wrangler CLI on Cloudflare Workers platform.
