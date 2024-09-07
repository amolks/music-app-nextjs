import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const { email, password } = req.body;
      console.log(req.body);
      const response = await fetch("http://localhost:5500/users");
      const users = await response.json();

      const userExists = users.find((user) => user.email === email);
      if (userExists) {
        return res.status(400).json({ message: "User already exists" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = { email, password: hashedPassword };
      await fetch("http://localhost:5500/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      
      console.log("User registered successfully:", newUser);
      console.log("All registered users:", users);

      return res.status(201).json({ message: "User registered successfully" });
    } else {
      return res.status(405).json({ message: "Method not allowed" });
    }
  } catch (error) {
    console.error("Registration error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
