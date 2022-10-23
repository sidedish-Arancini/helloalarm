import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <h1 className='text-3xl font-bold'>Hello world!</h1>
    </QueryClientProvider>
  );
}

export default App;
