import sampleGit from "sample-git";
import jsonfile from "jsonfile";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import random from "random";
import pLimit from "p-limit";

dayjs.extend(isBetween);

const path = "data.json";

const isValidDate = (date) => {
  const startDate = dayjs("2008-01-08");
  const endDate = dayjs("2009-08-30");

  return date.isBetween(startDate, endDate, null, "[]");
};

const markCommit = async (date) => {
  try {
    const data = { date: date.toISOString() };
    await jsonfile.writeFile(path, data);

    const git = sampleGit();
    await git.add([path]);
    await git.commit(date.toISOString(), { "--date": date.toISOString() });
    console.log(`Commit created for date: ${date.toISOString()}`);
  } catch (error) {
    console.error(`Error creating commit for date ${date.toISOString()}:`, error);
  }
};

const markCommits = async (n) => {
  const git = sampleGit();
  const limit = pLimit(10); // limit 10-xx concurrent tasks

  let createdCommits = 0;
  const tasks = [];

  while (createdCommits < n) {
    const randomWeeks = random.int(0, 54 * 4);
    const randomDays = random.int(0, 6);

    const randomDate = dayjs("2008-01-08")
      .add(randomWeeks, "week")
      .add(randomDays, "day");

    if (isValidDate(randomDate)) {
      createdCommits++;
      tasks.push(
        limit(() => markCommit(randomDate))
      );
      console.log(`Scheduled commit ${createdCommits}/${n}: ${randomDate.toISOString()}`);
    } else {
      console.log(`Invalid date: ${randomDate.toISOString()}, Skipping...`);
    }
  }

  try {
    await Promise.all(tasks);
    console.log("All commits created. Pushing to repository...");
    await git.push();
  } catch (error) {
    console.error("Error during commit or push process:", error);
  }
};

markCommits(5000);
