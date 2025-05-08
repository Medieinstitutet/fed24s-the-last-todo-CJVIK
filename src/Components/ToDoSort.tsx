

type ToDoSortProps = {
    sortByPriority: () => void;
    currentSortDirection: 'asc' | 'desc' | 'none';
};

export const ToDoSort = ({ sortByPriority, currentSortDirection }: ToDoSortProps) => {
    return (
        <div className="todo-sort flex justify-center mb-6">
            <button onClick={sortByPriority} className="sort-button px-4 py-2 rounded-md bg-gray-700/80 shadow border border-gray-400">
                Sort by Priority!
                {currentSortDirection === 'desc' && ' (High to Low)'}
                {currentSortDirection === 'asc' && ' (Low to High)'}
                {currentSortDirection === 'none' && ' (Not Sorted)'}
            </button>
        </div>
    );
};
