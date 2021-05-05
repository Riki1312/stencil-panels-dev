import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'page-labs',
  styleUrl: 'page-labs.css',
  shadow: true,
})
export class PageLabs {
  render() {
    return (
      <Host>
        <h1>Page Labs</h1>
      </Host>
    );
  }
}
