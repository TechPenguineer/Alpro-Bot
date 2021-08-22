import { Context, Probot } from "probot";

export = (app: Probot) => {
  app.on("issues.opened", async (context) => {
    const issueComment = context.issue({
      body: "You have opened an issue!\n Please make sure that your issue: \n - Is easily readible \n - Is related to the project \n Thank you! ~ *Alpro Bot* \n [My source code](https://github.com/TechPenguineer/Alpro-Bot)",
    });
    await context.octokit.issues.createComment(issueComment);
  });



};
