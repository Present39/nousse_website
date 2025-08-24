# NOUSSE Website

Next.js website for NOUSSE wellness platform.

## CI/CD Pipeline

This project includes a complete CI/CD workflow that automatically:

### On Pull Requests & Pushes to `main`:
- ✅ **Code Quality**: Runs ESLint for code style validation
- ✅ **Testing**: Executes test suite
- ✅ **Build**: Compiles Next.js application

### On Push to `main` only:
- 🚀 **Deploy**: Automatically deploys to Vercel production

### Required Secrets

For deployment to work, configure these repository secrets:
- `VERCEL_TOKEN`: Your Vercel authentication token
- `VERCEL_ORG_ID`: Your Vercel organization/team ID  
- `VERCEL_PROJECT_ID`: Your Vercel project ID

### Scripts Available

```bash
pnpm dev       # Start development server
pnpm build     # Build for production
pnpm start     # Start production server
pnpm lint      # Run ESLint
pnpm test      # Run tests
```

## Development

1. Install dependencies: `pnpm install`
2. Start dev server: `pnpm dev`
3. Open [http://localhost:3000](http://localhost:3000)