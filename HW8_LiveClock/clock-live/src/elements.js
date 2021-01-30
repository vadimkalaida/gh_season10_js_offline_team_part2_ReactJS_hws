import styled from 'styled-components';

export const displayFlex = (justifyContentValue, alignItemsValue, flexDirectionValue) => {
  return(
    `
      display: flex;
      justify-content: ${justifyContentValue};
      align-items: ${alignItemsValue};
      flex-direction: ${flexDirectionValue};
    `
  );
};

export const AppBlock = styled.div`
  width: 100%;
  ${ displayFlex('flex-start', 'center', 'column') } 
  text-align: center;
`;