// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {


  // Badge will appear near top. info added to correct areas, add notice to license area, link to GH profile, email to questions area with instructions on how to reach me. TOC should have links to sections
  return `# ${data.projectName}
  


  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributions](#contributions)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  To install this program and run it as intended, please use the following commands within your node.js server:

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${data.license}

  ## Contributions
  Here is the list of individuals who have contributed to this project!
  
  ${data.contributions}

  ## Tests

  ${data.tests}

  ## Questions
  If you have any questions, please feel free to contact me!
   - [Github](https://github.com/${data.username})
   - [Email](${data.email})
`;
}

module.exports = generateMarkdown;
