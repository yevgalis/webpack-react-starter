/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '*.css' {
  const content: Record<string, string | undefined>;
  export default content;
}

declare module '*.svg' {
  import React = require('react');

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module '*.png' {
  const content: any;
  export default content;
}

declare module '*.jpg' {
  const content: any;
  export default content;
}

declare module '*.jpeg' {
  const content: any;
  export default content;
}

declare module '*.woff';

declare module '*.woff2';

declare module '*.otf';

declare module '*.ttf';

declare module '*.eot';
