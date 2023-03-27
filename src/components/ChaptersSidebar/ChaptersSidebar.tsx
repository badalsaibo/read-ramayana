import { List, ListItem, ListItemButton, Sheet, Stack, Typography } from '@mui/joy';
import useKanda from 'hooks/provider/useKanda';
import Link from 'next/link';
import All_CHAPTERS from './all-chapters.json';

const ChaptersSidebar = () => {
  const { kanda } = useKanda();

  console.log({ All_CHAPTERS });

  const chapters = All_CHAPTERS[kanda];

  console.log(chapters);

  return (
    <Stack component={Sheet} variant="outlined">
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
  );
};

export default ChaptersSidebar;
