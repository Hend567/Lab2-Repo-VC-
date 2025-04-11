# Git Lab2_2

## Annotated vs Lightweight Tags

- **Annotated Tags**: contain metadata like the author's name, date, and a message. Created using `git tag -a`.
- **Lightweight Tags**: simple references to commits without any extra info. Created using `git tag <tagname>`.

## When to use Rebase

- Use `git rebase` to create a clean and linear project history.
- Ideal when you want to integrate changes from one branch to another without creating merge commits.

## How to list tags?

```bash
git tag
