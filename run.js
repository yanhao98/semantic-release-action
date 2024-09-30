

(async () => {
  // const semanticRelease = require('semantic-release/index.js');
  // const prepareChangelog = require('@semantic-release/changelog/lib/prepare.js');
  // const getLogger = require('semantic-release/lib/get-logger.js');
  // const { tag } = require('semantic-release/lib/git.js');
  // const fs = require('node:fs');
  const semanticRelease = await import('semantic-release');

  // // https://github.com/semantic-release/semantic-release/blob/master/index.js
  // // https://github.dev/semantic-release/npm
  // const result = await semanticRelease.default(
  //   {
  //     // noCi: false,
  //     // plugins: [
  //     //   "@semantic-release/commit-analyzer", // https://github.com/semantic-release/commit-analyzer
  //     //   "@semantic-release/release-notes-generator", // https://github.com/semantic-release/release-notes-generator
  //     //   // "@semantic-release/changelog", // https://github.com/semantic-release/changelog
  //     //   // https://github.com/semantic-release/git
  //     // ],
  //     // dryRun: true,
  //   },
  //   {
  //     // stdout: { write: () => { }, }, stderr: { write: () => { }, },
  //   },
  // );
  // console.debug(`!!result :>> `, !!result);
  // console.log('#############################')

  // if (result !== false) {
  //   // console.debug(`result.nextRelease :>> `, result.nextRelease);
  //   // console.debug(`result :>> `, result);
  //   // console.debug(`result.nextRelease.notes :>> `, result.nextRelease.notes);
  //   // console.debug(`result.nextRelease.version :>> `, result.nextRelease.version);
  //   // console.debug(`result.nextRelease.gitTag :>> `, result.nextRelease.gitTag);
  //   // console.debug(`result.nextRelease.gitHead :>> `, result.nextRelease.gitHead);
  //   // fs.writeFileSync(process.env.GITHUB_OUTPUT, `matrix=${JSON.stringify(matrix)}`);

  //   const { nextRelease } = result;
  //   // const context = {
  //   //   cwd: process.cwd(),
  //   //   nextRelease: result.nextRelease,
  //   //   logger: getLogger({ stdout: process.stdout, stderr: process.stderr }),
  //   // }
  //   // await prepareChangelog.default({}, context);
  //   console.debug(`nextRelease.version :>> `, nextRelease.version);
  //   fs.writeFileSync(process.env.GITHUB_OUTPUT, `NEXT_RELEASE_VERSION=${nextRelease.version}`);

  //   // await tag(nextRelease.gitTag, nextRelease.gitHead); // git tag -d v2.0.0
  //   /* 
  //   export async function tag(tagName, ref, execaOptions) {
  //     await execa("git", ["tag", tagName, ref], execaOptions);
  //   }
  //    */
  // }
})();
