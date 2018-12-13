import * as React from 'react';
import createTestContext from 'react-cosmos-test/enzyme';
import toJSON from 'enzyme-to-json';

interface Fixture {
  component: React.ComponentType<any>;
  name?: string;
}

interface EnzymeElement {
  node: {
    nodeType: string;
    props: {
      children?: null;
    };
  };
  children: null | (EnzymeElement | null)[];
}

function sanitiseSubtree(
  element: EnzymeElement | null,
  compositeSeenPreviously: boolean,
): EnzymeElement | null {
  if (!element) return element;
  const { node, children } = element;
  if (!node) return element;
  const { nodeType, props } = node;
  const isComposite = nodeType !== 'host';
  const hasChildrenProp = Boolean(props.children);
  const shouldIncludeChildren =
    !isComposite || !compositeSeenPreviously || hasChildrenProp;
  const compositeSeen = compositeSeenPreviously || isComposite;
  const cleanedChildren: (EnzymeElement | null)[] | null = shouldIncludeChildren
    ? children &&
      children.map((it: EnzymeElement | null) =>
        sanitiseSubtree(it, compositeSeen),
      )
    : [];

  return {
    ...element,
    children: cleanedChildren,
  };
}

function shallowSerialise(enzymeTree: any): EnzymeElement | null {
  return sanitiseSubtree((toJSON(enzymeTree) as any) as EnzymeElement, false);
}

function testOneFixture(fixture: Fixture, variant: string = 'a') {
  const { mount, unmount, getWrapper } = createTestContext({ fixture });
  const { component } = fixture;
  const { displayName, name } = component as any;

  test(`<${displayName || name} /> rendered correctly with ${fixture.name ||
    variant} fixture`, () => {
    mount();
    try {
      expect(shallowSerialise(getWrapper())).toMatchSnapshot();
    } finally {
      unmount();
    }
  });
}

// TODO: use real type guard functions to discriminate one fixture vs an array of them

export default function testAllFixtures(fixtures: any, variant?: string) {
  if (!('forEach' in fixtures)) {
    testOneFixture(fixtures as Fixture, variant);
  } else if (typeof fixtures.forEach === 'function') {
    (fixtures as Fixture[]).forEach(it => testOneFixture(it));
  }
}
