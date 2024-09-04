// import { observer } from "mobx-react-lite";
// import counterStore from "../../store/counter-store";

// const Counter = observer(() => {
//   const { count, increment, decrement, total } = counterStore;
//   return (
//     <>
//       <button onClick={() => increment(1)}>+</button>
//       <span>Count: {count}</span>
//       <span>Total: {total}</span>
//       <button onClick={() => decrement(1)}>-</button>
//     </>
//   );
// });

const Counter = ({
  count,
  increment,
  decrement,
  total,
}: {
  count: number;
  increment: (value: number) => void;
  decrement: (value: number) => void;
  total: number;
}) => {
  return (
    <>
      <button onClick={() => increment(1)}>+</button>
      <span>Count: {count}</span>
      <span>Total: {total}</span>
      <button onClick={() => decrement(1)}>-</button>
    </>
  );
};

export default Counter;
