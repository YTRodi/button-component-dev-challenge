import { MdLocalGroceryStore } from 'react-icons/md';
import { Button, ButtonProps } from '@button-component-dev-challenge/ui';

// TODO: move to constants lib? I think isn't neccessary
const DEFAULT_BUTTON_TEXT = 'Default';

// TODO: move to UI lib (create a componente with NX CLI)
function Layout({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-11">{children}</div>;
}

function ButtonGroupLayout({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-wrap gap-11">{children}</div>;
}

function ButtonLayout({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex flex-col justify-center items-start gap-3">
      <h1 className="font-ubuntu-mono text-xs">{title}</h1>
      {children}
    </div>
  );
}

// TODO: add storybook
// TODO: los componentes en la app solo deben tener inputs
export function App() {
  return (
    <Layout>
      {/* <ButtonsTable /> */}
      <VariantsSectionProps />
      <DisableShadowSectionProps />
      <DisableSectionProps />
      <IconSectionProps />
      {/* // TODO: maybe we can use a grid here OR a <table></table> (according to the design), for this two sections */}
      <SizeSectionProps />
      <ColorSectionProps />
    </Layout>
  );
}

// TODO: move sections to another folders
function ButtonsTable() {
  // TODO: move out ot the component to avoid re renders
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

function VariantsSectionProps() {
  // TODO: fix this spacing problems
  // TODO: fix this spacing problems
  // TODO: fix this spacing problems
  return (
    <div className="border">
      <ButtonLayout title="<Button />">
        <Button>{DEFAULT_BUTTON_TEXT}</Button>
      </ButtonLayout>
      <ButtonLayout title="<Button variant=”outline” />">
        <Button variant="outline">{DEFAULT_BUTTON_TEXT}</Button>
      </ButtonLayout>
      <ButtonLayout title="<Button variant=”text” />">
        <Button variant="text">{DEFAULT_BUTTON_TEXT}</Button>
      </ButtonLayout>
    </div>
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
    <ButtonLayout title="<Button disabled />">
      <Button disabled>{DEFAULT_BUTTON_TEXT}</Button>
    </ButtonLayout>
  );
}

function IconSectionProps() {
  return (
    <ButtonGroupLayout>
      <ButtonLayout title="<Button startIcon=”local_grocery_store” />">
        <Button startIcon={<MdLocalGroceryStore />}>
          {DEFAULT_BUTTON_TEXT}
        </Button>
      </ButtonLayout>
      <ButtonLayout title="<Button endIcon=”local_grocery_store” />">
        <Button endIcon={<MdLocalGroceryStore />}>{DEFAULT_BUTTON_TEXT}</Button>
      </ButtonLayout>
    </ButtonGroupLayout>
  );
}

function SizeSectionProps() {
  return (
    <ButtonGroupLayout>
      <ButtonLayout title="<Button size=”sm” />">
        <Button size="sm">{DEFAULT_BUTTON_TEXT}</Button>
      </ButtonLayout>
      <ButtonLayout title="<Button size=”md” />">
        <Button>{DEFAULT_BUTTON_TEXT}</Button>
      </ButtonLayout>
      <ButtonLayout title="<Button size=”lg” />">
        <Button size="lg">{DEFAULT_BUTTON_TEXT}</Button>
      </ButtonLayout>
    </ButtonGroupLayout>
  );
}

function ColorSectionProps() {
  return (
    <ButtonGroupLayout>
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
    </ButtonGroupLayout>
  );
}

export default App;
