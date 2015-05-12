import koa from 'koa';
import { Flummox } from 'flummox';
import FluxComponent from 'flummox/component';
import React from 'react';

class View extends React.Component {
  render() {
    return (
      <div>
        <div>I'm view. This is this.props.flux:</div>
        <div>{JSON.stringify(this.props.flux)}</div>
      </div>
    );
  }
}

class Flux extends Flummox {}
let flux = new Flux();

let app = koa();

app.use(function *() {
  this.body = React.renderToString(
    <FluxComponent flux={flux}>
      <View />
    </FluxComponent>
  );
});

app.listen(3000);
