# GitHub Pages Deployment Fix

## Problem
The error "Branch 'main' is not allowed to deploy to github-pages due to environment protection rules" occurs because GitHub Pages environment has branch protection enabled.

## Solution Applied
I've updated the GitHub Actions workflow to deploy directly to the `gh-pages` branch instead of using the protected GitHub Pages environment.

## Steps to Fix:

### 1. Update GitHub Pages Settings
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select:
   - **Deploy from a branch**: `gh-pages`
   - **Branch**: `gh-pages` / `/(root)`
4. Click **Save**

### 2. Remove Environment Protection (Optional)
If you want to keep using the environment method:
1. Go to **Settings** → **Environments**
2. Click on **github-pages** environment
3. Remove or adjust the **Deployment branches** protection rule
4. Allow deployments from `main` branch

### 3. Deploy Now
The workflow will automatically deploy when you push to `main`, or you can:
- Push any commit to `main` branch
- Or manually trigger: Go to **Actions** tab → Select workflow → **Run workflow**

## How It Works Now
- When you push to `main`, GitHub Actions will:
  1. Build your project
  2. Deploy the `dist` folder to the `gh-pages` branch
  3. GitHub Pages will serve from the `gh-pages` branch

## Verify Deployment
After deployment completes:
1. Check the **Actions** tab for successful workflow run
2. Wait 1-2 minutes for GitHub Pages to update
3. Visit: `https://DebeshJha.github.io/DentiMap`

## Troubleshooting
- If deployment fails, check the Actions logs
- Ensure `GITHUB_TOKEN` has write permissions (it's automatically available)
- Make sure your `vite.config.ts` has the correct `base` path set to `/DentiMap`

