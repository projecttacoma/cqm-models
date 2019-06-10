# CQM-Models Governance Model

This governance model is based on [OSS Watch's Meritocratic Governance Model](http://oss-watch.ac.uk/resources/meritocraticgovernancemodel) and the [CQFramework Clinical Quality Language Change Management document](https://github.com/cqframework/clinical_quality_language/blob/master/CHANGE_MANAGEMENT.md). It has been heavily modified to meet the needs of a government funded open source project managed by multiple organizations.

## Overview

Centers for Medicare and Medicaid Services (CMS) fund X and Y companies to develop and maintain this repository. This repository is led by X and Y, and maintained by the community, meaning the community may actively contribute to the day-to-day maintenance of the project. The strategic direction and resolution of any disagreements regarding the repository is determined by X and Y, with CMS having the final word. The community guides the decisions of X, Y, and CMS through active engagement and contribution. This document outlines the roles and responsibilities, contribution model, and decision-making process.

## Roles and Responsibilities

### Users

Users are community members who have a need for the project. They are the most important members of the community and without them the project would have no purpose. Anyone can be a user; there are no special requirements.

The project asks its users to participate in the project and community as much as possible. User contributions enable the project team to ensure that they are satisfying the needs of those users. Common user contributions include (but are not limited to):
* evangelizing about the project (e.g. a link on a website and word-of-mouth awareness raising)
* informing developers of strengths and weaknesses from a user perspective
* providing moral support (a ‘thank you’ goes a long way)

Users who continue to engage with the project and its community will often become more and more involved. Such users may find themselves becoming contributors, as described in the next section.

### Contributors

Contributors are community members who contribute in concrete ways to the project. Anyone can become a contributor, and contributions can take many forms. There is no expectation of commitment to the project, no specific skill requirements and no selection process.

In addition to their actions as users, contributors may also find themselves doing one or more of the following:

* supporting new users (existing users are often the best people to support new users)
* reporting bugs
* identifying requirements
* providing graphics and web design
* programming
* assisting with project infrastructure
* writing documentation
* fixing bugs
* adding features

Contributors engage with the project through the issue tracker and mailing list, or by submitting pull requests from a forked repository. Pull requests will be considered for inclusion in the project by existing committers. The developer mailing list is the most appropriate place to ask for help when making that first contribution.

As contributors gain experience and familiarity with the project, their profile within, and commitment to, the community will increase. At some stage, they may find themselves being nominated for committership.

### Committers

Committers are community members who have shown that they are committed to the continued development of the project through ongoing engagement with the community. Committership allows contributors to more easily carry on with their project related activities by giving them direct access to the project’s resources. That is, they have commit rights directly into the repository and do not need to work off of a forked repository.

This does not mean that a committer is free to do what they want. While committership indicates a valued member of the community who has demonstrated a healthy respect for the project’s aims and objectives, their work continues to be reviewed by the community before acceptance in an official release.

Anyone can become a committer; there are no special requirements, other than to have shown a willingness and ability to participate in the project as a team player. Typically, a potential committer will need to show that they have an understanding of the project, its objectives and its strategy. They will also have provided valuable contributions to the project over a period of time.

New committers can be nominated by any existing committer. Once they have been nominated, there will be a vote by the project management committee (PMC; see below). Committer voting is one of the few activities that takes place on the project’s private management list. This is to allow PMC members to freely express their opinions about a nominee without causing embarrassment. Once the vote has been held, the aggregated voting results are published on the public mailing list. The nominee is entitled to request an explanation of any ‘no’ votes against them, regardless of the outcome of the vote. This explanation will be provided by a member of the PMC and will be anonymous and constructive in nature.

Nominees may decline their appointment as a committer. However, this is unusual, as the project does not expect any specific time or resource commitment from its community members. The intention behind the role of committer is to allow people to contribute to the project more easily, not to tie them in to the project in any formal way.

It is important to recognize that committership is a privilege, not a right. That privilege must be earned and once earned it can be removed by the PMC (see next section) in extreme circumstances. However, under normal circumstances committership exists for as long as the committer wishes to continue engaging with the project.

### Project Management Committee (PMC)

The project management committee is made up of the leadership teams from X and Y. The PMC has additional responsibilities over and above those of a committer. These responsibilities ensure the smooth running of the project. PMC members are expected to manage new features and functionality, review code contributions, participate in strategic planning, approve changes to the governance model and manage the copyrights within the project outputs.

Members of the PMC make decisions when community consensus cannot be reached. In addition, the PMC has access to the project’s private mailing list and its archives. This list is used for sensitive issues, such as votes for new committers and legal matters that cannot be discussed in public. It is never used for project management or planning.

In rare instances, the PMC may decide to remove a committer’s commit rights. The PMC may choose to remove a committer’s commit rights if they do not follow the code of conduct, submit malicious code, demonstrate continued poor judgment, or other reasons at the PMC’s discretion. The PMC votes on removing commit rights over the private mailing list. 

### Sponsor

The Sponsor is the CMS Government Task Lead (GTL) for the X and Y teams. It is possible that there may be multiple Sponsors. In this case, the Sponsors will work closely together in this role. The Sponsor has final say in the strategic direction of the project as well as how disagreements that could not be resolved through the PMC will be resolved.

## Decision-Making Process

Decisions about the project are made by the PMC in coordination with the Sponsor, with the Sponsor having final say. Community members may provide suggestions or ideas regarding the direction of the project for review by the PMC and the Sponsor. Discussions should occur on the public project mailing list as much as possible. However, if a discussion should be limited to input from those in the PMC, it should be done on the public PMC email list to ensure that discussions and decisions will be archived to enable future review. If a discussion must be private for legal or sensitive issues, it should be done on the project’s private mailing list.

Because multiple organizations are being funded by CMS to manage this repository, there may be disagreements between representatives of those organizations within the PMC. If disagreements cannot be resolved within the PMC, they may be escalated to the Sponsor to resolve. 

## Support

All participants in the community are encouraged to provide support for new users within the project management infrastructure. This support is provided as a way of growing the community. Those seeking support should recognize that all support activity within the project outside of the work funded by CMS is voluntary and is therefore provided as and when time allows. However, for those willing to engage with the project on its own terms, and willing to help support other users, the community support channels are ideal.

## Code of Conduct

In support of a healthy and inclusive community, we use and enforce a code of conduct for all members of our community, including committers and PMC members. Our code of conduct is adapted from the Contributor Covenant.

If you encounter any violation of these terms, please contact the PMC Chair or a PMC committee member. All reports will be kept in strict confidence and dealt with promptly.

## Contribution Process

Anyone can contribute to the project, regardless of their skills, as there are many ways to contribute. For instance, a contributor might be active on the project mailing list and issue tracker, or might make pull requests. Decisions within the GitHub repository go through a pull request process described below.

After reviewing the available contribution documentation, the developer mailing list is the most appropriate place for a contributor to ask for help when making their first contribution.

### GitHub Repository Changes

The project uses a stable-trunk methodology, meaning that the master branch must be kept in a releasable state at all times. This is ensured through regression tests and continuous integration is used to check pull requests to the master branch.

Changes to the content of the GitHub repository must go through a pull request process. Pull requests should have at least one reviewer from each organization funded by CMS to manage the repository. The reviewers from the funded organizations are expected to submit a review in a timely manner within 10 days of the pull request being submitted. If a review needs to be expedited (e.g., a bug fix necessary to meet a CMS deadline), the submitter should communicate directly with the reviewers to ensure that they are aware of the expedited timeline and document this requirement within the pull request. Pull requests that don’t require an expedited review should remain open at least three business days to allow community members to perform a review.

Community members are expected to review pull requests of interest and provide comments regarding their questions or concerns. Both the pull request submitter and the commenter are expected to be responsive to one another, preferably replying within one business day to a comment or response. A reply should, at a minimum, signal any actions that may be taken.

#### Permissions

The GitHub repository permissions will be aligned with the roles outlined above in the following way:
* PMC 
  * Admin permissions: Team members can read, clone, push, and add collaborators to this repository
* Committer
  * Write permissions: Team members can read, clone, and push into this repository
* Contributor/User
  * Read permissions: Team members can read and clone this repository

In addition, there are Owner permissions (people with owner roles can manage repository access with teams and have extensive permissions across all repositories in an organization). New repositories should be created in a shared GitHub organization, with ownership being shared by the X and Y team leads. For pre-existing repositories,  the leaders of the team that originally created the repository retain Owner permissions as the repository resides in their company’s GitHub organization. The PMC or Sponsor can decide to move the repository to the shared GitHub organization and consequently change the owners; however, this change of location may cause confusion within the contribution community.

## Communication Channels

Communication should be done in an open and public manner. The project uses many different channels for open communication, including:

* Public Mailing List: <mailing list>
* PMC Mailing List: <mailing list>
* Private Mailing List: <mailing list>
* GitHub Issues

Sometimes, communication occurs outside of these public channels, and that is okay; however, committers must summarize any private discussions that impact the tooling project in a public channel. Additionally, there are times when a topic may not be suitable for a public channel or mailing list. An example is a security vulnerability, as advertising this before it is fixed may pose a security risk to the system. For these situations, private communications with a public summary after the issue has been addressed is expected.

## Releases

All packages within the project shall use semantic versioning. Any stakeholder can propose a release, but the PMC must review and approve the contents and timing of any release. Specifically, releases must be coordinated with impacted stakeholders and timed with availability of published versions of the specifications involved. A member of the PMC is responsible for announcing releases to the community via the mailing list.
