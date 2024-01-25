export default function MealPage({ params }) {
    return (
        <main>
            <h1>Single Meal Page</h1>
            <p><span>Id: {params.mealId}</span></p>
        </main>
    )
}