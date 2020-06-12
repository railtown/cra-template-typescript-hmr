# cra-template-typescript-hmr

This is a TypeScript template with hot module reloading support, for [Create React App](https://github.com/facebook/create-react-app).

To use this template, add `--template cra-template-typescript-hmr` when creating a new app.

For example:

```
npm init react-app my-app --template cra-template-typescript-hmr

# or

yarn create react-app my-app --template create-template-typescript-hmr
```

For more information, please refer to:

- [Getting Started](https://create-react-app.dev/docs/getting-started/) – How to create a new app.
- [User Guide](https://create-react-app.dev/) – How to develop apps bootstrapped with Create React App.

## Note

This template uses [react-app-rewire-hot-loader](https://github.com/cdharris/react-app-rewire-hot-loader), which in turn uses [react-app-rewired](react-app-rewired). The latter overrides [react-scripts](https://github.com/facebook/create-react-app/tree/master/packages/react-scripts), which is what powers Create React App. This may break things in future builds, which I will be responsible for fixing.
