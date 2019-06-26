# Contribution Guidance

## Git

### Branches

All work should be done on a [feature branch](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow). Feature branch names should be descriptive.

For minor features, the pull request can be made directly from the feature branch into master branch.

For major features (e.g., changes that will take several weeks, have several components, and involve multiple developers), there should be a "master feature" branch for that change, and contributions to the "master feature" branch should be done through pull requests into the "master feature" branch.

To create a branch:

```
git checkout <parent branch>
git pull
git checkout -b <new branch name>
```

### Committing Code

There are a few key principles to committing code to the remote repository:

* You are committing working code
* You are committing what you expect to commit
* You are not committing debug code
* You are not committing junk (e.g., whitespace only changes)

These rules do not apply to local commits **as long as you squash/fixup those commits before pushing to the remote repository**.

```
git diff
git add <appropriate files>
git status
git commit -m <commit message>
git push
```

Use the `git diff` command to ensure you are committing what you expect and are not committing debug code or whitespace code.

#### Cleaning 

### Pull Requests

#### Creating a pull request
1. Make sure that you're branch is up to date with master (or whatever branch it is being merged into). There are two ways to do this:
    * Merge the parent branch in (minor features and commits into "major feature" branches)
    
      This is appropriate if you will later do a "squash merge" when integrating this branch into the parent branch. This should be the case for minor features and for commits into "major feature" branches.
      ```
      git fetch
      git merge origin/<parent branch>
      ```
    * Rebase onto the top of the parent branch ("major feature" branches)

      This is appropriate if you want to retain your commit history in a logical sequence. This puts all of the branch's commits on top of the parent branch's commits.
      ```
      git fetch
      git rebase origin/<parent branch>
      ```

#### Merging a pull request


#### Pull Requests into master

Pull requests into **master** should have at least one reviewer from each organization funded by CMS to manage the repository, and should have at least two reviewers total. The reviewers from the funded organizations are expected to submit a review in a timely manner within three business days of the pull request being submitted. If a review needs to be expedited (e.g., a bug fix necessary to meet a CMS deadline), the submitter should communicate directly with the reviewers to ensure that they are aware of the expedited timeline and document this requirement within the pull request. Pull requests that don’t require an expedited review should remain open at least three business days to allow community members to perform a review.

Community members are expected to review pull requests of interest and provide comments regarding their questions or concerns. Both the pull request submitter and the commenter are expected to be responsive to one another, preferably replying within one business day to a comment or response. A reply should at a minimum signal any actions that may be taken.

Exceptions include gemfile updates and config file updates for in incrementing the version numbers. These only require a single reviewer and can be considered a "sanity check" review.

#### Pull Requests into a feature branch

The organization responsible for a major feature is responsible for determining how new content will be incorporated into the "master feature" branch. However, we recommend that pull requests into feature branches include at least one reviewer and that the checklist is still completely filled out (see below).

#### Pull Request Checklists

Pull requests include a [checklist](https://github.com/projecttacoma/bonnie/blob/master/.github/PULL_REQUEST_TEMPLATE.md). Each checkbox must be checked. If a checkbox is not applicable to the pull request for some reason, it should still be checked and be noted with "N/A" or a strike-through.

If your pull request is dependent on another pull request in a separate repository, put another checkbox in the checklist ensuring that the other pull request is complete and incorporated and all depedencies are appropriately updated.

#### Best Practices

* Inform the people assigned to your review that they are on point for the review.
* When you have addressed review comments, ping your reviewers for their re-review.
* If you have a PR dependent on another PR, create a new checkbox in your PR that says waiting on the other PR to be merged.

## Code

