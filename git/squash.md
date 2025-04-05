# Squashing

To squash all commits in your current branch into one commit, follow these steps:

1. First, identify how many commits you want to squash by checking your Git history:

```bash
git log
```

2. Start an interactive rebase going back to the appropriate number of commits. Replace `N` with the number of commits you want to squash:

```bash
git rebase -i HEAD~N
```

Or, if you want to squash all commits since branching from `main`:

```bash
git rebase -i main
```

3. Your text editor will open, showing a list of commits. Change all commits _except_ the first one from "pick" to "squash" or just "s":

```bash
pick abc1234 First commit message
s def5678 Second commit message
s ghi9101 Third commit message
```

4. Save and close the editor. Another editor will open, allowing you to edit the combined commit message.

5. After editing the commit message, save and close the editor to complete the squash.

6. If you've already pushed your branch, you'll need to force push:

```bash
git push --force-with-lease origin your-branch-name
```
