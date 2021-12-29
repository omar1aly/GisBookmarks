import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Clear from '@mui/icons-material/Clear';
import axios from 'axios';
import AppContext from './../../Context/AppContext';
import { Button, Snackbar } from '@mui/material';

export default function Search() {
  const { selectedAddress, setSelectedAddress, addBookMark, user } =
    React.useContext(AppContext);
  const [searchValue, setSearchValue] = React.useState('cairo');
  const [searchResult, setSearchResult] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleSelectedItem = (index) => setSelectedAddress(searchResult[index]);

  const handleClick = async () => {
    setSelectedAddress(null);
    setLoading(true);
    const resp = await axios.get(
      'https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?SingleLine=' +
        searchValue +
        '&f=json&outSR=%7B%22latestWkid%22%3A3857%2C%22wkid%22%3A102100%7D&outFields=Addr_type%2CMatch_addr%2CStAddr%2CCity&location=%7B%22spatialReference%22%3A%7B%22latestWkid%22%3A3857%2C%22wkid%22%3A102100%7D%2C%22x%22%3A-278440.1027364888%2C%22y%22%3A6179636.738117529%7D&maxLocations=10'
    );
    if (resp.data.candidates.length === 0) setOpen(true);

    setSearchResult(resp.data.candidates);
    setLoading(false);
  };

  if (loading) return 'Loading....';

  return (
    <>
      <Paper
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search"
          inputProps={{ 'aria-label': 'search ' }}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyPress={(event) => event.key === 'Enter' && handleClick()}
        />
        {searchValue && (
          <>
            <IconButton
              color="primary"
              sx={{ p: '10px' }}
              aria-label="directions"
              onClick={() => {
                setSearchValue('');
                setSearchResult([]);
                setSelectedAddress(null);
              }}
            >
              <Clear />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          </>
        )}

        <IconButton
          type="submit"
          sx={{ p: '10px' }}
          aria-label="search"
          onClick={handleClick}
        >
          <SearchIcon />
        </IconButton>
      </Paper>

      {selectedAddress && (
        <Paper style={{ padding: 10, margin: 10 }}>
          {selectedAddress.address} - {selectedAddress.attributes.city}
          <Divider style={{ margin: 10 }} />
          <Button
            variant="contained"
            fullWidth
            color="primary"
            onClick={() => {
              setSelectedAddress('');
              setSearchResult([]);
              addBookMark({ ...selectedAddress, username: user.username });
            }}
          >
            Add to Bookmarks
          </Button>
        </Paper>
      )}

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
        message="No result Founded"
      />
      {!selectedAddress &&
        searchResult.length > 0 &&
        searchResult.map((sr, indx) => (
          <Paper
            style={{ padding: 10, margin: 10 }}
            key={indx}
            onClick={() => handleSelectedItem(indx)}
          >
            {sr.address} - {sr.attributes.city}
          </Paper>
        ))}
    </>
  );
}
