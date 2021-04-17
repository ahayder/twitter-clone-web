import { Flex, Spinner } from "@chakra-ui/react";
import React from "react";

interface LoadingSpinnerProps {}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      my="50px"
      overflowY="hidden"
    >
      <Spinner color="white" />
    </Flex>
  );
};