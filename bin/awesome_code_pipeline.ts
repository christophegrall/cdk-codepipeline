#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { AwesomeCodePipelineStack } from '../lib/awesome_code_pipeline-stack';

const app = new cdk.App();
new AwesomeCodePipelineStack(app, 'AwesomeCodePipelineStack');
