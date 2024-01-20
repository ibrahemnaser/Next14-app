//--------- components ---------//
import Button from "@/components/global/Button";
import Header from "@/components/global/Header";
import Link from "@/components/global/Link";

export default function Home() {
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <Link label='About Us' href='/about' />
      <Link label='Blog' href='/blog' />
      <Button label={'Button Label'} />
    </main>
  );
}
