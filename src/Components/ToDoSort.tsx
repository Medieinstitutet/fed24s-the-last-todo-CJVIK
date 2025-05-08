

type ToDoSortProps = {
    sortByPriority: () => void;
    currentSortDirection: 'asc' | 'desc' | 'none';
};

export const ToDoSort = ({ sortByPriority, currentSortDirection }: ToDoSortProps) => {
    return (
        <div className="todo-sort">
            <button onClick={sortByPriority} className="sort-button">
                Sort by Priority!
                {currentSortDirection === 'desc' && ' (High to Low)'}
                {currentSortDirection === 'asc' && ' (Low to High)'}
                {currentSortDirection === 'none' && ' (Not Sorted)'}
            </button>
        </div>
    );
};
