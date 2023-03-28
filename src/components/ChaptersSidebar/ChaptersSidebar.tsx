import { Box, List, ListItem, ListItemButton, Sheet, Stack, styled, Typography } from '@mui/joy';
import ScrollArea from 'components/ScrollArea';
import useKanda from 'hooks/provider/useKanda';
import Link from 'next/link';
import All_CHAPTERS from './all-chapters.json';

const ChaptersSidebar = () => {
  const { kanda } = useKanda();

  const chapters = All_CHAPTERS[kanda];

  return (
    <div style={{ position: 'sticky', height: '100vh', border: '1px solid red', top: '10px', left: '0px' }}>
      <ScrollArea>
        <Stack sx={{ height: '100%', p: 1 }}>
          <List sx={{ '--ListItem-radius': '8px', '--List-gap': '8px' }}>
            {chapters.map(({ kanda, chapter, title }) => (
              <ListItem key={kanda + chapter}>
                <ListItemButton component={Link} href={`/kanda/${kanda}/${chapter}`}>
                  <Typography textTransform="capitalize">
                    {chapter}&#46;&nbsp;
                    {title}
                  </Typography>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Stack>
      </ScrollArea>
    </div>
  );
};

export default ChaptersSidebar;

const StyledStack = styled(Stack)(() => ({}));
