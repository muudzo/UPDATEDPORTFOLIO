import { useState } from 'react';
import { Layout } from '@components/core/Layout';
import { BootSequence } from '@components/core/BootSequence';
import { OSSelectionScreen } from '@components/core/OSSelectionScreen';
import { DesktopManager } from '@components/core/DesktopManager';
import { useOSStore } from '@store/useOSStore';

function App() {
  const [bootCompleted, setBootCompleted] = useState(false);
  const { booted } = useOSStore();

  return (
    <Layout>
      {!bootCompleted && <BootSequence onComplete={() => setBootCompleted(true)} />}

      {bootCompleted && !booted && <OSSelectionScreen />}

      {booted && <DesktopManager />}
    </Layout>
  );
}

export default App;
