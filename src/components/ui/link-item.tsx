import NextLink from "next/link";
import { Link, useColorModeValue } from "@chakra-ui/react";

interface Props {
  href: string;
  path?: string;
  target?: any;
  children: string | JSX.Element | JSX.Element[] | React.ReactNode;
}

const LinkItem: React.FC<Props> = ({ href, path, target, children }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray.800", "whiteAlpha.900");

  return (
    <Link
      href={href}
      p={2}
      scroll={false}
      color={active ? useColorModeValue("#80BFFF", "#F26D78") : inactiveColor}
      as={NextLink}
      target={target}
    >
      {children}
    </Link>
  );
};

export default LinkItem;
