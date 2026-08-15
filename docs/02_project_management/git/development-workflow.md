# Git Development Workflow

**Project:** Maruti Business Platform

## 1. Branching Strategy

```text
main
  └── Production / Stable Code

develop
  └── Active Development
```

- `main` → Stable / production-ready code
- `develop` → Active development
- Normal development `develop` par hoga.
- `main` par direct feature development nahi hoga.

## 2. Feature Branches

Future feature development:

```text
feature/<feature-name>
```

Examples:

```text
feature/employee-lifecycle
feature/customer-management
feature/authentication
```

Bug fixes:

```text
fix/<issue-name>
```

## 3. Development Workflow

```text
Requirement
    ↓
Design
    ↓
Development
    ↓
Testing
    ↓
Documentation
    ↓
Commit
    ↓
Push
```

## 4. Commit Convention

Format:

```text
type(scope): description
```

Examples:

```text
feat(database): add migration runner
fix(database): fix missing table validation
docs(project): update development workflow
refactor(database): improve migration structure
```

Common types:

```text
feat     → New feature
fix      → Bug fix
docs     → Documentation
refactor → Code restructuring
test     → Testing
chore    → Maintenance
```

## 5. Database Changes

Database schema changes must be version-controlled through migration files.

Migration location:

```text
backend/src/database/migrations/
```

Rules:

- Executed migration ko normally modify nahi karna.
- Existing schema me change ke liye new migration create karna.
- Migration history `schema_migrations` table me maintain hoti hai.

## 6. Before Commit

Run:

```bash
git status
git diff
```

Check:

- Correct branch
- Code tested
- Database tested
- No secrets
- No unnecessary files

Then:

```bash
git add .
git commit -m "type(scope): description"
```

## 7. Push

```bash
git push origin develop
```

## 8. Security

Git me commit nahi karna:

```text
.env
Passwords
Database credentials
API keys
Private keys
Access tokens
```

## 9. Current Status

```text
Repository Setup       ✅
Branch Strategy        ✅
develop Branch         ✅
Git Workflow           ✅
Database Migrations    ✅
Documentation          ✅
```

**Next Major Module:** Employee Lifecycle
