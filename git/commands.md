# Commands

### General

Create repository: `git init`
Add file: `git add <file>`
Remove file: `git rm <file>`
Move or rename file: `git mv <from> <to>`
Commit changes: `git commit`
Show changes:`git status`
Show log: `git log`
Show log with tags: `git log --decorate`
Search thru commit messages: `git log --grep="<search>"`
Add remote repository: `git remote add origin <url>`

### Branches

Show branches: `git branch`
Create branch: `git branch <branch>`
Create and checkout branch: `git checkout -b <branch>`
Checkout branch: `git checkout <branch>`
Rename branch: `git branch -m <from> <to>`
Delete branch: `git branch -d <branch>`
Delete remote branch: `git push origin :<branch>`
Review branch changes: `git diff <branch>`
Merge branch into current: `git merge <branch>`
Resolve merge conflicts:

	mate <file>
	git add <file>
	git commit

Discard branch changes: `git checkout -f master`

### Tags

Show tags: `git tag`
Create tag: `git tag -a <tag>`
Create tag for specific commit: `git tag -a <tag> <commit>`
Show tag data: `git show <tag>`
Delete tag: `git tag -d <tag>`
Delete remote tag: `git push origin :refs/tags/<tag>`

### Push

Push to master: `git push origin master`
Push with tags: `git push origin master --tags`

### Pull

Fetch from remote repository: `git fetch origin`
Merge remote branch into current: `git merge origin/master`
Fetch and merge into current branch: `git pull`

### Clone

Clone repository: `git clone <url>`
Clone with submodules: `git clone --recursive <url>`

### Submodules

Add submodule to repository: `git submodule add <url>`
Update submodule: `git submodule update`