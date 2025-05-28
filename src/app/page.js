import { Providers } from "./providers";

export default function Home({ children }) {
  return (
    <>
      <Providers>{children}</Providers>
    </>
  );
}
