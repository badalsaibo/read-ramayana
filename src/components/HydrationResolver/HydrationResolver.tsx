import { useEffect, useState } from 'react';

type HydrationResolverProps = {
  children: React.ReactNode;
};

export default function HydrationResolver({ children }: HydrationResolverProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <>{children}</>;
}
