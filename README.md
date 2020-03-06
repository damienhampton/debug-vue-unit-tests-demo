# Vue + Webpack 4 + Mocha + Mochapack + VSCode debug example

Having struggled to be able to successfully debug Vue unit tests in VSCode, I'm documenting a working example.

**(This assumes you have VSCode Node debugger installed)**

A few things to note:
- This contains a simple Vue project
- Two webpack configs - one for the main build, the other for testing
- Getting breakpoints to work required:

```
//webpack
module.exports = {
  ...
  devtool: 'inline-source-map',
  ...
}
```

```
//launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      ...
      "sourceMapPathOverrides": {
        "webpack:///*": "${workspaceFolder}/*"
      },
      ...
    }

  ]
}
```
- The .vscode/launch.json config was critical to getting sourcemaps working

# Install and running

- Clone repo
- ```npm install```
- Set your breakpoints in VSCode (in test file and/or Vue file)
- Select 'Mocha Tests' from VSCode debug menu and start the debugger
- From the 