export class PollData{
    pollName:String;
    voteDistribution:DistributionData[]
}

export class DistributionData{
    option:String;
    voteCount:number;
}