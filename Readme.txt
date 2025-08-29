# BFHL API - REST API for Data Processing

A REST API built with Node.js and Express that processes arrays of mixed data types and returns categorized results. This API is designed to handle arrays containing numbers, alphabets, and special characters, providing detailed analysis and transformations.

## 🚀 Live Demo

**API Endpoint:** `https://bfhl-api-pied-two.vercel.app/bfhl`

## 📋 Features

- Process mixed arrays containing numbers, alphabets, and special characters
- Separate odd and even numbers
- Convert alphabets to uppercase
- Calculate sum of all numbers
- Generate concatenated string with alternating case in reverse order
- Handle errors gracefully
- CORS enabled for cross-origin requests

## 🛠 API Usage

### Base URL
https://bfhl-api-pied-two.vercel.app/


### Endpoints

#### POST `/bfhl`
Main endpoint for data processing.

**Request Format:**
{
"data": ["array", "of", "mixed", "data", "1", "2", "$", "@"]
}


**Response Format:**
{
"is_success": true,
"user_id": "yuvanshankar01_18102004",
"email": "yuvanshankar.sa@gmail.com",
"roll_number": "22BAI1048",
"odd_numbers": ["1"],
"even_numbers": ["2"],
"alphabets": ["ARRAY", "OF", "MIXED", "DATA"],
"special_characters": ["$", "@"],
"sum": "3",
"concat_string": "AtAdDxImFoYaRrA"
}


#### GET `/bfhl`
Returns operation code for testing purposes.

**Response:**

{
"operation_code": 1
}


## 📝 Request Examples

### Example 1: Mixed Data

curl -X POST https://bfhl-api-pied-two.vercel.app/bfhl
-H "Content-Type: application/json"
-d '{"data": ["a","1","334","4","R", "$"]}'


**Response:**

{
"is_success": true,
"user_id": "yuvanshankar01_18102004",
"email": "yuvanshankar.sa@gmail.com",
"roll_number": "22BAI1048",
"odd_numbers": ["1"],
"even_numbers": ["334", "4"],
"alphabets": ["A", "R"],
"special_characters": ["$"],
"sum": "339",
"concat_string": "Ra"
}

### Example 2: Numbers and Symbols
curl -X POST https://bfhl-api-pied-two.vercel.app/bfhl
-H "Content-Type: application/json"
-d '{"data": ["2","a", "y", "4", "&", "-", "*", "5","92","b"]}'

text

### Example 3: Only Alphabets
curl -X POST https://bfhl-api-pied-two.vercel.app/bfhl
-H "Content-Type: application/json"
-d '{"data": ["A","ABcD","DOE"]}'

text

## 📊 Response Fields Explained

| Field | Description |
|-------|-------------|
| `is_success` | Boolean indicating if the operation was successful |
| `user_id` | User identifier in format: firstname_lastname_ddmmyyyy |
| `email` | Email address of the user |
| `roll_number` | College roll number |
| `odd_numbers` | Array of odd numbers as strings |
| `even_numbers` | Array of even numbers as strings |
| `alphabets` | Array of alphabetic strings converted to uppercase |
| `special_characters` | Array of non-alphanumeric characters |
| `sum` | Sum of all numbers as a string |
| `concat_string` | Concatenated alphabetic characters in reverse order with alternating case |

## ⚠️ Important Notes

- All numbers in the response are returned as **strings**
- The `concat_string` field contains individual characters from alphabetic inputs, reversed and with alternating upper/lower case
- Special characters include any non-alphanumeric characters
- The API handles multi-character alphabetic strings by converting them to uppercase and processing each character individually for concatenation

## 🚨 Error Handling

### Invalid Input
{
"is_success": false,
"message": "Invalid input: 'data' should be an array"
}

text

### Server Error
{
"is_success": false,
"message": "Internal server error"
}

text

## 📢 Status Codes

- `200` - Success
- `400` - Bad Request (Invalid input)
- `500` - Internal Server Error

## 🎓 Local Development

If you want to run this locally:

1. Clone the repository
2. Install dependencies: `npm install express cors`
3. Start the server: `npm start`
4. API will be available at `http://localhost:3000`

## 🤝 Contributing

This is an educational project for my Round 1 in placements for bajaj finserv healthcare. Feel free to suggest improvements or report issues.

---

**Author:** Yuvan Shankar  
**Email:** yuvanshankar.sa@gmail.com  
**Roll Number:** 22BAI1048