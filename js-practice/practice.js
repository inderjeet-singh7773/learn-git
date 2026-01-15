// //  Q. JavaScript me ek program likho jo: Pehle "hlo" print kare. 5 second ke baad console me "hlo" ko clear karke "bye" print kare.

// console.log("hlo");
// setTimeout(() => {
//   console.clear();
//   console.log("bye");
// }, 5000);

// // Q. pahele hlo likha aaye uske 2 sec k baad bye likha aye hlo k niche

// console.log("hlo");
// setTimeout(() => {
//   console.log("bye");
// },2000);

// // Q. 100 baar prnit krna hai he is a boy with a nuber.


// for(let i=1 ; i<=100 ; i++ ){
//   console.log(`${i} he is a boy`);
// }

// 🔹 Easy Question

// Q. Ek function getData() banao jo 2 second ke baad "Data received" return kare using Promise. Fir usko async/await ke sath call karke console me print karo.

// function getData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Data received");
//     }, 2000);
//   });
// }

// async function fetchData() {
//   const data = await getData();
//   console.log(data);
// }

// fetchData();

// 🔹 Medium Question

// Q. Ek function fetchNumber() likho jo 1 se 10 tak random number return kare after 1 sec (Promise use karke).
// Fir ek async function banao jo teen baar fetchNumber() ko call kare aur teeno numbers ka sum print kare.

// function fetchNumber() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const randomNumber = Math.floor(Math.random() * 100) + 1;
//       resolve(randomNumber);
//     }, 1000);
//   });
// }

// async function calculateSum() {
//   const num1 = await fetchNumber();
//   const num2 = await fetchNumber();
//   const num3 = await fetchNumber();
//   const sum = num1 + num2 + num3;

//   console.log(`Fetched numbers: ${num1} + ${num2} + ${num3} = ${sum}`);
//   console.log(`Sum of three numbers: ${sum}`);
// }

// calculateSum();


// // // solve kar raha hu 

// // promise function

// function fakeApi() {
//   fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data.usd); // data object print hoga
//       console.log("Data fetched successfully");
//     })
//     .catch((error) => {
//       console.log("Error aaya hai:", error);
//     });
// }

// fakeApi();

// // async await function

// async function fakeApi() {
//   try {
//     const response = await fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json");
//     const data = await response.json();
//     console.log(data.usd); // data object print hoga
//     console.log("Data fetched successfully");
//   } catch (error) {
//     console.log("Error aaya hai:", error);
//   }
// }

// fakeApi();


// --------------node.js----------------


const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`
      <html>
        <head><title>Form Example</title></head>
        <body>
          <h1>Fill the form</h1>
          <form action="/submit" method="POST">
            <label>Name:</label>
            <input type="text" name="name" required><br><br>

            <label>Email:</label>
            <input type="email" name="email" required><br><br>

            <label>Gender:</label>
            <select name="gender" required>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select><br><br>

            <button type="submit">Submit</button>
          </form>
        </body>
      </html>
    `);
    res.end();
  }

  else if (req.url === "/submit" && req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const params = new URLSearchParams(body);
      const name = params.get("name");
      const email = params.get("email");
      const gender = params.get("gender");

      const userData = { name, email, gender };

      const folder = path.join(__dirname, "data");
      const filePath = path.join(folder, "userdata.json");

      if (!fs.existsSync(folder)) fs.mkdirSync(folder);

      // file read + JSON array me push
      fs.readFile(filePath, "utf8", (err, data) => {
        let users = [];
        if (!err && data) {
          try {
            users = JSON.parse(data);
          } catch {
            users = [];
          }
        }

        users.push(userData);

        fs.writeFile(filePath, JSON.stringify(users, null, 2), (err) => {
          if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Error saving data!");
          } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(`
              <h2>${name}, your details are saved successfully!</h2>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Gender:</strong> ${gender}</p>
              <a href="/">Go Back</a>
            `);
          }
        });
      });
    });
  }

  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
