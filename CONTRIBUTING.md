# Contribution Guidance

## Contents

* [Git](#git)
* [Testing](#testing)
* [Code](#code)

## Git

### Branches

All work should be done on a [feature branch](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow). Feature branch names should be descriptive.

Branches get merged into a parent branch through a GitHub [pull request](https://help.github.com/en/articles/about-pull-requests). For minor features, the pull request can be made directly from the feature branch into the master branch. For major features (e.g., changes that will take several weeks, have several components, and involve multiple developers), there should be a "master feature" branch for that change, and contributions to the "master feature" branch should be done through pull requests into the "master feature" branch. When the major feature is complete, the "master feature" branch will be pulled into the master branch.

To create a branch:

```
git checkout <parent branch>
git pull
git checkout -b <new branch name>
```

### Committing and Pushing Code

There are a few key principles to committing code to the remote repository:

* You are committing working code
* You are committing what you expect to commit
* You are not committing debug code
* You are not committing junk (e.g., whitespace only changes)

These rules do not apply to local commits **as long as you squash/fixup those commits before pushing to the remote repository**.

To commit code locally, do the following:

```
git diff
git add <appropriate files>
git status
git commit -m <commit message>
```

Use the `git diff` command to ensure you are committing what you expect and are not committing debug code or whitespace code.

If you want to push to the remote repository, do the following:

```
git push
```

You may need to do a force push (`git push -f`) if you rebased your branch (see [Creating a Pull Request](#creating-a-pull-request)). **Make sure you are pushing what you expect when you do a force push!!!** You should do this regardless, but need to be especially especially careful when doing a force push. These are dangerous as they modify the remote history. Also ensure that anyone who may be using this branch is aware you are doing a force push because this can mess up their local instance of the repository.


#### Cleaning Up Your Local Commit History Before Pushing

Each commit that gets pushed remotely needs to follow the rules above. If you did some messy commits locally and need to clean them up before pushing to the remote repository, do the following steps.

* Make sure that your latest commit works, has no debug statements, and no junk (e.g., whitespace only changes)
* Squash any commits that have debug statements / extra whitespace / broken code into commits that do not have these.
* Push

This may look like the following:

```
git diff origin/<branch name>
git rebase -i HEAD~<number of commits you have added on top of the remote branch>
git push
```

`git diff origin/<branch name>` performs a diff against the remote version of the branch.

`git rebase -i` opens up an editor (VI if you haven't configured anything else) to allow you to modify the commits. **Only modify local commits**. Follow the instructions in the editor to fixup or squash the commits as appropriate.

### Pull Requests

#### Pull Requests into Master

Pull requests into master should have at least one reviewer from each organization funded by CMS to manage the repository, and should have at least two reviewers total. The reviewers from the funded organizations are expected to submit a review in a timely manner within three business days of the pull request being submitted. If a review needs to be expedited (e.g., a bug fix necessary to meet a CMS deadline), the submitter should communicate directly with the reviewers to ensure that they are aware of the expedited timeline and document this requirement within the pull request. Pull requests that don’t require an expedited review should remain open at least three business days to allow community members to perform a review.

Community members are expected to review pull requests of interest and provide comments regarding their questions or concerns. Both the pull request submitter and the commenter are expected to be responsive to one another, preferably replying within one business day to a comment or response. A reply should at a minimum signal any actions that may be taken.

Exceptions include gemfile updates and config file updates for in incrementing the version numbers. These only require a single reviewer and can be considered a "sanity check" review.

#### Pull Requests into a Feature Branch

The organization responsible for a major feature is responsible for determining how new content will be incorporated into the "master feature" branch. However, we recommend that pull requests into feature branches include at least one reviewer and that the checklist is still completely filled out (see below).

#### Pull Request Checklists

Pull requests include a [checklist](https://github.com/projecttacoma/bonnie/blob/master/.github/PULL_REQUEST_TEMPLATE.md). Each checkbox must be checked. If a checkbox is not applicable to the pull request for some reason, it should still be checked and be noted with "N/A" or a strike-through.

If your pull request is dependent on another pull request in a separate repository, put another checkbox in the checklist ensuring that the other pull request is complete and incorporated and all depedencies are appropriately updated.

#### Best Practices

* Inform the people assigned to your review that they are on point for the review.
* When you have addressed review comments, ping your reviewers for their re-review.
* If you have a PR dependent on another PR, create a new checkbox in your PR that says waiting on the other PR to be merged.

#### Creating a Pull Request

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

1. Run all tests.

1. Confirm test coverage has not gone down (and has hopefully gone up), and that all new or modified code is covered by tests.

1. Commit and push the code following the instructions in [Committing and Pushing Code](#committing-and-pushing-code).

1. [Create the pull request on github](https://help.github.com/en/articles/creating-a-pull-request).

1. Fill out the pull request checklist.

1. Assign your reviewers and let them know that they are a reviewer for your pull request.

1. Be responsive to any comments.

1. After your pull request has been approved, ping the team lead to merge the request in. There are two ways to do this:

    * Squash merge

      This is for minor features into the master branch or for pull requests into a major feature branch.

    * Merge
    
      This is for major feature branches where the commit history should be preserved.

## Testing

All new or modified code should be covered by a test when possible. However, being covered is not sufficient. The author and reviewers are expected to ensure that the new or modified code is **actually being tested**, meaning expected and edge cases are being checked.

When the code is overly difficult to create an automated test for (which should ideally only be the case for older code that was not written to be easily tested), then a manual test can be created. The manual test should be in a traceable and repeatable formate (e.g., if JIRA is being used, using JIRA tests).

## Code

### JavaScript

We follow the [ESLint](https://eslint.org/) [AirBnB base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) with a few exceptions, which are noted in the .eslintrc.json file.

### CoffeeScript

We follow [CoffeeLint](https://github.com/clutchski/coffeelint) with the configurations in the coffeelint.json file.

### Ruby

We follow [RuboCop](https://rubocop.readthedocs.io/en/latest/) with the configurations in the .rubocop.yml file.

### Indenting

Indentations should be done using two spaces. This can be configured in your editor so when you press "TAB", two spaces are entered.