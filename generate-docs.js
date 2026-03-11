const fs = require("fs")
const path = require("path")

const API_KEY = process.env.DEEPSEEK_API_KEY

if (!API_KEY) {
  console.error("Missing DEEPSEEK_API_KEY")
  process.exit(1)
}

function readFiles(dir) {
  const files = fs.readdirSync(dir)

  let code = ""

  for (const file of files) {
    const filePath = path.join(dir, file)

    if (fs.statSync(filePath).isDirectory()) {
      code += readFiles(filePath)
    } else if (file.match(/\.(js|ts|php)$/)) {
      const content = fs.readFileSync(filePath, "utf8")

      code += `

FILE: ${filePath}

${content}

`
    }
  }

  return code
}

async function run() {

  const code = readFiles("./src")

  const prompt = `
Analyze the following code and generate developer documentation
for a Docusaurus documentation site.

Include:

- architecture overview
- module explanation
- usage examples
- mermaid architecture diagram

Code:
${code}
`

  const res = await fetch("https://api.deepseek.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      model: "deepseek-chat",
      messages: [
        { role: "user", content: prompt }
      ]
    })
  })

  const json = await res.json()

  console.log(json)

  const text = json.choices[0].message.content

  if (!fs.existsSync("./docs")) {
    fs.mkdirSync("./docs")
  }

  fs.writeFileSync("./docs/architecture.md", text)

  console.log("Docs generated")
}

run()