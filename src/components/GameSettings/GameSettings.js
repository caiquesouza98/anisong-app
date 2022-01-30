import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/system';
import StyledModal from '@mui/base/ModalUnstyled';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Slider } from '@mui/material';

const theme = createTheme();

function valueSlider(value) {
  return `${value}`
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function GameSettings() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [diffValue, setDiffValue] = React.useState('easy')
  const handleChange = (event) => setDiffValue(event.target.value)
  const [typeValue, setTypeValue] = React.useState('openings')
  const handletypeChange = (event) => setTypeValue(event.target.value)

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={handleOpen}
            sx={{ mt: 3, mb: 2 }}
          >
            Open settings
          </Button>
          <StyledModal
            aria-labelledby="settings"
            aria-describedby="settings"
            open={open}
            onClose={handleClose}
          >
            <Box sx={style}>
            <Typography>
              Game settings
            </Typography>
              <FormControl>
                <Box
                  sx={{
                    marginTop: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <FormLabel id="game-settings-difficulty">Difficulty</FormLabel>
                  <RadioGroup 
                    row
                    value={diffValue}
                    onChange={handleChange}
                  >
                    <FormControlLabel value="easy" control={<Radio />} label="Easy" defaultChecked />
                    <FormControlLabel value="medium" control={<Radio />} label="Medium" />
                    <FormControlLabel value="hard" control={<Radio />} label="Hard" />
                  </RadioGroup>
                </Box>
                <Box
                  sx={{
                    marginTop: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <FormLabel id="game-settings-songs">Number of songs</FormLabel>
                  <Slider
                    aria-label="Number of songs"
                    defaultValue={20}
                    getAriaValueText={valueSlider}
                    valueLabelDisplay="auto"
                    step={5}
                    marks
                    min={10}
                    max={100}
                  />
                </Box>
                <Box
                  sx={{
                    marginTop: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <FormLabel id="game-settings-time">Guessing time</FormLabel>
                  <Slider
                    aria-label="Guessing time"
                    defaultValue={20}
                    getAriaValueText={valueSlider}
                    valueLabelDisplay="auto"
                    step={5}
                    marks
                    min={10}
                    max={60}
                  />
                </Box>
                <Box
                  sx={{
                    marginTop: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <FormLabel id="game-settings-types">Song types</FormLabel>
                  <RadioGroup 
                    row
                    value={typeValue}
                    onChange={handletypeChange}
                  >
                    <FormControlLabel value="openings" control={<Radio />} label="Openings" defaultChecked />
                    <FormControlLabel value="endings" control={<Radio />} label="Endings" />
                    <FormControlLabel value="both" control={<Radio />} label="Both" />
                  </RadioGroup>
                </Box>
                <Box
                  sx={{
                    marginTop: 3,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <Button
                    type="submit"
                    fullWidth
                    variant="text"
                    sx={{ mt: 3, mb: 2, ml: 1 }}
                    onClick={handleClose}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, ml: 1 }}
                  >
                    Save
                  </Button>
                </Box>
              </FormControl>
            </Box>
          </StyledModal>
       </Container>
    </ThemeProvider>
  )

}