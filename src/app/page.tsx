'use client';

import React from 'react';

export default function Home() {
  React.useEffect(() => {
    Promise.all([
      import('prettier/standalone'),
      import('prettier/plugins/babel'),
      import('prettier/plugins/estree'),
    ]).then(async ([prettier, babelPlugin, estreePlugin]) => {
      const code = `
        import React from "react";
        export default function Home() {
          return <p>
            Hello
                  World
                  </p>;
        }
      `;
      const formatted = await prettier.format(code, {
        parser: 'babel',
        // @ts-expect-error - prettier is not typed
        plugins: [babelPlugin, estreePlugin],
      });
      console.log(formatted);
    });
  });
  return <p>Hello World</p>;
}
