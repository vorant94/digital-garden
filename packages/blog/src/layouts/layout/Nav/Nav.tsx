import { Button, Icon } from '@/components';
import {
  useEffect,
  type Dispatch,
  type FunctionComponent,
  type PropsWithChildren,
  type SetStateAction,
} from 'react';
import { useMediaQuery } from 'react-responsive';
import { Modal, useIsModalOpen } from '../Modal.tsx';
import { NavLink, type NavLinkComponent } from './NavLink.tsx';

const Nav: NavComponent = function ({ children }) {
  const [isModalOpen, setIsModalOpen] = useMobileNavModal();

  return (
    <>
      <nav className="hidden lg:flex">
        <ul className="flex gap-3 md:gap-4 lg:gap-6">{children}</ul>
      </nav>

      <Button
        className="lg:hidden"
        onClick={() => setIsModalOpen(!isModalOpen)}>
        <Icon glyph="menu" />
      </Button>

      <Modal
        isOpen={isModalOpen}
        onCloseClick={() => setIsModalOpen(false)}>
        <nav className="flex-1 flex flex-col justify-center">
          <ul className="flex flex-col">{children}</ul>
        </nav>
      </Modal>
    </>
  );
};

function useMobileNavModal(): [boolean, Dispatch<SetStateAction<boolean>>] {
  const [isModalOpen, setIsModalOpen] = useIsModalOpen();

  const isLgScreen = useMediaQuery({ query: '(min-width: 1024px)' });
  useEffect(() => {
    if (isLgScreen && isModalOpen) {
      setIsModalOpen(false);
    }
  }, [isModalOpen, isLgScreen]);

  return [isModalOpen, setIsModalOpen];
}

Nav.Link = NavLink;

export { Nav };

export interface NavComponent
  extends FunctionComponent<PropsWithChildren<NavProps>> {
  Link: NavLinkComponent;
}

export interface NavProps {}
