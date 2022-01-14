import * as aws from "@pulumi/aws";
import {Output} from "@pulumi/pulumi";

export interface AWSUserInput {
    userName: string,
}

interface AWSUserOutput {
    secretKey: Output<string>
    userName: string
}

export function create(users: AWSUserInput[]): AWSUserOutput[] {
    let createdUsers: AWSUserOutput[] = new Array<AWSUserOutput>();
    for (const user of users) {
        const iamUser = new aws.iam.User(user.userName, {
            name: user.userName
        });
        const iamAccessKey = new aws.iam.AccessKey(user.userName, {
            user: user.userName
        });
        createdUsers.push({
            userName: user.userName,
            secretKey: iamAccessKey.secret
        });
    }
    return createdUsers;
}