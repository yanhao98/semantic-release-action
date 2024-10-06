import { exec as execCallback } from 'node:child_process';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';
const exec = promisify(execCallback);
const self_cwd = dirname(fileURLToPath(import.meta.url));
import packageJson from './package.json' with { type: "json" };

// https://github.dev/cycjimmy/semantic-release-action
async function installDependencies() {
  // const _extras = extras.replace(/['"]/g, '').replace(/[\n\r]/g, ' ');
  const deps = ['semantic-release'].join(' ');
  const { stdout, stderr } = await exec(`npm install ${deps} --no-audit --no-save`, {
    cwd: self_cwd
  });
  console.log(stdout);
}

async function runRelease() {
  const semanticRelease = await import('semantic-release');
  const result = await semanticRelease.default(
    {
      plugins: packageJson.release.plugins,
      dryRun: process.env.CI ? false : true,
    },
  );
  // console.debug(`nextRelease.version :>> `, nextRelease.version);
  // if (process.env.GITHUB_OUTPUT) fs.writeFileSync(process.env.GITHUB_OUTPUT, `NEXT_RELEASE_VERSION=${nextRelease.version}`);
  return result;
}

if (process.env.CI) await installDependencies();
await runRelease();