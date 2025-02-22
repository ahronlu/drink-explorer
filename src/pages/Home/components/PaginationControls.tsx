import { Pagination, useMediaQuery } from "@mui/material";

import { theme } from "../../../theme";

interface PaginationControlsProps {
  page: number;
  setPage: (value: number) => void;
  totalPages: number;
}

export const PaginationControls: React.FC<PaginationControlsProps> = ({ page, setPage, totalPages }) => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (totalPages <= 1) return null;

  return (
    <Pagination
      count={totalPages}
      page={page}
      variant="outlined"
      onChange={(_e, value) => setPage(value)}
      sx={{ mt: 4, display: "flex", justifyContent: "center" }}
      siblingCount={isMobile ? 0 : 1}
      boundaryCount={isMobile ? 0 : 1}
    />
  );
};
