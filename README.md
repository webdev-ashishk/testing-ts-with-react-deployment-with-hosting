Learning .github actions to deploy my project with hostinger

Steps to Complete Setup
Add FTP Credentials as GitHub Secrets:

Navigate to your GitHub repository.
Go to Settings > Secrets and Variables > Actions > New repository secret.
Add the following:
FTP_USERNAME: u559251981.reacttypescript.growwithok.com
FTP_PASSWORD: Your Hostinger FTP password.
Push Changes:

Make sure your React with TypeScript project is configured correctly.
Push a commit to the main branch (or your configured branch).
Verify Deployment:

Once the action runs successfully, check your Hostinger domain (reacttypescript.growwithok.com) to verify the deployment.
