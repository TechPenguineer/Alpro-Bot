import { Probot } from "probot";

export = (app: Probot) => {
  app.on("issues.opened", async (context) => {
    const issueComment = context.issue({
      body: "# Thanks for opening this issue! \nA contributer will be with you soon.\n<hr>\n In the meantime you can check: <br> - Does this issue makes sense <br> - Is there a reason for this <br> - Is this worth a contributors time <br> - It is worded correctly \n\n\n -- \n\n Thank you for using *Alpro-bot*!\nMade by: **[Tech Penguineer](https://github.com/TechPenguineer)**",
    });
    await context.octokit.issues.createComment(issueComment);
  });
  app.on("pull_request_review.submitted", async (context) => {
    const issueComment = context.issue({
      body: "# Thanks for opening this Pull request! \nA contributer will be with you soon.\n<hr>\n In the meantime you can check: <br> - Does this PR makes sense <br> - Is there a reason for this <br> - Is this worth a contributors time <br> - It is worded correctly \n\n\n -- \n\n Thank you for using *Alpro-bot*!\nMade by: **[Tech Penguineer](https://github.com/TechPenguineer)**",
    });
    await context.octokit.issues.createComment(issueComment);
  });
};


