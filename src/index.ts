import { Probot } from "probot";

export = (app: Probot) => {
  app.on("issues.opened", async (context) => {
    const issueComment = context.issue({
      body: "Thanks for opening this issue!\nA contributer will be with you soon.\n\n Thank you for using *Alpro-bot*!\nMade by: **[Tech Penguineer](https://github.com/TechPenguineer)**",
      
      
    });
    await context.octokit.issues.createComment(issueComment);
  });
  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};

