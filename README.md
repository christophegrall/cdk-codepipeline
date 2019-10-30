# Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template

 MEMO

  export AWS_DEFAULT_REGION=x
  export AWS_SECRET_ACCESS_KEY=y
  export AWS_ACCESS_KEY_ID=z

  cdk init --language typescript
  
  npm install @aws-cdk/aws-codebuild
  npm install @aws-cdk/aws-codepipeline

  cdk deploy --require-approval never --no-version-reporting
