# Discover Unused Fields

node script which is triggering an apex code on target salesforce org and search for unused fields 

---

## Prerequisites

-   [NodeJS](https://nodejs.org/) - Recommended is LTS version 
-   [SFDX CLI](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_cli.htm) - Install Salesforce CLI 


## Installation Instructions

### NPM packages

```shell
npm install     #installs dev packages (linters, prettiers, editorconfig, etc.)
```

### Authorize an Org Using the Web Server Flow

Authorize org gainst which you want to run the script 

https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_web_flow.htm

#### Usage

```shell
node discoverUnusedFields --org=[Org Alias] --sobjects="Account, Opportunity"

