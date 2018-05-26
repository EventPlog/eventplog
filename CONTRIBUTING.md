# Contributing Guide

This document is intended for developers who are part of the team actively working on [EventPlog](eventplog.com).

## Style Guide
We use [Airbnb style guide](https://github.com/airbnb/javascript/tree/master/react). Be sure to go through.

## Getting started on an issue

1. Checkout to the `develop` branch: `git checkout develop`
2. Pull from `develop` in origin: `git pull origin develop`
3. Checkout to a branch named in the following format:
`[feature/chore/bug] - #[ticket id] - [short-description]` .
Eg: `bug-#2323138-fix-bug-in-question-create`

All ready issues are appropriately labelled, so that wouldn't . . well . . be an issue :)

## Making commits

Commits format should generally be `#[ticket id] [description]` e.g. `#323212334 add missing colon`.

We believe in _atomic_ commits. Try to make commits as regularly as you can so it will be easy to step through them or make reverts where neccessary.

## Write tests

Write tests!! Strive to increase coverage or at least keep it where it was before your PR. You could run `yarn test --coverage` to see more information about the test coverage for individual files.

## Closing an issue/Raising a PR

All PRs should close an issue. If a ticket hasn't yet been created for an issue you're working on, please ensure it's created.

Before raising a PR, ensure that the CI build passes and there are no pending lint errors. Also check to confirm you aren't decreasing test coverage.

To raise a PR, specify the title in this format: `closes #[ticket id] [description]` . Eg. `closes #38 - add pagination button'`

In the body of the PR, give us details on what the PR does, so it's easy to see what you achieved at a glance. If possible, include a screen shot of the changes you've made.

## Thank you!

If you read up till this point, then thank you! Just that. Thanks!

