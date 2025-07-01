import styled from 'styled-components';
import { products } from '../data/products';

const ListWrapper = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  padding: 16px;
  background: rgba(255,255,255,0.85);
  border-radius: 16px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.07);
`;

const CategoryTitle = styled.h2`
  font-family: 'Golos Text', Arial, sans-serif;
  font-size: 24px;
  color: #473920;
  margin: 24px 0 8px 0;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 16px;
`;

const Th = styled.th`
  font-size: 16px;
  color: #473920;
  font-weight: 600;
  padding: 6px 4px;
  border-bottom: 1px solid #d3c7b2;
  background: #f7f5f2;
`;

const Td = styled.td`
  font-size: 16px;
  color: #222;
  padding: 6px 4px;
  text-align: left;
`;

export const PriceList = () => (
  <ListWrapper>
    {products.map((cat) => (
      <div key={cat.category}>
        <CategoryTitle>{cat.category}</CategoryTitle>
        <Table>
          <thead>
            <tr>
              <Th>Название</Th>
              <Th>Цена</Th>
              <Th>Ед.</Th>
            </tr>
          </thead>
          <tbody>
            {cat.items.map((item) => (
              <tr key={item.name}>
                <Td>{item.name}</Td>
                <Td>{item.price}</Td>
                <Td>{item.unit}</Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    ))}
  </ListWrapper>
); 