import { useState } from "react"

interface sortingPopoverProps {
    onSortChange: (sortValue: string) => void
    onFilterChange: (filterValue: string) => void
    currentSort:string
    currentFilter:string
}

export const SortingPopover = ({onSortChange, onFilterChange, currentFilter, currentSort}: sortingPopoverProps) => {
    const [isOpen, setIsOpen] = useState(false)
    
    return (
        <div className="popover-container">
            <button onClick={() => setIsOpen(!isOpen)} className="CSSBase cursorPointer popoverBtns">Sort</button>
            {isOpen && (
                <div className="CSSBase" id="popover-sort">
                        <div id="popoverBtnsContainer">
                                <p>Sort: </p>
                                <div className="sortDivGroupe">
                                    <input checked={currentSort === 'name'} id="sortName" name="sortOptions" onChange={() => onSortChange('name')} type="radio" />
                                    <label htmlFor="sortName">Name</label>
                                    <input checked={currentSort === 'date'} id="sortDate" name="sortOptions" onChange={() => onSortChange('date')} type="radio" />
                                    <label htmlFor="sortDate">Date</label>
                                    <input checked={currentSort === 'none'} id="sortNone" name="sortOptions" onChange={() => onSortChange('none')} type="radio" />
                                    <label htmlFor="sortNone">none</label>
                                </div>
                                <p>Filter: </p>
                                <div className="filterDiv">
                                    <input checked={currentFilter === 'done'} id="filterDone" name="filterOptions" onChange={() => onFilterChange('done')} type="radio" />
                                    <label htmlFor="filterDone">Done</label>
                                    <input checked={currentFilter === 'undone'} id="filterUndone" name="filterOptions" onChange={() => onFilterChange('undone')} type="radio" />
                                    <label htmlFor="filterUndone">Undone</label>
                                    <input checked={currentFilter === 'all'} id="filterNone" name="filterOptions" onChange={() => onFilterChange('all')} type="radio" />
                                    <label htmlFor="filterNone">none</label>
                                </div>
                        </div>
                </div>
            )}
        </div>
    )
}
