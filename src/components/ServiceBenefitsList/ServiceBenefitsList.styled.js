import styled from 'styled-components';

export const ListItem = styled.ul`
  list-style: disc;
  margin-left: 16px;
  padding-left: 10px;
  color: var(--primary-title-text-color);

  @media screen and (min-width: 768px) {
    text-align: left;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 16px;
  }

  @media screen and (min-width: 1200px) {
    display: block;
  }
`;

export const Item = styled.li`
  margin-bottom: 16px;
  height: 20px;
  &::marker {
    font-size: 1.3em;
    color: var(--primary-btn-color);
  }

  @media screen and (min-width: 768px) and (max-width: 1200px) {
    margin: 0;
  }
`;