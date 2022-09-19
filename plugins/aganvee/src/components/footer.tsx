/** @jsx jsx */
import { Box, Flex, jsx, Link, useColorMode } from 'theme-ui';

const Footer = () => {
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === `dark`;
  const toggleColorMode = (e: any) => {
    setColorMode(isDark ? `light` : `dark`);
  };

  return (
    <Box as="footer" variant="footer">
      {/*<button
        sx={{
          variant: `buttons.toggle`,
          fontWeight: `semibold`,
          display: `block`,
          mx: `auto`,
          mb: 3,
        }}
        onClick={toggleColorMode}
        type="button"
        aria-label="Toggle dark mode"
      >
        {isDark ? `Light` : `Dark`}
      </button>*/}
      Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      <br />
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          mt: 3,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` },
        }}
      >
        <div sx={{ mx: 1 }}>Built with ❤️ by</div>
        {` `}
        <Link
          aria-label="Link to the author's website"
          href="https://varunkumar.dev"
        >
          @varunkumar
        </Link>
        {` &`}
        <Link
          aria-label="Link to the author's website"
          href="https://adhiyan.in"
        >
          @adhiyan_v
        </Link>
      </Flex>
    </Box>
  );
};

export default Footer;
