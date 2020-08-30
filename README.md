# Next.js App Template

A simple webapp template to help you avoid doing the same project setup dance every time.

No tool will work for everyone, and this template is no exception. This is mostly created from my personal experience spending the first two hours of every project figuring out how to get the same tools working together.

As always: forks, issues, and pull requests are welcome, and thank you for checking this out.

## Built With

-   [Next.js](https://nextjs.org/) - React Framework
-   [React](https://reactjs.org/) - Rendering Library
-   [Yarn](https://classic.yarnpkg.com/) - Package Manager
-   [TypeScript](https://typescriptlang.org/) - Type Checker
-   [ESLint](https://eslint.org/) - Linter
-   [Prettier](https://prettier.io/) - Formatter

## Installation

### Step 1

Create a repo using this template by pressing the "Use this template" button.

### Step 2

Clone your new repo locally:

```bash
$ git clone https://github.com/You/your-new-repo.git
```

### Step 3

Install the needed packages:

```bash
$ cd your-new-repo
$ yarn
```

## Usage

### Development

Just open a spare terminal and run:

```bash
$ yarn dev
```

That's it, your site is available at [localhost:3000](localhost:3000) and will automatically update live with any changes you make.

### Production

First build the project, this will likely take longer then usual due to release only optimizations:

```bash
$ yarn build
```

Then, after your build is ready, you can start in production with:

```bash
$ yarn start
```

Visit [localhost:3000](localhost:3000) again to see your new webapp in release mode.

## License

[MIT](https://choosealicense.com/licenses/mit/)
