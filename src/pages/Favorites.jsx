import { useSelector } from "react-redux";

export default function Favorites(){
const favorites = useSelector((state) =>  state.quotes?.favorites || []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet!</p>
      ) : (
        <ul className="space-y-4">
          {favorites.map(q => (
            <li key={q._id} className="bg-white p-4 rounded shadow">
              <p className="italic">"{q.content}"</p>
              <p className="text-sm text-gray-500">- {q.author}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
