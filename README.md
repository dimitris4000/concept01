# About Concept01

Concept01 is a spike UI of a concept centralized configuration management system.

## Problem Statement

In environment with multiple microservices, developers usually experience "cli-fatigue" while trying to configure their application across environments/deployments/app-versions.
This friction is mostly coming form the following facts:
* Secrets have a different process to get edited than the rest of configuration
* "Moving" across environments (i.e. staging, production, dev) oftenly requires additional authentication even if the developer has permission to access/edit the configuration.
* Editing configuration for different versions of the application is becoming more complex because during secret configuration the application version is not always apparent.
* "Scanning"/editing for configuration across environments/deployments/app-versions oftenly requires the creation of new authentication sessions.
* Working with batch changes is almost impossible with cli tools without the usage of custom tools.
* View/Edit permissions are not always apparent until the developer requires it. This creates additional frustration.

## Proposed Solution

The suggested solution is a web-app GUI which will act as a "portal" for managing all the configuration of the deployed apps across all infrastructure of a company.

## Non-Goals

It is important to understand that the current repository will only design the User Interface for the configuration portal. Key components of a complete implementation like are not part of this project. More specifically non-goals are:

* Secure secret storage
* User authentication/authorization
* Auditing
* Delivery mechanism for the secret to the application deployments

## Future Steps

Assuming that the project produce a satisfying result, the non-goals could start to be introduced along with the following items in order to move towards a more production-ready solution.

* Implement integration with Vault (or other secrets backend)
* Implement a mechanism to deliver secrets to applications
* Create a backend that could be used in production setup and allows the administrator to configure either the backend to also serve the GUI assets or start the backend and assume that the GUI assets are served through other means (e.g. cloudfront, APISIX gateway, etc.)

## Development Notes

### Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

### Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).
