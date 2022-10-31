import { MdLocalGroceryStore } from 'react-icons/md';
import { Button } from '@button-component-dev-challenge/ui';

// TODO: move to constants lib? I think isn't neccessary
const DEFAULT_BUTTON_TEXT = 'Default';

// TODO: move to UI lib (create a componente with NX CLI)
function AppLayout({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-11">{children}</div>;
}

function ButtonGroupLayout({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-wrap gap-11">{children}</div>;
}

function ButtonLayout({
  children,
  title,
  titleColor = 'black',
}: {
  children: React.ReactNode;
  title: string;
  titleColor?: 'black' | 'gray';
}) {
  const titleColorResult = {
    black: 'text-black',
    gray: 'text-[#828282]',
  }[titleColor];

  return (
    <div className="flex flex-col justify-center items-start gap-3">
      <h1 className={`font-ubuntu-mono text-xs ${titleColorResult}`}>
        {title}
      </h1>
      {children}
    </div>
  );
}

// TODO: add storybook
// TODO: los componentes en la app solo deben tener inputs
export function App() {
  return (
    <AppLayout>
      <DisableShadowSectionProps />
      <IconSectionProps />
      {/* // TODO: maybe we can use a grid here (according to the design), for this two sections */}
      <SizeSectionProps />
      <ColorSectionProps />
    </AppLayout>
  );
}

// TODO: move sections to another folders
function DisableShadowSectionProps() {
  return (
    <ButtonLayout title="<Button disableShadow />">
      <Button disableShadow>{DEFAULT_BUTTON_TEXT}</Button>
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
