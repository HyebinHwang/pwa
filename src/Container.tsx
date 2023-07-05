import { Box, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  w?: string;
  h?: string;
}

export default function Container({
  children,
  w = "350px",
  h = "350px",
}: ContainerProps) {
  return (
    <Flex
      w={"100%"}
      height={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
      backgroundImage={"linear-gradient(45deg, #8b5aed 0%, #78ebfc 100%)"}
    >
      <Box
        w={w}
        height={h}
        border={"4px solid #fbfbfb"}
        borderBottomWidth={"2px"}
        borderRadius={"35px"}
        boxShadow={"0 45px 63px rgba(0, 0, 0, 0.26);"}
        background={"#fbfbfb"}
      >
        {children}
      </Box>
    </Flex>
  );
}
