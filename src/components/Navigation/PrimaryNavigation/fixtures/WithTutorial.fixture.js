import React from 'react';
import classnames from 'classnames';
import PrimaryNavigation from '../';
import Button from '../../../Form/Button';
import CheckBox from '../../../Form/CheckBox';
import Icon from '../../../Icon';
import styles from '../../../Tutorial/Tutorial.scss';

export default {
  component: PrimaryNavigation,
  url: '/',
  props: {
    logoutRoute: '/logout',
    locations: ['Location A', 'Location B'].map(location => ({
      value: location,
      label: location,
    })),
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
    tutorialProps: {
      showing: true,
      tutorialStages: {
        intro: {
          header: (
            <div className={styles.tutorialIntroHeader}>
              <Icon
                className={styles.heLogoWithText}
                name="HealthEngineWithText"
              />
              <h3>Welcome to your improved Practice Admin</h3>
            </div>
          ),
          content: (
            <div
              className={classnames(
                styles.tutorialIntroFooter,
                styles.greyBackground,
              )}
            >
              <div className={styles.footerCell}>
                <CheckBox
                  id="neverShowAgain"
                  name="neverShowAgain"
                  className={styles.leftElement}
                  label="Don't show me this again"
                />
              </div>
              <div className={styles.footerCell}>
                <Button className={styles.rightElement} link>
                  Why we changed the Practice Admin
                </Button>
              </div>
            </div>
          ),
          top: null,
          left: null,
        },
        steps: [
          {
            header: 'New navigation',
            content: (
              <div>
                All your menu items have moved <br />to the left hand side.
              </div>
            ),
            top: '0px',
            left: '200px',
            target: {
              bucket: 'HOME',
              item: null,
            },
          },
          {
            header: 'Manage your bookings',
            content: (
              <div>
                Find all your bookings, reminders <br />history and patient
                feedback here.
              </div>
            ),
            top: '0px',
            left: '100px',
            target: {
              bucket: 'BUCKET1',
              item: 'NORMAL',
            },
          },
          {
            header: 'Provide better care experiences',
            content: (
              <div>
                Send recalls, message your <br />patients, and manage prescription<br />requests here.
              </div>
            ),
            top: '0px',
            left: '76px',
            target: {
              bucket: 'BUCKET2',
              item: 'FREE',
            },
          },
          {
            header: 'Need some help?',
            content: (
              <div>
                Access useful resources, how-to guides, <br />important updates
                and helpful information <br />on installation, integration and{' '}
                <br />troubleshooting.
              </div>
            ),
            top: '0px',
            left: '76px',
            target: {
              bucket: 'HELP',
              item: null,
            },
          },
          {
            header: 'Settings',
            content: (
              <div>
                Manage your logins and permissions, <br />appointment types and
                all other <br />settings here.
              </div>
            ),
            top: '0px',
            left: '76px',
            target: {
              bucket: 'SETTINGS',
              item: 'ITEM1',
            },
          },
        ],
      },
    },
  },
};
