import * as React from 'react';
import {
  Menubar,
  MenuRoot,
  MenuTrigger,
  MenuPortal,
  MenuPositioner,
  MenuPopup,
  MenuItem,
  MenuSeparator,
} from './MenuBar';
import MenuGroup from './MenuGroup';
import '../../styles/basic-menubar.css'

export default function BasicMenubar() {
  return (
    <Menubar>
      <MenuRoot>
        <MenuTrigger>Women</MenuTrigger>
        <MenuPortal>
          <MenuPositioner >
            <MenuPopup>
              <MenuGroup index={0} />
            </MenuPopup>
          </MenuPositioner>
        </MenuPortal>
      </MenuRoot>
      <MenuRoot>
        <MenuTrigger>Men</MenuTrigger>
        <MenuPortal>
          <MenuPositioner>
            <MenuPopup>
              <MenuGroup index={1} />
            </MenuPopup>
          </MenuPositioner>
        </MenuPortal>
      </MenuRoot>
    </Menubar>
  );
}