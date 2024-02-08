import React from 'react';

// Define tabValues constant
export const tabValues = [
    { label: 'Blueprint', value: 'toml', attributes: { className: 'highlight tab toml' } },
    { label: 'Compose request', value: 'json', attributes: { className: 'highlight tab json' } },
];

//colorVars - see css/custom.css
export default function Highlight({children, colorVar}) {
    return (
        <span
            className={`highlight box ${colorVar}`}>
      {children}
    </span>
    );
}
