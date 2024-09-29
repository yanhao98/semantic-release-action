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
  console.debug(`result.nextRelease.version :>> `, result.nextRelease.version);
  console.debug(`result.nextRelease.gitTag :>> `, result.nextRelease.gitTag);
}