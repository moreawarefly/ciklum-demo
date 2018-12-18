import styled from 'styled-components';

const Table = styled.table`
  border-collapse: collapse;
  border: 1px solid #ddd;
  width: 100%;
`;

const Thr = styled.tr`
`;

const Th = styled.th`
  background-color: #ddd;
  text-align: left;
  padding: 5px;
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const Td = styled.td`
  padding: 10px 5px;
`;

const NoRecordsContainer = styled.div`
  text-align: center;
  padding-top: 2rem;
`;

const Header = styled.div`
  font-weight: bold;
  font-size: .9rem;
  margin: .3rem 0;
`;

export {
  Table,
  Thr,
  Th,
  Tr,
  Td,
  NoRecordsContainer,
  Header,
};
