import * as userFunctions from "./accesskey";

const usersToCreate: userFunctions.AWSUserInput[] = new Array<userFunctions.AWSUserInput>();

usersToCreate.push({userName: "myusername"})

export const userList = userFunctions.create(usersToCreate);
