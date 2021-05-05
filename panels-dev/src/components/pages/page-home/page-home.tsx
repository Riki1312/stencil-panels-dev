import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'page-home',
  styleUrl: 'page-home.css',
  shadow: true,
})
export class PageHome {
  render() {
    return (
      <Host>
        <h1>Page Home</h1>
      </Host>
    );
  }
}
