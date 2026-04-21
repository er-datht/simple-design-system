import { MainLayout } from "./layout/MainLayout";

function App() {
  return (
    <MainLayout>
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
      <p className="mt-2 text-gray-500">Welcome to the admin panel.</p>
    </MainLayout>
  );
}

export default App;
