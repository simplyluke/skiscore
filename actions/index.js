export const DATA_AVAILABLE = 'DATA_AVAILABLE';

//Import the sample data
import Data from '../mock_slalom.json';

export const getData = data => ({
  type: DATA_AVAILABLE,
  data: Data.sets
})
