import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';
import Result from '../interfaces/Result.interface.ts';

export default function InsetList(props: {results: Array<Result>, SEARCH_QUERY: (keyWord: string)=>void}) {
  return (
    <List
      sx={{
        width: '100%',
        bgcolor: 'background.paper',
        color: 'black',
        position: 'absolute',
        top: '100%',
        maxHeight: '400px',
        overflowY: 'scroll'
      }}
      className="search-result-dropdown"
      aria-label="product key words"
    >
      {props.results.map((result)=> (
        <ListItem disablePadding key={result.keyWord} className="search-result-item">
          <ListItemButton onClick={()=> { props.SEARCH_QUERY(result.keyWord); }}>
            <ListItemIcon>
              <StarIcon sx={result.stared ? { fill: 'yellow' } : { fill: 'gray' }} />
            </ListItemIcon>
            <ListItemText primary={result.keyWord} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
