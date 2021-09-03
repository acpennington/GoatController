Lambda functions represent the serverless backend of GoatDuels. Our architecture, however, can be problematic for testing in a non-production environment. Our workaround for now is to have two versions of each Lambda function for development and production. For example, GameSocket is the production version and Dev-GameSocket is the development version. You can upload changes to the development version of the Lambda function without having to worry about the possibility of breaking GoatDuels in production.

To upload changes to dev functions:

1. Visit aws.amazon.com
2. Click My Account > AWS Management Console
3. Click IAM user
4. Account number: 570353903755
5. Enter your user name and password (ACP will provide you with this)
6. After you are logged in, click on Services > Lambda to view a list of Lambda functions
7. You can edit any function that starts with "Dev" (use in-line editor or upload a .zip)

Any changes that are made in a dev function should be immediately reflected when you run GoatDuels in development
