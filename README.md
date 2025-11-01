This is a minimal reproduction of an issue I’m encountering in my Next 16 project, when dynamically importing Prettier.

Prettier is not typically bundled and included in the app, but in this project, we’re loading it in-browser (the full use case is to format user-submitted code, but this repro is simplified to format a prewritten string).

When dynamically importing the `babel` Prettier plugin, we get the following error:

```
Uncaught (in promise) ReferenceError: Ia is not defined
    at module evaluation (0878ea95be1c2b7c.js:15:3705)
    at L (turbopack-617304004e1657dc.js:3:939)
    at N (turbopack-617304004e1657dc.js:3:480)
    at n.h [as i] (turbopack-617304004e1657dc.js:1:2204)
    at 94c7ef302e458762.js:9:335
    at async Promise.all (:3000/index 1)
```

**Weirdly, this issue only occurs in production.** Everything works fine when running `next dev`. The issue was introduced with Next 16.0.0, and occurs using both Turbopack and Webpack.

## Reproduction instructions:

In the terminal:

```bash
$ npm run build && npm run start
```

Open `localhost:3000`, open the developer console, and note the error in the console.

If you run a dev server instead (`next dev`), the console doesn't display the error, and instead displays the reformatted code, as expected.
