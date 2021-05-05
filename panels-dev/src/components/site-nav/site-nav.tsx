import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'site-nav',
  styleUrl: 'site-nav.css',
  shadow: true,
})
export class SiteNav {
  render() {
    return (
      <Host>
        <nav class="nav">
          <div class="line">
            {/*
            <div class="menu">
              <button>Menu</button>
            </div>
            */}
            <span class="logo">b·d software</span>
            <div class="actions">
              <button>Search</button>
              <button>Contact</button>
            </div>
          </div>
          <div class="border"></div>
          <div class="pages">
            <span>Link1</span>
            <span>Link2</span>
            <span>Link3</span>
            <span>Link4</span>
          </div>
        </nav>

        <nav class="md-nav">
          <div class="line">
            <span class="logo">b·d software</span>
            <div class="pages">
              <span>Link1</span>
              <span>Link2</span>
              <span>Link3</span>
              <span>Link4</span>
            </div>
            <div class="actions">
              <button>Search</button>
              <button>Contact</button>
            </div>
          </div>
        </nav>
      </Host>
    );
  }
}
