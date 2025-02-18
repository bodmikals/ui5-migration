# Contributing to the UI5 Migration
## 📖 Content
 1. [Analyzing Issues](#-analyzing-issues)
 2. [Reporting Issues](#-reporting-issues)
 3. [Contributing Code](#-contributing-code)

## ⚡️ Quick Links
- [Open Issues](https://github.com/SAP/ui5-migration/issues)
- [Open Pull Requests](https://github.com/SAP/ui5-migration/pulls)

## 🔍 Analyzing Issues
Analyzing issue reports can be a lot of effort. Any help is welcome! 👍

Open the [Open Issues](https://github.com/SAP/ui5-migration/issues) and look for open issues which require triage, additional work, or a bugfix.  
Especially check for issues with the labels **`good first issue`** or **`help wanted`**.

You may be able to add additional or missing information, such as a step-by-step guide on how to reproduce an issue or an analysis of the root cause. In case of the latter, you might even be able to [contribute](#-contributing-code) a bugfix. 🙌

## 📝 Reporting Issues

### Requirements for a Bug Report
You are encouraged to use the [issue template](ISSUE_TEMPLATE.md).

1. **Only UI5 Migration issues**
    * Please do not report:
        * Issues caused by dependencies or plugins.
        * Issues caused by the use of non-public/internal methods. Only the public methods listed in the API documentation may be used.
        * Something you do not get to work properly, see [Not a Bug / Questions](#not-a-bug--questions).
2. **No duplicate**: You have searched the [issue tracker](https://github.com/SAP/ui5-migration/issues) to make sure the bug has not yet been reported.
3. **Good summary**: The summary should be specific to the issue.
4. **Current bug**: The bug can be reproduced in the most current version.
5. **Reproducible bug**: There are step-by-step instructions provided on how to reproduce the issue.
6. **Well-documented**:
    * Precisely state the expected and the actual behavior.
    * Give information about the environment in which the issue occurs (OS/Platform, Node.js version, etc.).
    * Generally, give as much additional information as possible.
8. **Only one bug per report**: Open additional tickets for additional issues.
9. **Please report bugs in English.**

### Reporting Security Issues
If you find a security issue, act responsibly and do not report it in the public issue tracker, but directly to us. This allows us to provide a fix before it can be exploited.

- **Researchers/non-Customers:** Send the related information to secure@sap.com using [PGP for e-mail encryption](http://global.sap.com/pc/security/keyblock.txt).  
- **SAP Customers:** If the security issue is not covered by a published security note, please report it by creating a customer message at https://service.sap.com/message.

Also refer to the general [SAP security information page](https://www.sap.com/corporate/en/company/security.html).

### Use of Labels
GitHub offers labels to categorize issues. The labels can only be set and modified by committers.

##### General issue categories:
* **`bug`**: This issue is a bug in the code.
* **`documentation`**: This issue is about wrong documentation.
* **`enhancement`**: This is not a bug report, but an enhancement request.

##### Status of an open issue:
* **`information required`**: The author is required to provide information.
* **`good first issue`**: A newcomer may work on this.
* **`help wanted`**: Additional help in analyzing this issue is appreciated.

##### Status/resolution of a closed issue:
* **`duplicate`**: The issue was already reported somewhere else.
* **`invalid`**: For any reason, this issue report will not be handled further. Possible reasons are lack of information, or that the issue does not apply anymore.
* **`wontfix`**: While acknowledged to be an issue, a fix cannot or will not be provided.

### Issue Reporting Disclaimer
We want to improve the quality of the UI5 Migration and good bug reports are welcome! But our capacity is limited, so we cannot handle questions or consultation requests, and we cannot afford to ask for required details.

Therefore, we reserve the right to close or to not process insufficient bug reports in favor of those which are clearly documented and easy to reproduce. Even though we would like to solve each well-documented issue, there is always the chance that it won't happen - please remember: The UI5 Migration is Open Source and comes without warranty.

Bug report analysis support is always very welcome! See [Analyze Issues](#-analyzing-issues).

## 💻 Contributing Code
### General Remarks
You are welcome to contribute code to the UI5 Migration in order to fix bugs or to implement new features.

There are three important things to know:

1. You must be aware of the Apache License (which describes contributions) and **agree to the Developer Certificate of Origin***. This is common practice in major Open Source projects. To make this process as simple as possible, we are using *[CLA assistant](https://cla-assistant.io/)* for individual contributions. CLA assistant is an open source tool that integrates with GitHub very well and enables a one-click experience for accepting the DCO. For company contributers, special rules apply. See the respective section below for details.
2. Follow our **[Development Conventions and Guidelines](docs/Guidelines.md)**.
3. **Not all proposed contributions can be accepted**. Some features may just fit a third-party add-on better. The code must match the overall direction of the UI5 Migration and improve it. So there should be some "bang for the byte". For most bug fixes this is a given, but a major feature implementation first needs to be discussed with one of the committers. Possibly, one who touched the related code or module recently. The more effort you invest, the better you should clarify in advance whether the contribution will match the project's direction. The best way would be to just open an enhancement ticket in the issue tracker to discuss the feature you plan to implement (make it clear that you intend to contribute). We will then forward the proposal to the respective code owner. This avoids disappointment.

### Developer Certificate of Origin (DCO)
Due to legal reasons, contributors will be asked to accept a DCO before they submit the first pull request to this project. SAP uses [the standard DCO text of the Linux Foundation](https://developercertificate.org/).  
This happens in an automated fashion during the submission process: the CLA assistant tool will add a comment to the pull request. Click it to check the DCO, then accept it on the following screen. CLA assistant will save this decision for upcoming contributions.

This DCO replaces the previously used CLA ("Contributor License Agreement") as well as the "Corporate Contributor License Agreement" with new terms which are well-known standards and hence easier to approve by legal departments. Contributors who had already accepted the CLA in the past may be asked once to accept the new DCO.

### How to Contribute
1. Make sure the change is welcome (see [General Remarks](#general-remarks)).
    - Also check on the [UI5 Migration Issues](https://github.com/SAP/ui5-migration/issues) whether related tasks are already being worked on, blocked, or in discussion.
1. Create a branch by forking the relevant module repository and apply your change.
1. Commit and push your change on that branch.
    - 👉 **Please follow our [Development Conventions and Guidelines](docs/Guidelines.md).**
1. Create a pull request in the relevant repository.
1. Follow the link posted by the CLA assistant to your pull request and accept it, as described above.
1. Wait for our code review and approval, possibly enhancing your change on request.
    - Note that the UI5 developers have many duties. So, depending on the required effort for reviewing, testing, and clarification, this may take a while.
1. Once the change has been approved and merged, we will inform you in a comment.
1. Celebrate! 🎉

### Contributing with AI-generated code
As artificial intelligence evolves, AI-generated code is becoming valuable for many software projects, including open-source initiatives. While we recognize the potential benefits of incorporating AI-generated content into our open-source projects there are certain requirements that need to be reflected and adhered to when making contributions.

Please see our [guideline for AI-generated code contributions to SAP Open Source Software Projects](https://github.com/SAP/.github/blob/main/CONTRIBUTING_USING_GENAI.md) for these requirements.
