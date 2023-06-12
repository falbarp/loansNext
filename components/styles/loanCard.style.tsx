import styled from 'styled-components';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';

export const StyledCard = styled(Card)`
display: grid;
grid-template-columns: 1fr;
gap: 16px;
border-radius: 8px;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
overflow: hidden;
margin-bottom: 16px;
margin-right: 16px;
margin-left: 16px;
width: 300px;
padding: 16px;
`;

export const CardImage = styled(CardMedia)`
  height: 200px;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 16px;
`;

export const CardTitle = styled.h2`
  margin: 0;
  font-size: 20px;
  font-weight: bold;
`;

export const CardDescription = styled.p`
  margin: 8px 0;
  font-size: 14px;
  color: #666;
`;

export const CardFullText = styled.p`
  margin: 8px 0;
  font-size: 12px;
  color: #666;
`;

export const CardBank = styled.p`
  margin: 8px 0;
  font-size: 14px;
  color: #888;
`;

export const CardInterest = styled.p`
  margin: 8px 0;
  font-size: 14px;
  font-weight: bold;
  color: #888;
`;

export const CardAmount = styled.p`
  margin: 8px 0;
  font-size: 14px;
  color: #888;
`;

export const CardMonths = styled.p`
  margin: 8px 0;
  font-size: 14px;
  color: #888;
`;

export const StyledIconButton = styled(IconButton)`
  padding: 8px;
  background-color: #f5f5f5;
  color: #888;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: #e0e0e0;
  }
`;

export const StyledFullScreenCard = styled(Card)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8); /* Optional overlay background */
  z-index: 9999; /* Adjust as needed */
  `;