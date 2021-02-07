import React from 'react';
import { MathComponent } from 'mathjax-react';

import Example from './Example';

export default class AmsMathPackage extends React.Component {
  static exampleConfig = {
    title: "AMS Math extension is loaded.",
    caption: "Here is a basic example using react-mathjax with latex's amsmath package loaded.",
    relSrc: "examples/AmsMathPackage.tsx"
  };
  render(){
    // our tex equation, using String.raw so we don't have to escape backslashes
    const example = String.raw`X(\omega) = \begin{cases}
1 &\text{se $\omega\in A$}\\
1250 &\text{se $\omega \in A^c$}
\end{cases}`;
    return (
      <Example {...AmsMathPackage.exampleConfig}>
        <MathComponent tex={example} display={true} />
      </Example>
    );
  }
}
