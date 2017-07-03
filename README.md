# Invoice-Creator
Which is used for creating invoice
This is Invoice creator developed using Angular, Html,Css,Bootstrap.

To run the application go through the following commands 

```bash
step 1: git clone  https://github.com/jeswanth28/Invoice-Creator.git
step 2:cd Invoice-Creator
```
To update Angular CLI to a new version, you must update both the global package and your project's local package.

Global package:
```bash
npm uninstall -g @angular/cli
npm cache clean
npm install -g @angular/cli@latest
```

Local project package:
```bash
rm -rf node_modules dist # use rmdir /S/Q node_modules dist in Windows Command Prompt; use rm -r -fo node_modules,dist in Windows PowerShell
npm install --save-dev @angular/cli@latest
npm install
```
```bash
step 3 : npm install --save-dev @angular/cli@latest
step 4: ng serve
```

app is running at localhost:4200.

Prerequisties:Angular Cli must be installed globally to install Angular Cli go to https://github.com/angular/angular-cli