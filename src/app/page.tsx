'use client';

import React from 'react';

export default function Home() {
  React.useEffect(() => {
    Promise.all([
      import('prettier'),
      import('prettier/plugins/babel'),
    ]).then(async ([prettier, babelPlugin]) => {
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
        plugins: [babelPlugin],
      });
      console.log(formatted);
    });
  });
  return <p>Hello World</p>;
}
