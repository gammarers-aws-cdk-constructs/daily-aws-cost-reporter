import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CostGroupType, DailyAWSCostReporter, Secrets } from '../constructs/daily-aws-cost-reporter';

/**
 * Props for the daily cost report stack (secrets and cost grouping).
 */
export interface DailyAWSCostReportStackProps extends StackProps {
  readonly secrets: Secrets;
  readonly costGroupType: CostGroupType;
}

/**
 * CDK stack that deploys the daily cost reporter (Lambda, scheduler, IAM).
 */
export class DailyAWSCostReportStack extends Stack {

  /**
   * Creates the stack and instantiates the DailyAWSCostReporter construct.
   * @param scope - Parent construct
   * @param id - Stack id
   * @param props - Secrets and cost group type
   */
  constructor(scope: Construct, id: string, props: DailyAWSCostReportStackProps) {
    super(scope, id, props);

    new DailyAWSCostReporter(this, 'DailyAWSCostReporter', {
      secrets: props.secrets,
      costGroupType: props.costGroupType,
    });
  }
}

/**
 * Backward-compatible alias for {@link DailyAWSCostReportStack}.
 */
export class DailyCostReportStack extends DailyAWSCostReportStack {}