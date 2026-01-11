import { useState } from "react";
import CheckboxRow from "./CheckboxRow";
import Separator from "./Separator";
import DoneButton from "./DoneButton";

function CheckboxPagination() {
  const [selectedPages, setSelectedPages] = useState(new Set());
  const totalPages = 6;

  // Calculate if all pages are selected
  const isAllPagesSelected = selectedPages.size === totalPages;

  const handlePageToggle = (pageNumber) => {
    setSelectedPages((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(pageNumber)) {
        newSet.delete(pageNumber);
      } else {
        newSet.add(pageNumber);
      }
      return newSet;
    });
  };

  const handleAllPagesToggle = () => {
    if (isAllPagesSelected) {
      setSelectedPages(new Set());
    } else {
      setSelectedPages(new Set([1, 2, 3, 4, 5, 6]));
    }
  };

  return (
    <div className="checkbox-pagination">
      {/* All pages option */}
      <CheckboxRow
        id="all-pages"
        label="All pages"
        checked={isAllPagesSelected}
        onChange={handleAllPagesToggle}
      />

      <Separator />

      {/* Pages list with scrolling */}
      <div className="pages-container">
        {[1, 2, 3, 4, 5, 6].map((pageNumber) => (
          <CheckboxRow
            key={pageNumber}
            id={`page-${pageNumber}`}
            label={`Page ${pageNumber}`}
            checked={selectedPages.has(pageNumber)}
            onChange={() => handlePageToggle(pageNumber)}
          />
        ))}
      </div>

      <Separator />

      <div className="button-wrapper">
        <DoneButton />
      </div>
    </div>
  );
}

export default CheckboxPagination;
