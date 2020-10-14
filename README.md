# @onrewind/stylelint-config

A shareable stylelint configuration for On Rewind projects.

[Playground](https://bit.ly/3k06yfI)

## Installation

If using **npm**, run:

```console
$ npm install @onrewind/stylelint-config --save-dev
```

If using **yarn**, run:

```console
$ yarn add @onrewind/stylelint-config --dev
```

## Usage

Set your [stylelint configuration][stylelint-configuration] to:

```json
{
  "extends": "@onrewind/stylelint-config"
}
```

You can override rules from the shared configuration, by setting your own values within the `rules` property:

```json
{
  "rules": {
    "string-quotes": "double"
  }
}
```
