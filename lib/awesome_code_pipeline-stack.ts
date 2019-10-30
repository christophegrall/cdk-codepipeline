import cdk = require('@aws-cdk/core');
import codecommit = require("@aws-cdk/aws-codecommit");
import codebuild = require("@aws-cdk/aws-codebuild");
import codepipeline = require("@aws-cdk/aws-codepipeline");
import codepipeline_actions = require('@aws-cdk/aws-codepipeline-actions');
import { Bucket } from '@aws-cdk/aws-s3';

export class AwesomeCodePipelineStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);


    let isS3present:boolean = true;
    if(isS3present){
      new Bucket(this, 'pp2-demo', {
        bucketName: 'pp2-demo'
    });
    }

    const repo = new codecommit.Repository(this, "Repository", {
      repositoryName: "l3-dm",
      description: "l3 app" 
    });


    const sourceOutput = new codepipeline.Artifact();  
    const project = new codebuild.PipelineProject(this, 'MyProject');

    const buildAction = new codepipeline_actions.CodeBuildAction({
      actionName: 'CodeBuild',
      project,
      input: sourceOutput,
      outputs: [new codepipeline.Artifact()], // optional
    });

    new codepipeline.Pipeline(this, 'Pipeline', {
      stages: [
        {
          stageName: 'Source',
          actions: [
            new codepipeline_actions.CodeCommitSourceAction({
              actionName: 'CodeCommit_Source',
              repository: repo,
              output: sourceOutput,
            }),
          ],
        },

        {
          stageName: 'Build',
          actions: [
            new codepipeline_actions.CodeBuildAction({
              actionName: 'Lambda_Build',
              project,
              input: sourceOutput,
             
            })
          ]
        }

      ]});

  }
}
