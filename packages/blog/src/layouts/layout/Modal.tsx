import { Button, Icon } from '@/components';
import { THEME } from '@/shared';
import classNames from 'classnames';
import {
  useEffect,
  useState,
  type Dispatch,
  type FunctionComponent,
  type PropsWithChildren,
  type SetStateAction,
} from 'react';
import { Header } from './Header';

export const Modal: FunctionComponent<PropsWithChildren<ModalProps>> =
  function ({ children, isOpen, onCloseClick }) {
    return (
      isOpen && (
        <div className="fixed top-0 left-0 w-dvw h-dvh backdrop-filter backdrop-blur z-10">
          <div className={classNames(THEME.fullWidth, 'flex flex-col h-full')}>
            <Header>
              <Button onClick={onCloseClick}>
                <Icon glyph="close" />
              </Button>
            </Header>

            {children}
          </div>
        </div>
      )
    );
  };

export function useIsModalOpen(): [boolean, Dispatch<SetStateAction<boolean>>] {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : 'unset';
  }, [isModalOpen]);

  return [isModalOpen, setIsModalOpen];
}

export interface ModalProps {
  isOpen: boolean;
  onCloseClick(): void;
}
