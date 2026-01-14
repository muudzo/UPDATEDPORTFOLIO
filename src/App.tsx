import { useState } from 'react';
import { Layout } from '@components/core/Layout';
import { BootSequence } from '@components/core/BootSequence';
import { OSSelectionScreen } from '@components/core/OSSelectionScreen';

function App() {
  const [bootCompleted, setBootCompleted] = useState(false);

  return (
    <Layout>
      {!bootCompleted && <BootSequence onComplete={() => setBootCompleted(true)} />}

      {bootCompleted && <OSSelectionScreen />}
    </Layout>
  );
}

export default App;
