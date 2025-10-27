import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchQuote } from "../features/quoteSlice";

export default function QuoteCard() {
  const dispatch = useDispatch();
  const { current, status } = useSelector((state) => state.quotes || {});

  useEffect(() => {
    dispatch(fetchQuote());
  }, [dispatch]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Failed to load quote </p>;

  return (
    <div className="p-6 text-center">
      {current ? (
        <div className="bg-white shadow-md rounded-xl p-6 max-w-lg mx-auto">
          <p className="text-xl italic mb-4">“{current.advice}”</p>
          <button
            onClick={() => dispatch(fetchQuote())}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            New Quote
          </button>
        </div>
      ) : (
        <p>No quote yet!</p>
      )}
    </div>
  );
}
