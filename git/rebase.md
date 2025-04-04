# Rebase

To rebase your current branch with the develop branch, follow these steps:

## Basic Rebase Process

1.  Fetch all the latest changes from the remote:

    ```bash
    git fetch
    ```

2.  Make sure you're on your feature branch:

    ```bash
    git checkout your-branch-name
    ```

3.  Rebase your branch on top of the develop branch:

    ```bash
    git rebase origin/develop
    ```

    If you encounter merge conflicts during the rebase:

    1.  Resolve conflicts in your editor, then:

        ```bash
        git add .
        ```

    2.  Continue the rebase process:

        ```bash
        git rebase --continue
        ```

    3.  If you need to abort the rebase:

        ```bash
        git rebase --abort
        ```

## Alternative with Stashing (if you have uncommitted changes)

1.  Stash your changes:

    ```bash
    git stash
    ```

2.  Rebase with develop:

    ```bash
    git checkout your-branch-name
    git rebase origin/develop
    ```

3.  Apply your stashed changes:

    ```bash
    git stash pop
    ```

## Force Push After Rebase

After rebasing, you'll need to force push your changes since you've rewritten history:

```bash
git push --force-with-lease origin your-branch-name
````

The `--force-with-lease` option is safer than `--force` as it prevents you from overwritting others' work.