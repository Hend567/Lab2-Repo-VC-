# Branch Management

## How to Remove Branches

### Delete a Branch Locally
```bash
git branch -d branch_name          # Delete a fully merged branch
git branch -D branch_name          # Force delete a branch (even if not merged)
```
### Delete a Branch Remotly
```bash
git push origin --delete branch_name
```
### Delete Both Locally and Remotely
```bash
git branch -d branch_name          # Delete locally first
git push origin --delete branch_name  # Then delete remotely
```

