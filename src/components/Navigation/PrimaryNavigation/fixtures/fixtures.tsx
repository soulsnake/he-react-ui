import React, { Fragment } from 'react';
import PrimaryNavigation from '../';
import Button from '../../../Form/Button';
import Heading from '../../../Layout/Heading';
import sharedProps from './sharedProps.fixtureData';

export default [
  {
    name: 'Default',
    component: PrimaryNavigation,
    url: '/',
    props: {
      siteName: 'Your Site',
      logoutRoute: '/logout',
      locations: [
        {
          value: 'Location A',
          label: 'Location A',
        },
        {
          value: 'Location B',
          label: 'Location B',
        },
      ],
      bottomKeys: ['HELP', 'SETTINGS'],
      items: [
        {
          key: 'HOME',
          label: 'Home',
          icon: 'Home',
          title: 'Homepage',
          items: null,
          route: '/',
          exact: true,
        },
        {
          key: 'BUCKET1',
          label: 'Bucket 1',
          icon: 'Engage',
          title: 'Your first bucket',
          items: [
            {
              key: 'NORMAL',
              title: 'Normal stuff',
              label: 'Normal item',
              route: '/normal',
              items: [
                {
                  key: 'MAIN',
                  label: 'Main',
                  route: '/normal',
                },
                {
                  key: 'SECOND',
                  label: 'Second',
                  route: '/normal/second',
                },
              ],
            },
            {
              key: 'NOTIFICATIONS',
              title: 'Notifications',
              label: 'Notifications',
              route: '/notifications',
              notifications: 23,
              items: [
                {
                  key: 'MAIN',
                  label: 'Main',
                  route: '/notifications',
                },
                {
                  key: 'SECOND',
                  label: 'Second',
                  route: '/notifications/second',
                },
                {
                  key: 'THIRD',
                  label: 'Third',
                  route: '/notifications/third',
                },
              ],
            },
          ],
        },
        {
          key: 'BUCKET2',
          label: 'Bucket 2',
          icon: 'Megaphone',
          title: 'Your second bucket',
          items: [
            {
              key: 'FREE',
              title: 'Free item',
              label: 'Free item',
              route: '/free',
              badge: 'FREE',
              items: [
                {
                  key: 'MAIN',
                  label: 'Main',
                  route: '/free',
                },
                {
                  key: 'SECOND',
                  label: 'Second',
                  route: '/free/second',
                },
              ],
            },
            {
              key: 'NEW',
              title: 'New item',
              label: 'New item',
              route: '/new',
              badge: 'NEW',
              items: [
                {
                  key: 'MAIN',
                  label: 'Main',
                  route: '/new',
                },
                {
                  key: 'SECOND',
                  label: 'Second',
                  route: '/new/second',
                },
              ],
            },
          ],
        },
        {
          key: 'BUCKET3',
          label: 'Bucket 3',
          icon: 'Language',
          title: 'Your third bucket',
          items: [
            {
              key: 'PARENT',
              title: 'Bucket 3',
              label: 'Parent item',
              route: '/parent',
              exact: true,
            },
            {
              key: 'SUB',
              title: 'Bucket 3',
              label: 'Sub item',
              route: '/parent/sub',
            },
          ],
        },
        {
          key: 'HELP',
          label: 'Help',
          title: 'Help',
          icon: 'Help',
          route: 'https://external.url/',
        },
        {
          key: 'SETTINGS',
          label: 'Settings',
          icon: 'Settings',
          title: 'Settings',
          items: [
            {
              key: 'ITEM1',
              title: 'Item 1',
              label: 'Item 1',
              route: '/settings-1',
              items: [
                {
                  key: 'MAIN',
                  label: 'Main',
                  route: '/settings-1',
                },
                {
                  key: 'SECOND',
                  label: 'Second',
                  route: '/settings-1/second',
                },
              ],
            },
            {
              key: 'ITEM2',
              title: 'Item 2',
              label: 'Item 2',
              route: '/settings-2',
              items: [
                {
                  key: 'MAIN',
                  label: 'Main',
                  route: '/settings-2',
                },
                {
                  key: 'SECOND',
                  label: 'Second',
                  route: '/settings-2/second',
                },
              ],
            },
            {
              key: 'ITEM3',
              title: 'Item 3',
              label: 'Item 3',
              route: '/settings-3',
              items: [
                {
                  key: 'MAIN',
                  label: 'Main',
                  route: '/settings-3',
                },
                {
                  key: 'SECOND',
                  label: 'Second',
                  route: '/settings-3/second',
                },
              ],
            },
          ],
        },
      ],
    },
  },

  {
    name: 'Loading',
    component: PrimaryNavigation,
    url: '/',
    props: {
      loading: true,
      logoutRoute: '/logout',
      locations: [],
      items: [],
    },
  },

  {
    name: 'maskPage',
    component: PrimaryNavigation,
    url: '/',
    children: (
      <Fragment>
        <Heading>Example content</Heading>
        <Button>Hello there</Button>
      </Fragment>
    ),
    props: {
      maskPage: true,
      siteName: 'Your Site',
      logoutRoute: '/logout',
      locations: [
        {
          value: 'Location A',
          label: 'Location A',
        },
        {
          value: 'Location B',
          label: 'Location B',
        },
      ],
      bottomKeys: ['HELP', 'SETTINGS'],
      items: [
        {
          key: 'HOME',
          label: 'Home',
          icon: 'Home',
          title: 'Homepage',
          items: null,
          route: '/',
          exact: true,
        },
        {
          key: 'BUCKET1',
          label: 'Bucket 1',
          icon: 'Engage',
          title: 'Your first bucket',
          items: [
            {
              key: 'NORMAL',
              title: 'Normal stuff',
              label: 'Normal item',
              route: '/normal',
              items: [
                {
                  key: 'MAIN',
                  label: 'Main',
                  route: '/normal',
                },
                {
                  key: 'SECOND',
                  label: 'Second',
                  route: '/normal/second',
                },
              ],
            },
            {
              key: 'NOTIFICATIONS',
              title: 'Notifications',
              label: 'Notifications',
              route: '/notifications',
              notifications: 23,
              items: [
                {
                  key: 'MAIN',
                  label: 'Main',
                  route: '/notifications',
                },
                {
                  key: 'SECOND',
                  label: 'Second',
                  route: '/notifications/second',
                },
                {
                  key: 'THIRD',
                  label: 'Third',
                  route: '/notifications/third',
                },
              ],
            },
          ],
        },
        {
          key: 'BUCKET2',
          label: 'Bucket 2',
          icon: 'Megaphone',
          title: 'Your second bucket',
          items: [
            {
              key: 'FREE',
              title: 'Free item',
              label: 'Free item',
              route: '/free',
              badge: 'FREE',
              items: [
                {
                  key: 'MAIN',
                  label: 'Main',
                  route: '/free',
                },
                {
                  key: 'SECOND',
                  label: 'Second',
                  route: '/free/second',
                },
              ],
            },
            {
              key: 'NEW',
              title: 'New item',
              label: 'New item',
              route: '/new',
              badge: 'NEW',
              items: [
                {
                  key: 'MAIN',
                  label: 'Main',
                  route: '/new',
                },
                {
                  key: 'SECOND',
                  label: 'Second',
                  route: '/new/second',
                },
              ],
            },
          ],
        },
        {
          key: 'HELP',
          label: 'Help',
          title: 'Help',
          icon: 'Help',
          route: 'https://external.url/',
        },
        {
          key: 'SETTINGS',
          label: 'Settings',
          icon: 'Settings',
          title: 'Settings',
          items: [
            {
              key: 'ITEM1',
              title: 'Item 1',
              label: 'Item 1',
              route: '/settings-1',
              items: [
                {
                  key: 'MAIN',
                  label: 'Main',
                  route: '/settings-1',
                },
                {
                  key: 'SECOND',
                  label: 'Second',
                  route: '/settings-1/second',
                },
              ],
            },
            {
              key: 'ITEM2',
              title: 'Item 2',
              label: 'Item 2',
              route: '/settings-2',
              items: [
                {
                  key: 'MAIN',
                  label: 'Main',
                  route: '/settings-2',
                },
                {
                  key: 'SECOND',
                  label: 'Second',
                  route: '/settings-2/second',
                },
              ],
            },
            {
              key: 'ITEM3',
              title: 'Item 3',
              label: 'Item 3',
              route: '/settings-3',
              items: [
                {
                  key: 'MAIN',
                  label: 'Main',
                  route: '/settings-3',
                },
                {
                  key: 'SECOND',
                  label: 'Second',
                  route: '/settings-3/second',
                },
              ],
            },
          ],
        },
      ],
    },
  },

  {
    name: 'withSubNav',
    component: PrimaryNavigation,
    url: '/notifications/second',
    children: (
      <Fragment>
        <Heading>Example content</Heading>
        <Button>Hello there</Button>
      </Fragment>
    ),
    props: {
      ...sharedProps(),
    },
  },
];