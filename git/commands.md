# Git Commands

## General

| Command | Description |
|---------|-------------|
| `git init` | Create a new Git repository |
| `git add <file>` | Add file to staging area |
| `git rm <file>` | Remove file from repository |
| `git mv <from> <to>` | Move or rename file |
| `git commit` | Commit staged changes |
| `git status` | Show working tree status |
| `git log` | Show commit history |
| `git log --decorate` | Show commit history with tags |
| `git log --grep="<search>"` | Search through commit messages |
| `git remote add origin <url>` | Add remote repository |

## Branches

| Command | Description |
|---------|-------------|
| `git branch` | List all branches |
| `git branch <branch>` | Create a new branch |
| `git checkout -b <branch>` | Create and checkout branch |
| `git checkout <branch>` | Switch to branch |
| `git branch -m <from> <to>` | Rename branch |
| `git branch -d <branch>` | Delete local branch |
| `git push origin :<branch>` | Delete remote branch |
| `git diff <branch>` | Show changes between branches |
| `git merge <branch>` | Merge branch into current |
| `mate <file> git add <file> git commit` | Resolving merge conflicts |
| `git checkout -f master` | Discard branch changes |

## Tags

| Command | Description |
|---------|-------------|
| `git tag` | List all tags |
| `git tag -a <tag>` | Create a new tag |
| `git tag -a <tag> <commit>` | Create tag for specific commit |
| `git show <tag>` | Show tag details |
| `git tag -d <tag>` | Delete local tag |
| `git push origin :refs/tags/<tag>` | Delete remote tag |

## Push & Pull

| Command | Description |
|---------|-------------|
| `git push origin master` | Push to master branch |
| `git push origin master --tags` | Push with tags |
| `git fetch origin` | Fetch from remote repository |
| `git merge origin/master` | Merge remote branch into current |
| `git pull` | Fetch and merge into current branch |

## Clone & Submodules

| Command | Description |
|---------|-------------|
| `git clone <url>` | Clone repository |
| `git clone --recursive <url>` | Clone with submodules |
| `git submodule add <url>` | Add submodule to repository |
| `git submodule update` | Update submodule |
