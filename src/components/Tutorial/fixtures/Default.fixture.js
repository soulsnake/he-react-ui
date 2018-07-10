// @flow
import React from 'react';
import classnames from 'classnames';
import Tutorial from '../';
import { Button } from '../..';
import CheckBox from '../../Form/CheckBox';
import Icon from '../../Icon';
import styles from '../Tutorial.scss';

export default {
  component: Tutorial,
  props: {
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
        },
        {
          header: 'Provide better care experiences',
          content: (
            <div>
              Send recalls, message your <br />patients, and manage prescription<br />{' '}
              requests here.
            </div>
          ),
          top: '0px',
          left: '76px',
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
        },
      ],
    },
  },
  children: <div />,
};
