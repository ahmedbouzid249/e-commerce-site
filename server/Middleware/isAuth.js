const jwt = require("jsonwebtoken");
const User = require("../Models/User");

const isAuth = async (req, res, next) => {
    try {
        const token = req.headers.authorization; // Use lowercase 'authorization' for consistency

        if (!token) {
            return res.status(401).json({ msg: "No token provided" });
        }

        // const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : authHeader;

        // if (!token) {
        //     return res.status(401).json({ msg: "Invalid token format" }); // More specific message
        // }

        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Await the promise
        const user = await User.findById(decoded.id).select("-password"); // Exclude password

        if (!user) {
            return res.status(401).json({ msg: "User not found" });
        }

        req.user = user; // Attach user object to req
        next(); // Pass control to the next middleware/route handler
    } catch (error) {
        // Log the error for server-side debugging
        console.error("Authentication error:", error);
        return res.status(401).json({ msg: "Invalid token" });
    }
};

module.exports = isAuth;