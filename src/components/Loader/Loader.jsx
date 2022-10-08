import { Grid } from 'react-loader-spinner';
import { LoaderStyled } from './LoaderStyled';

export const Loader = () => {
  return <LoaderStyled>
    <Grid
      height="80"
      width="80"
      color="palevioletred"
      ariaLabel="grid-loading"
      radius="12.5"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  </LoaderStyled>
}