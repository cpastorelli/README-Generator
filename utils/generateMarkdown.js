

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'MIT':
       return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)` ;
    case "Apache 2.0":
      return `![GitHub license](https://img.shields.io/badge/License-Apache_2.0-blue.svg)` ;
    case "BSD 3-Clause":
      return `![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)` ;
    case "Creative Commons (CCO)":
      return `![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)` ;
    case "LGPLv3":
      return `![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)` ;
    case "AGPLv3":
      return `![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)` ;
    case "Hippocratic 3.0":
      return `![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)` ;
    case "WTFPL":
      return `![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)` ;
    default:
      return ` `;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case 'MIT':
       return `(https://opensource.org/licenses/MIT)` ;
    case "Apache 2.0":
      return `(https://opensource.org/licenses/Apache-2.0)` ;
    case "BSD 3-Clause":
      return `(https://opensource.org/licenses/BSD-3-Clause)` ;
    case "Creative Commons (CCO)":
      return `(http://creativecommons.org/publicdomain/zero/1.0/)` ;
    case "LGPLv3":
      return `(https://www.gnu.org/licenses/lgpl-3.0)` ;
    case "AGPLv3":
      return `(https://www.gnu.org/licenses/agpl-3.0)` ;
    case "Hippocratic 3.0":
      return `(https://firstdonoharm.dev)` ;
    case "WTFPL":
      return `(http://www.wtfpl.net/about/)` ;
    default:
      return ` `;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {


  // Badge will appear near top. info added to correct areas, add notice to license area, link to GH profile, email to questions area with instructions on how to reach me. TOC should have links to sections
  return `# ${data.projectName}
  
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Built](#built)
  - [License](#license)
  - [Contributions](#contributions)
  - [Acknowledgements](#Acknowledgements)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  To install this program and run it as intended, please use the following commands within your node.js server:

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Built
  
  ${data.build}

  ## License
  The licensing for this project is:
  [${data.license}]${renderLicenseLink(data.license)}

  ## Contributions
  Here is the list of individuals who have contributed to this program!
  
  ${data.contributions}

  ## Acknowledgements
  These sites helped contribute to the completion of this project:
  
  ${data.sites}
  
  ## Tests
  These are the tests that were done to the program:

  ${data.tests}

  ## Questions
  If you have any questions, please feel free to contact me!

  - [Github](https://github.com/${data.username})
  - [Email](${data.email})
`;
}

module.exports = generateMarkdown;
