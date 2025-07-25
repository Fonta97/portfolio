

export const Table = ({ children }) => <table className={'table'}>{children}</table>;

export const TableRow = ({ children }) => <tr className={'row'}>{children}</tr>;

export const TableHead = ({ children }) => (
  <thead className={'head'}>{children}</thead>
);

export const TableBody = ({ children }) => (
  <tbody className={'body'}>{children}</tbody>
);

export const TableHeadCell = ({ children }) => (
  <th className={'headCell'}>{children}</th>
);

export const TableCell = ({ children }) => <td className={'cell'}>{children}</td>;
