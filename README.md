# Branch Management

## How to Remove Branches

### Delete a Branch Locally

```bash
git branch -d dev         # Delete a fully merged branch
git branch -D test       # Force delete a branch (even if not merged)
```

### Delete a Branch Remotly

```bash
git push orign --delete test
```

### Delete Both Locally and Remotely

```bash
git branch -d test                  # Delete locally first
git push orign --delete test  # Then delete remotely
```

## lab2

```bash
[lab2]("C:\Users\Dell\Downloads\lab2.png")
