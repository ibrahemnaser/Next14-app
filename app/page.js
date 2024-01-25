// --------------- Components -------------------//
import Link from "@/src/components/global/Link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
      </h1>
      <Link label="Meals Page" href="/meals" />
      <Link label="Meal One Page" href="/meals/meal-1" />
      <Link label="Meal Two Page" href="/meals/meal-2" />
      <Link label="Share Meals Page" href="/meals/share" />
      <Link label="Community Page" href="/community" />
    </main>
  );
}
