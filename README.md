# Example Technical Assessment

## Background

You’ve been asked to architect a service for an imaginary SaaS company that provides a logging solution for customers. The SaaS platform bills based on the total size of logs processed (in bytes).

The service you’ve been asked to architect tracks the size of all logs sent from each customer. 

The entry point into this service is an SNS topic that broadcasts the following information

```javascript
const message = {
    accountId: string,
    logData: string,
}
```

The accountId will be a uuid4. The log data will be an arbitrary string of encrypted log entry data/metadata.

The requirements of this service are as follows

1. All raw log data should be retained
2. Users should be able to query the total usage for a customer based on accountId via a GET request


## Tasks
1. Create an architecture diagram outlining how you would construct this service leveraging AWS serverless technologies (Lambda, SNS, SQS, DynamoDB etc). Briefly explain the assumptions you made and justify the decision process. 
2. Implement your design using serverless framework
3. Bonus Points: Include the required IAM roles to deploy this service in an IAM.json file

#### Notes
 - This project has been built with TypeScript. You are welcome to use plain Javascript in your implementation.
 - You are not expected to finish all of these tasks.
 - Once you have converted requirements into an architecture diagram focus on implementing 1 or 2 parts of that architecture well, rather than trying to get something done for each part
 - There are no time restrictions on this task and we value your time - spend enough time to show your ability but don't sink too much time into it.
 - You will have an opportunity to walk through your code and talk about what you've done and why. You'll also get to talk about how you would implement the things you did not get time to do.


## Resources
- [Serverless Framework Documentation](https://serverless.com/framework/docs/)

- A full breakdown of the boilerplate setup for this repo can be found [here](https://dev.to/michael_timbs/get-started-with-aws-serverless-and-typescript-5hgf)

- Part of being a developer is being able to figure things out, another big part is knowing when to ask for help/clarification. This is not a timed test, feel free to reach out for help and if you have any questions you would like answered.
