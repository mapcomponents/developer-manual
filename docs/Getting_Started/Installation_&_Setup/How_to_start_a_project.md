---
sidebar_position: 0
---

# How to start a project

<!--@abc: config({ "asciinema": { "speed": 1, "cols": 60, "rows": 10 } }) -->

## Start a new MapComponents app

First bootstrap the react app using the MapComponent template. The template is based on vite which is (at the time of writing this document) considered a best practice to initialize a new react project.

<!--@abc: exec() -->

```bash
npx degit mapcomponents/template my-mc-app
```

<img src="/img/start_new_project_1.gif" width="500" />

Change into the app directory and install the dependencies using yarn

<!--@abc: exec() -->

```bash
cd my-mc-app
yarn
```

<img src="/img/start_new_project_2.gif" width="500" />

Start the development server that will by default serve the app on localhost:5173 and watch the filesystem for changes to compile and hot-reload the browser tab that is running the app.

<!--@abc: exec() -->

```bash
cd my-mc-app
yarn dev
```

<img src="/img/start_new_project_3.gif" width="500" />

Open http://localhost:5173 in your browser to run the current code state with hot-reloading.

<img src="/img/start_new_project_4.gif" width="500" />

<!--@abc: browse({"url":"http://localhost:5173", "service_command":"cd my-mc-app && yarn dev"}) -->
