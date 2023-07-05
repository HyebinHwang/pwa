import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function Background({ children }: { children: ReactNode }) {
  return (
    <Flex
      w={"100%"}
      height={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
      backgroundImage={"linear-gradient(45deg, #8b5aed 0%, #78ebfc 100%)"}
    >
      {children}
    </Flex>
  );
}
