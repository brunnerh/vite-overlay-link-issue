# `vite` Vite Overlay Link Issue Reproduction

Run scripts in two *separate* terminals:

```shell
npm run server
npm run vite
```

Open http://localhost:3000 in your browser.

Click a file link in the error overlay.

Observe `__open-in-editor` command being sent to `http-server` rather than `vite`.
