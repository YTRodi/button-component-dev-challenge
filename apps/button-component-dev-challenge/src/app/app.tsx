import { MdLocalGroceryStore } from 'react-icons/md';
import { Button } from '@button-component-dev-challenge/ui';

// TODO: move to constants  lib?
const DEFAULT_BUTTON_TEXT = 'Default';

// TODO: move to UI lib (create a componente with NX CLI)
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
    <div className="flex flex-col gap-11">
      <IconSectionProps />
      {/* // TODO: maybe we can use a grid here (according to the design), for this two sections */}
      <SizeSectionProps />
      <ColorSectionProps />
    </div>
  );
}

// TODO: move sections to another folders
function IconSectionProps() {
  return (
    <div className="flex flex-wrap gap-11">
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
    <div className="flex flex-wrap gap-11">
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
    <div className="flex flex-wrap gap-11">
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

export default App;
