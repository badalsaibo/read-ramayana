import { List, ListItem, ListItemButton, Sheet, Stack, Typography } from '@mui/joy';
import { KANDAS } from 'constant/kanda';
import useKanda from 'hooks/provider/useKanda';
import Link from 'next/link';
import { getChaptersOfKanda } from 'utils/ssg';

const ChaptersSidebar = () => {
  const { kanda } = useKanda();

  const chapters = getChaptersOfKanda();

  return (
    <Stack component={Sheet} variant="outlined">
      <List>
        {chapters.map(({ kanda, url }) => (
          <ListItem key={url}>
            <ListItemButton component={Link} href={`/kanda/${url}`}>
              <Typography textTransform="capitalize" sx={{ fontFamily: 'var(--joy-fontFamily-display)' }}>
                {kanda}
              </Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};

export default ChaptersSidebar;
