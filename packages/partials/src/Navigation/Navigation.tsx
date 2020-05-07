import React from 'react';

import { defaultTheme } from '@hiab/theme';
import { TextLink, Underline } from '@hiab/buttons';
import { Icon, Name } from '@hiab/icons';

import * as styles from './Navigation.style';

interface INavigationLinkProps {
  url: string,
  internal: boolean,
  label: string
}

interface INavigationProps {
  links: INavigationLinkProps[],
}

export const Navigation: React.FC<INavigationProps> = ({ links }) => {
  return (
    <>
      <styles.Toolbar>
        <styles.Brands>
          <span>OUR BRANDS</span>
          <Icon name={Name.DOWN_SMALL_ARRROW} height="auto" width="8px" color="white" />
        </styles.Brands>

        <styles.Language>
          <Icon name={Name.GLOBE} height="18px" width="auto" color={defaultTheme.colors.thunderbird} />
          <span>Global</span>
        </styles.Language>
      </styles.Toolbar>

      <styles.Container>
        <styles.InnerContainer>
          <styles.Left>
            <Icon name={Name.HIAB} height="39px" width="auto" />

            {links &&
              <styles.Links>
                {links.map((item: INavigationLinkProps, i: number) => (
                  <li key={i}>
                    <TextLink
                      link={{
                        url: item.url,
                        internal: item.internal
                      }}
                      underline={Underline.HALF_SOLID}
                    >
                      {item.label}
                    </TextLink>
                  </li>
                ))}
              </styles.Links>}
          </styles.Left>

          <styles.Search>
            <span>Search</span>
            <Icon name={Name.SEARCH} height="15px" width="15px" color={defaultTheme.colors.thunderbird} />
          </styles.Search>
        </styles.InnerContainer>
      </styles.Container>
    </>
  );
};