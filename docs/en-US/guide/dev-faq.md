---
title: Development FAQ
lang: en-US
---

# Development FAQ

Here are the problems that are easy to encounter in development.

## If you encounter dependency related issues

```shell
rm -rf node_modules
pnpm i
```

## Link local dependencies

```shell
# get dist
pnpm build
cd dist/hsmos-ui
# set cur hsmos-ui to global `node_modules`
pnpm link --global
# for esm we also need link hsmos-ui for dist
pnpm link --global hsmos-ui

# go to your project, link to `hsmos-ui`
cd your-project
pnpm link --global hsmos-ui
```

> More info see [pnpm link](https://pnpm.io/cli/link).

## Theme

We should not write Chinese comments in scss files.

It will generate warning `@charset "UTF-8";` in the header of css file when built with vite.

> More info see [#3219](https://github.com/hsmos-ui/hsmos-ui/issues/3219).
