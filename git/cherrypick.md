# Cherrypicking

To cherry-pick your last commit from the develop branch to your current branch, follow these steps:

## Step 1: Make sure your repos are up-to-date

# Fetch the latest changes

`git fetch origin`

## Step 2: Find the commit hash you want to cherry-pick

# Show commits on the develop branch

`git log origin/develop -n 10 --oneline`

Look for your last commit in the list and note its hash (like `a1b2c3d`).

## Step 3: Cherry-pick the commit to your current branch

# Make sure you're on the branch where you want to apply the commit

`git checkout your-current-branch`

# Cherry-pick the commit

`git cherry-pick a1b2c3d`

## Step 4: Resolve conflicts (if any)

If you encounter conflicts:

After resolving conflicts in your editor
```
git add .

git cherry-pick --continue
```


Or if you want to abort

`git cherry-pick --abort`

## Step 5: Push your changes

`git push origin your-current-branch`
