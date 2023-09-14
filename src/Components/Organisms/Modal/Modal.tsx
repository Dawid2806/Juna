import React, { useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

interface CustomModalProps {
  title: string;
  message: string;
  buttonTitle: string;
}
export const CustomModal = ({
  title,
  message,
  buttonTitle,
}: CustomModalProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  useEffect(() => {
    onOpen(); // Otwórz modal automatycznie przy montowaniu
  }, [onOpen]);
  return (
    <>
      <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
              <ModalBody>
                <p>{message}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  {buttonTitle}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
