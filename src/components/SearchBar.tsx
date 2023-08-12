import {SearchArea, DevicesSearchBar, searchTextStyle, textStyle} from "../styled-components/SearchBarStyles";

function SearchBar() {
    return (<SearchArea>
            <DevicesSearchBar id="custom-css-outlined-input" label="Search Device" variant="outlined"
                              InputLabelProps={{
                                  sx: {
                                      ...textStyle
                                  },
                              }}
                              inputProps={{
                                  sx: {
                                      ...searchTextStyle
                                  },
                              }}
                              fullWidth={true}
            />
        </SearchArea>)
}

export default SearchBar;