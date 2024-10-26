import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Error, Librarian, Login, Signup, Student } from "./pages";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/librarian" element={<Librarian />} />
          <Route path="/student" element={<Student />} />
          <Route path="/" element={<Navigate to={"/login"} />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
