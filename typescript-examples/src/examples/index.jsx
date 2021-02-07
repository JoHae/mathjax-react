import * as React from 'react';

import BasicTypesetting from './BasicTypesetting';
import ListOfEquations from './ListOfEquations';
import Counter from './Counter';
import LiveTyping from './LiveTyping';
import AmsMathPackage from './AmsMathPackage';

const allComponents = [BasicTypesetting, ListOfEquations, Counter, LiveTyping, AmsMathPackage];

const renderedList = allComponents.map((Cmp, i) => (<Cmp key={i}/>));

export default renderedList;
