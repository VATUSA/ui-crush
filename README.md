# VATUSA UI. Codename: Crush
Technical Specifications:
|Category|Spec|
|---|---|
|Langauge|Typescript|
|Framework|Next.js|
|Test Coverage|Jest and RTL|
|Purpose|UI/Interaction|

## Implementation
This serves as the frontend for the VATSIM United States Division website. It is written using Next.js, an SSR implementation of React.js.

## Language Version Management
If desired, you can use [asdf](https://asdf-vm.com/) to manage language versions. The `.tool-versions` file specifies the all language requirements and the versions required. You can either use asdf to manage that for you, or you can manage the versions yourself, as long as you conform with `.tool-versions`.

## Local Development
```sh
$> npm run dev
```

## Linting
It is preferred that you have ESLint installed as a plugin in your editor, with auto-fix enabled for the best developer experience. Otherwise, you can run the command below for a list of linting errors.
```sh
$> npm run lint
```

## Testing
Although 100% test coverage is not going to happen, we should strive to maintain as good of coverage as possible. Tests are written using [Testing Library](https://testing-library.com/docs/) and are executed by the Jest test runner. 
```sh
$> npm run test
```

## Contributing
### Prerequisites
- Languages and versions specified in `.tool-versions`.
- Knowledge in Next.js/React.js, Typescript and Unit Testing.
- Ability to connect to an instance of the API (live or local).

### Instructions
1. Ensure you are assigned to the issue for the work you are doing.
1. Fork this repo.
1. Clone your fork locally.
1. Create a branch (convention is `feature/<feature_name>`).
1. Install dependencies.
1. Run the dev server.
1. Commit your changes to your forked repo.
1. Create a PR from your branch to `@vatusa/ui-crush/develop`.

```bash
$> cd ui-crush
$> git checkout -b feature/my-awesome-feature
$> npm install
$> npm run dev
$> git add .
$> git commit -m "My awesome feature"
$> git push -u origin feature/my-awesome-feature
```