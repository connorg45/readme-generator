// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== 'None') {
        let badgeLink, websiteLink;

        // Set the badgeLink and websiteLink based on the selected license
        switch (license) {
            case 'MIT':
                badgeLink = 'https://img.shields.io/badge/License-MIT-blue.svg';
                websiteLink = 'https://opensource.org/licenses/MIT';
                break;
            case 'APACHE 2.0':
                badgeLink =
                    'https://img.shields.io/badge/License-Apache_2.0-blueviolet.svg';
                websiteLink = 'https://www.apache.org/licenses/LICENSE-2.0';
                break;
            case 'GPL 3.0':
                badgeLink =
                    'https://img.shields.io/badge/License-GPLv3-blue.svg';
                websiteLink = 'https://www.gnu.org/licenses/gpl-3.0';
                break;
            case 'BSD 3':
                badgeLink =
                    'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg';
                websiteLink = 'https://opensource.org/licenses/BSD-3-Clause';
                break;
            default:
                badgeLink = '';
                websiteLink = '';
        }

        // Return the license badge markdown with a clickable link to the license website
        return `\n[![License](${badgeLink})](${websiteLink})\n`;
    }
    return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license !== 'None') {
        let websiteLink;

        // Set the websiteLink based on the selected license
        switch (license) {
            case 'MIT':
                websiteLink = 'https://opensource.org/licenses/MIT';
                break;
            case 'APACHE 2.0':
                websiteLink = 'https://www.apache.org/licenses/LICENSE-2.0';
                break;
            case 'GPL 3.0':
                websiteLink = 'https://www.gnu.org/licenses/gpl-3.0';
                break;
            case 'BSD 3':
                websiteLink = 'https://opensource.org/licenses/BSD-3-Clause';
                break;
            default:
                websiteLink = '';
        }

        // Return the license link markdown
        return `\n[License](${websiteLink})\n`;
    }
    return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== 'None') {
        let licenseText, licenseLink;

        // Set the licenseText and licenseLink based on the selected license
        switch (license) {
            case 'MIT':
                licenseText = 'MIT license';
                licenseLink = 'https://opensource.org/licenses/MIT';
                break;
            case 'APACHE 2.0':
                licenseText = 'Apache 2.0 license';
                licenseLink = 'https://www.apache.org/licenses/LICENSE-2.0';
                break;
            case 'GPL 3.0':
                licenseText = 'GNU GPL v3 license';
                licenseLink = 'https://www.gnu.org/licenses/gpl-3.0';
                break;
            case 'BSD 3':
                licenseText = 'BSD 3-Clause License';
                licenseLink = 'https://opensource.org/licenses/BSD-3-Clause';
                break;
            default:
                return '';
        }

        // Return the license section markdown with the license text and clickable link
        return `## License

This project is licensed under the [${licenseText}](${licenseLink}).`;
    }

    return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.appName || ''}
  
  ${renderLicenseBadge(data.license)}
  
  ## Table of Contents
  
  [Description](#description) | [Installation](#installation) | [Usage](#usage) | [License](#license) | [Contributing](#contributing) | [Tests](#tests) | [Questions](#questions)
  
  ## Description
  
  ${data.description || ''}
  
  ## Installation
  
  ${data.installation || ''}
  To install dependencies, use this/these command/s: ${data.installationCommand || ''}
  
  ## Usage
  
  ${data.usage || ''}
  
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  
  ${data.contributing || ''}
  
  ## Tests
  
  ${data.tests || ''}
  The test command/commands are ${data.testCommand || ''}
  
  ## Questions
  
  If there are any questions, feel free to contact me through [Email](mailto:${data.email || ''}) or [GitHub](${data.github || ''})
  `;
  }

module.exports = generateMarkdown;
