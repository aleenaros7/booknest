import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Error, Librarian, SignIn, SignUp, Student } from "./pages";
import { QueryClient, QueryClientProvider } from "react-query";
import { Books, Toast } from "./components";
import { useAtom } from "jotai";
import { toastOptionsAtom } from "./store";
import { Borrowed } from "./components/borrowed";

function App() {
  const [toastOptions, setToastOptions] = useAtom(toastOptionsAtom);
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
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/librarian" element={<Librarian />} />
          <Route path="/student" element={<Student />}>
            <Route index element={<Navigate to={"books"} />} />
            <Route path="books" element={<Books />} />
            <Route path="borrowed" element={<Borrowed />} />
            <Route path="*" element={<Error />} />
          </Route>
          <Route path="/" element={<Navigate to={"/sign-in"} />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      <Toast setOptions={setToastOptions} options={toastOptions} />
    </QueryClientProvider>
  );
}

export default App;
