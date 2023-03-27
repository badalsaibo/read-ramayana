import { Box, List, ListItem, ListItemButton, Sheet, Stack, styled, Typography } from '@mui/joy';
import ScrollArea from 'components/ScrollArea';
import useKanda from 'hooks/provider/useKanda';
import Link from 'next/link';
import All_CHAPTERS from './all-chapters.json';

const ChaptersSidebar = () => {
  const { kanda } = useKanda();

  console.log({ All_CHAPTERS });

  const chapters = All_CHAPTERS[kanda];

  return (
    <ScrollArea>
      <Stack sx={{ height: '100%' }}>
        <List>
          {chapters.map(({ kanda, chapter, title }) => (
            <ListItem key={kanda + chapter}>
              <ListItemButton component={Link} href={`/kanda/${kanda}/${chapter}`}>
                <Typography textTransform="capitalize" sx={{ fontFamily: 'var(--joy-fontFamily-display)' }}>
                  {title}
                </Typography>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Stack>
    </ScrollArea>
  );
};

export default ChaptersSidebar;

const StyledStack = styled(Stack)(() => ({}));
