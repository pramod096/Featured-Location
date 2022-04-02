# Featured-Location
<p>
     <a target="_blank" rel="noopener noreferrer" href="https://pramod096.github.io/vuese-featuredlocation-doc/">
    <img alt="Documentation" src="https://img.shields.io/badge/Documentation-%2341B883.svg?style=flat&logo=Vue.js&logoColor=white"/>
        </a>
  &emsp;
    <a target="_blank" rel="noopener noreferrer" href="https://github.com/pramod096/jest-testcoverage-featuredlocation">
    <img alt="Code Coverage" src="https://img.shields.io/badge/Code Coverage%20-%23E34F26.svg?logo=jest&logoColor=white">
      </a>
   &emsp;
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/pramod096/swagger-featuredlocation-doc">
    <img alt="Swagger" src="https://img.shields.io/badge/Swagger-%234DB33D.svg?style=flat&logo=swagger&logoColor=white"/>
        </a>
     &emsp;
      <a target="_blank" rel="noopener noreferrer" href="https://www.codacy.com/gh/pramod096/Featured-Location/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=pramod096/Featured-Location&amp;utm_campaign=Badge_Grade">
    <img alt="Codacy" src="https://img.shields.io/badge/Code Quality-%33880ff.svg?style=flat&logo=codacy&logoColor=white"/>
        </a>
   &emsp;
        <a target="_blank" rel="noopener noreferrer" href="https://snyk.io/test/github/pramod096/Featured-Location">
    <img alt="Snyk" src="https://img.shields.io/badge/Vulnerabilities%20-%2314354C.svg?style=flat&logo=snyk&logoColor=white"/>
          </a>
</p>

#### Website Development [***Proposal***](https://github.com/pramod096/Proposal-4B/blob/main/Proposal.md) for Featured Location [***RFP***](https://github.com/KeerthiMuli/featured-locations/blob/main/RFP.md).

A Progressive Web Application that is a City Guide for Maryville, which offers users with essential city information and also saves time. The application shows all the places to visit in Maryville and users can also suggest new locations.

## Team Members
|[Pramod Reddy Gonegari](https://github.com/pramod096) | [Narendra Kumar Gunturu](https://github.com/Narendra-kumar-Gunturu) |  [Narsing Rao Nikitha Madhari](https://github.com/NikithaMN-05) |  [Abhilash Ramavaram](https://github.com/AbhiRam0099) |
|:------:|:------:|:------:|:------:|

## Stack

We are developing the Website with ***Node.js/Express.js*** for Back-end, as it is easily scalable and has high performance and ***Vue.js***, ***Bootstrap*** for the Font-end.

The Application development is planned using our [***Project Board***](https://github.com/pramod096/Featured-Location/projects/1), [***Issues***](https://github.com/pramod096/Featured-Location/issues), [***Milestones***](https://github.com/pramod096/Featured-Location/milestones) and our weekly progress is communicated through [***Wiki***](https://github.com/pramod096/Featured-Location/wiki).


## Run the Application
- To run this application, ***Vue.js***, ***Node.js*** and ***npm*** must be installed.
- Both the Frontend and Backend are configured into this single repository. The entire front-end is developed in a folder named ui.
- Install all the necessary node packages and dependencies, by executing the command, in both the root and ui folders.
```
npm install
```
- To start the Backend, from the ***root*** folder, run the following command:
```
npm run dev
```

- Frontend can be run, by executing the command below, from the ***ui*** folder:
```
npm run serve
```

- The production ready build, can be generate with the command:
```
npm run build
```

## Test Coverage
- Testing is done using ***Jest***, which is a JavaScript testing framework maintained by Meta, designed and built by Christoph Nakazawa with a focus on simplicity and support for large web applications. It works with projects using Babel, TypeScript, Node.js, React, Angular, Vue.js and Svelte.
- The Test Cases are written in the *&#95;&#95;tests&#95;&#95;* folder, which can be accessed from [here](https://github.com/pramod096/Featured-Location/tree/main/ui/__tests__). The output code coverage generated after executing all the test cases is directed to [Test Coverage Repo](https://github.com/pramod096/jest-testcoverage-featuredlocation).
- From the ***ui*** folder, run the following command to execute tests and generate Code Coverage.

```
npm run test:unit --coverage
```

