import React from 'react';
import { MdLocalGroceryStore } from 'react-icons/md';
import {
  Button,
  ButtonProps,
  ButtonLayout,
} from '@button-component-dev-challenge/ui';

// TODO: add storybook

const DEFAULT_BUTTON_TEXT = 'Default';
const BUTTON_PROPS: Omit<ButtonProps, 'children'>[][] = [
  [{ variant: 'default' }, { variant: 'outline' }, { variant: 'text' }],
  [
    { variant: 'default', color: 'primary' },
    { variant: 'outline', color: 'primary' },
    { variant: 'text', color: 'primary' },
  ],
  [
    { variant: 'default', color: 'secondary' },
    { variant: 'outline', color: 'secondary' },
    { variant: 'text', color: 'secondary' },
  ],
  [
    { variant: 'default', color: 'danger' },
    { variant: 'outline', color: 'danger' },
    { variant: 'text', color: 'danger' },
  ],
];

export function App() {
  return (
    <div className="flex flex-col gap-7 py-12 pl-20">
      <header>
        <h1 className="font-poppins text-2xl">Buttons</h1>
      </header>
      <main className="flex flex-col gap-11">
        <VariantsSectionProps />
        <DisableShadowSectionProps />
        <DisableSectionProps />
        <IconSectionProps />
        <SizeSectionProps />
        <ColorSectionProps />
        <ButtonsTable />
      </main>
    </div>
  );
}

function VariantsSectionProps() {
  return (
    <React.Fragment>
      <ButtonLayout title="<Button />">
        <Button autoFocus>{DEFAULT_BUTTON_TEXT}</Button>
      </ButtonLayout>
      <ButtonLayout title="<Button variant=”outline” />">
        <Button variant="outline">{DEFAULT_BUTTON_TEXT}</Button>
      </ButtonLayout>
      <ButtonLayout title="<Button variant=”text” />">
        <Button variant="text">{DEFAULT_BUTTON_TEXT}</Button>
      </ButtonLayout>
    </React.Fragment>
  );
}

function DisableShadowSectionProps() {
  return (
    <ButtonLayout title="<Button disableShadow />">
      <Button disableShadow>{DEFAULT_BUTTON_TEXT}</Button>
    </ButtonLayout>
  );
}

function DisableSectionProps() {
  return (
    <div className="flex gap-32">
      <ButtonLayout title="<Button disabled />">
        <Button disabled>Disabled</Button>
      </ButtonLayout>
      <ButtonLayout title="<Button variant=”text” disabled />">
        <Button variant="text" disabled>
          Disabled
        </Button>
      </ButtonLayout>
    </div>
  );
}

function IconSectionProps() {
  return (
    <div className="flex gap-20">
      <ButtonLayout title="<Button startIcon=”local_grocery_store” />">
        <Button startIcon={<MdLocalGroceryStore />}>
          {DEFAULT_BUTTON_TEXT}
        </Button>
      </ButtonLayout>
      <ButtonLayout title="<Button endIcon=”local_grocery_store” />">
        <Button endIcon={<MdLocalGroceryStore />}>{DEFAULT_BUTTON_TEXT}</Button>
      </ButtonLayout>
    </div>
  );
}

function SizeSectionProps() {
  return (
    <div className="flex gap-20">
      <ButtonLayout title="<Button size=”sm” />">
        <Button size="sm">{DEFAULT_BUTTON_TEXT}</Button>
      </ButtonLayout>
      <ButtonLayout title="<Button size=”md” />">
        <Button>{DEFAULT_BUTTON_TEXT}</Button>
      </ButtonLayout>
      <ButtonLayout title="<Button size=”lg” />">
        <Button size="lg">{DEFAULT_BUTTON_TEXT}</Button>
      </ButtonLayout>
    </div>
  );
}

function ColorSectionProps() {
  return (
    <div className="flex gap-11">
      <ButtonLayout title="<Button color=”default” />">
        <Button>{DEFAULT_BUTTON_TEXT}</Button>
      </ButtonLayout>
      <ButtonLayout title="<Button color=”primary” />">
        <Button color="primary">Primary</Button>
      </ButtonLayout>
      <ButtonLayout title="<Button color=”secondary” />">
        <Button color="secondary">Secondary</Button>
      </ButtonLayout>
      <ButtonLayout title="<Button color=”danger” />">
        <Button color="danger">Danger</Button>
      </ButtonLayout>
    </div>
  );
}

function ButtonsTable() {
  return (
    <div>
      <table>
        <thead>
          <th>Default</th>
          <th>Outline</th>
          <th>Text</th>
        </thead>
        <tbody>
          {BUTTON_PROPS.map((buttons) => (
            <tr>
              {buttons.map((props) => (
                <td>
                  <Button {...props}>{props.variant}</Button>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
