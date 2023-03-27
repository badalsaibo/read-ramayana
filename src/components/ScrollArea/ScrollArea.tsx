import { useColorScheme, useTheme } from '@mui/joy';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';

const ScrollArea = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();
  const { systemMode } = useColorScheme();

  const scrollThumbColor = systemMode === 'dark' ? theme.vars.palette.neutral[700] : theme.vars.palette.neutral[300];

  return (
    <ScrollAreaPrimitive.Root
      style={{
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <ScrollAreaPrimitive.Viewport style={{ height: '100%', width: '100%' }}>{children}</ScrollAreaPrimitive.Viewport>
      <ScrollAreaPrimitive.Scrollbar
        orientation="vertical"
        style={{
          display: 'flex',
          userSelect: 'none',
          touchAction: 'none',
          height: '100%',
          width: '10px',
          borderLeftWidth: '1px',
          borderLeftColor: 'transparent',
          padding: '1px',
        }}
      >
        <ScrollAreaPrimitive.Thumb
          style={{
            flex: 1,
            background: scrollThumbColor,
            borderRadius: '4px',
            position: 'relative',
          }}
        />
      </ScrollAreaPrimitive.Scrollbar>
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
};

export default ScrollArea;
