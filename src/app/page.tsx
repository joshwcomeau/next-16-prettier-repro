'use client';

import React from 'react';

import prettier from 'prettier/standalone';
import babelPlugin from 'prettier/plugins/babel';
import estreePlugin from 'prettier/plugins/estree';

const testCode = `
import React from "react";

export default function Home() {
  return <p>
    Hello
        World
      </p>;
}
`;

export default function Home() {
  React.useEffect(() => {
    console.log('Formatting code...');
    prettier
      .format(testCode, {
        parser: 'babel',
        plugins: [babelPlugin, estreePlugin],
      })
      .then((formatted) => {
        console.log(formatted);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  return (
    <p>
      Check the developer console to view the error (must be running a
      production build).
    </p>
  );
}
