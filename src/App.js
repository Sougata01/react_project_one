import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { id: "1", location: "Bangalore", date: new Date(2023, 7, 15), title: "Insurance", price: 100 },
    { id: "2", location: "Delhi", date: new Date(2023, 3, 25), title: "Book", price: 10 },
    { id: "3", location: "Hyderabad", date: new Date(2023, 10, 11), title: "Pen", price: 1 },
    { id: "4", location: "Mumbai", date: new Date(2023, 1, 14), title: "Laptop", price: 200 },
  ];

  return (
    <div>
      <h1>Let's get Started</h1>
      {expenses.map((expense, index) => {
        return (
          <ExpenseItem
            key={expense.id}
            location={expense.location}
            date={expense.date}
            title={expense.title}
            price={expense.price}
          ></ExpenseItem>
        );
      })}
    </div>
  );
}

export default App;