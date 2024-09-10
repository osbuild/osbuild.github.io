# Development workflow 🏗️

## Commits 💎

1. Commits should be easy to read and ideally do only a single thing.
2. The commit message should explain clearly what it's trying to do and why. Refer to the format we prefer below.
3. A Jira issue or - where applicable - a GitHub issue reference should be added to automatically link and potentially close a related issue if it exists.

### Preferred commit message format

```
<module>: Topic of the commit

Body of the commit, describing the changes in more detail including the
why/what/how.
```

- The `<module>` should point to the area of the codebase (for instance `tests` or `tools`). The topic
should summarize what the commit is doing.
- GitHub truncates the first line if it's longer than 65 characters, which is something to keep in mind as well.
- GitHub PR descriptions are disconnected from the actual `git`
history and will not show up in e.g. `git blame` or `git log` so consider
them more ephemeral.

A good commit message will help our future selfs to get back into the
context that the author had when writing the code. It should include
decisions/considerations/background that were important when the
commit was written so that a `git show <commit>` provides a concise
way to (re)acquire this context. See [this](https://github.com/osbuild/osbuild/commit/a2e212bb2641cf28e5701ad4a2202261c2c5ee5c) as an example.


## Pull requests 🌟

We try to follow some best practices around pull requests. Some of them are [encoded in a CI pipeline already](https://github.com/osbuild/pr-best-practices).

1. A pull request should be one or more commits which form a coherent unit, it can be
rebased/rewritten/force-pushed until it's fit for merging.
2. All changes shall be tested. If new tests are necessary to cover new functionality, it should be part of the pull request.
3. Pull requests shall always be as small as possible, to make them easy and quick to review.
4. The pull request title shall contain [a reference to the relevant Jira ticket](https://issues.redhat.com).
5. Every pull request shall have a clear summary.
6. Every pull request shall be eagerly reviewed, ideally within a day after being marked as ready for review. [Our internal review queue helps the team with that](https://github.com/osbuild/pr-review-queue).

This is how the workflow works:
1. Pull requests should be opened from a developer's own fork to avoid random branches on the origin.
2. Once a pull request is ready to be merged, it should be merged via the `Rebase and merge` or `Squash and merge` option. This avoids merge commits on the main branch.

How a pull request developed, and the iterations it went through, should not be visible in the git history. The end result counts: a certain amount of commits, each one forming a logical unit of changes. Avoid 'fix-up' commits which tweak previous commits in the pull request.

## Branches 🌳

Force-pushing to, or rebasing the main branch (or other release branches) is not allowed. Avoid directly pushing (fast-forward) to those branches as well. Commits can always be reverted by opening a new pull request.
