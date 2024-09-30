const semanticRelease = await import('semantic-release');

const result = await semanticRelease.default(
  {
    dryRun: true,
  },
  {
    stdout: {
      write: () => { },
    },
    stderr: {
      write: () => { },
    },
  },
);

if (result !== false) {
  console.debug(`result :>> `, result);
  console.debug(`result.nextRelease.notes :>> `, result.nextRelease.notes);
  console.debug(`result.nextRelease.version :>> `, result.nextRelease.version);
  console.debug(`result.nextRelease.gitTag :>> `, result.nextRelease.gitTag);
  console.debug(`result.nextRelease.gitHead :>> `, result.nextRelease.gitHead);
}