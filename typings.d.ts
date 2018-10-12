declare module '*.scss' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module 'react-cosmos-test/enzyme' {
  const createTestContext: (
    fixture: any,
  ) => {
    mount: () => void;
    unmount: () => void;
    getWrapper: () => any;
  };
  export = createTestContext;
}

declare module 'react-tippy' {
  const Tooltip: any;
}

declare module 'react-media' {
  const main: React.ComponentType<{ query: { maxWidth?: number } }>;
  export = main;
}

declare module 'react-cosmos-router-proxy' {
  const create: () => void;
  export = create;
}

declare module 'enzyme-react-adapter-future' {
  class Adapter {}
  export = Adapter;
}
declare module 'is-url-external' {
  const main: (it: string) => boolean;
  export = main;
}
