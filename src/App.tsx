import { Layout } from '@components/core/Layout';

function App() {
  return (
    <Layout>
      <div className='flex flex-col items-center justify-center h-full gap-4'>
        <h1 className='text-2xl font-light tracking-widest uppercase opacity-80 animate-pulse'>
          Initialize System
        </h1>
        <div className='text-xs text-center text-gray-500 font-mono'>Nostalgia OS v1.0.0</div>
      </div>
    </Layout>
  );
}

export default App;
