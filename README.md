# semantic-release-example

https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#type

- **feat**: 一项新功能
- **fix**: 错误修复
- **docs**: 仅更改文档
- **style**: 不影响代码含义的更改（空格、格式、缺少分号等）
- **refactor**: 既不修复错误也不添加功能的代码更改
- **perf**: 提高性能的代码更改
- **test**: 添加缺失的或纠正现有的测试
- **chore**: 对构建过程或辅助工具和库（例如文档生成）的更改
```
BREAKING CHANGE:
```

## 参考
---
- https://github.dev/cycjimmy/semantic-release-action
- [Can I run semantic-release on my local machine rather than on a CI server?](https://semantic-release.gitbook.io/semantic-release/support/faq#can-i-run-semantic-release-on-my-local-machine-rather-than-on-a-ci-server)
- [Can I use semantic-release to publish non-JavaScript packages?](https://semantic-release.gitbook.io/semantic-release/support/faq#can-i-use-semantic-release-to-publish-non-javascript-packages)
- [pre-release-branches](https://semantic-release.gitbook.io/semantic-release/usage/workflow-configuration#pre-release-branches)

---
- [renovate's build.yml](https://github.com/renovatebot/renovate/blob/9ed6666aeb15f4cd795c598e4007c097aa4c4cc8/.github/workflows/build.yml#L715)

---
- [release-please](https://github.com/googleapis/release-please/blob/main/docs/cli.md)
- [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version)