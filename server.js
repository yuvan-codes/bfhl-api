const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Your personal details
const USER_DETAILS = {
    user_id: "yuvanshankar01_18102004",
    email: "yuvanshankar.sa@gmail.com",
    roll_number: "22BAI1048"
};

// Helper function to process the data array
function processData(data) {
    const result = {
        is_success: true,
        ...USER_DETAILS,
        odd_numbers: [],
        even_numbers: [],
        alphabets: [],
        special_characters: [],
        sum: "0",
        concat_string: ""
    };

    let numSum = 0;
    const alphabetChars = [];

    try {
        data.forEach(item => {
            // Check if it's a number
            if (!isNaN(item) && !isNaN(parseFloat(item))) {
                const num = parseInt(item);
                numSum += num;
                
                if (num % 2 === 0) {
                    result.even_numbers.push(item.toString());
                } else {
                    result.odd_numbers.push(item.toString());
                }
            }
            // Check if it's alphabetic
            else if (/^[a-zA-Z]+$/.test(item)) {
                result.alphabets.push(item.toUpperCase());
                // Store individual characters for concatenation
                for (let char of item) {
                    alphabetChars.push(char);
                }
            }
            // Special characters
            else {
                result.special_characters.push(item);
            }
        });

        // Set sum as string
        result.sum = numSum.toString();

        // Create concatenation string with alternating caps in reverse order
        if (alphabetChars.length > 0) {
            const reversedChars = alphabetChars.reverse();
            let concatString = "";
            
            for (let i = 0; i < reversedChars.length; i++) {
                if (i % 2 === 0) {
                    concatString += reversedChars[i].toUpperCase();
                } else {
                    concatString += reversedChars[i].toLowerCase();
                }
            }
            result.concat_string = concatString;
        }

    } catch (error) {
        result.is_success = false;
    }

    return result;
}

// POST /bfhl route
app.post('/bfhl', (req, res) => {
    try {
        const { data } = req.body;

        // Validate input
        if (!data || !Array.isArray(data)) {
            return res.status(400).json({
                is_success: false,
                message: "Invalid input: 'data' should be an array"
            });
        }

        const result = processData(data);
        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({
            is_success: false,
            message: "Internal server error"
        });
    }
});

// GET /bfhl route (for testing)
app.get('/bfhl', (req, res) => {
    res.status(200).json({
        operation_code: 1
    });
});

// Health check route
app.get('/', (req, res) => {
    res.json({
        message: "BFHL API is running",
        endpoints: {
            POST: "/bfhl",
            GET: "/bfhl"
        }
    });
});

// Export for Vercel
module.exports = app;