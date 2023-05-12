import { Switch, Route, useRouteMatch } from 'react-router-dom';

const { url } = useRouteMatch();

return (
  <>
    <Container>
      <MovieDetails movie={movie} />
      <ContainerInformation>
        <h2>Additional Information</h2>
        <ul>
          <li>
            <Link to={`${url}/reviews`}>Reviews</Link>
          </li>
          <li>
            <Link to={`${url}/cast`}>Cast</Link>
          </li>
        </ul>
      </ContainerInformation>
    </Container>

    <Switch>
      <Route path={`${url}/reviews`}>
        <Reviews movieId={movie.id} />
      </Route>
      <Route path={`${url}/cast`}>
        <Cast movieId={movie.id} />
      </Route>
    </Switch>
  </>
);
