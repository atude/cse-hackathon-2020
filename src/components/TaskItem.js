import React from 'react';
import styled from 'styled-components';
import { Typography, Grid } from '@material-ui/core';
import { blueGrey } from '@material-ui/core/colors';
import { breakpoints } from '../utils/breakpoints';

import { useTheme } from '@material-ui/core/styles';

const StyledTask = styled.div`
  border-radius: 8px;
  padding: 12px;
  border: 1px solid #BDBDBD;
  margin: 2px 2px 8px 2px;

  .chips-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
  }
  .right-text-container {
    margin-top: 1em;
    @media ${breakpoints.md} {
      margin-top: 0;
      text-align: right;
    }
  }
`;

const StyledChip = styled.span`
  background-color: ${props => props.color};
  color: #fff;
  border-radius: 16px;
  padding: 0.4em 1em 0.4em 1em;
  margin: 0.2em;
`;

function TaskItem(props) {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;

  const { 
    id,
    description, 
    categories, 
    customerName, 
    languages, 
    creationTimestamp 
  } = props;

  return (
    <StyledTask container direction="row">
      <Grid container>
        <Grid item sm={12} md={6}>
          <Typography>{description}</Typography>          
        </Grid>
        <Grid item sm={12} md={6} className="right-text-container">
          <Typography style={{color: blueGrey.A700}}>Posted on {new Date(creationTimestamp).toUTCString()}</Typography>
          <Typography ><b>From:</b> {customerName}</Typography>
        </Grid>
      </Grid>
      <br />
      <div className="chips-container">
        <Typography><b>Categories&nbsp;&nbsp;</b></Typography>
        {categories.map((category) => (
          <StyledChip key={category} color={primary}>
            {category}
          </StyledChip>
        ))}
      </div>
      <div className="chips-container">
        <Typography><b>Languages&nbsp;&nbsp;</b></Typography>
        {languages.map((language) => (
          <StyledChip key={language} color={secondary}>
            {language}
          </StyledChip>
        ))}
      </div>
    </StyledTask>
  );
}

export default TaskItem;
