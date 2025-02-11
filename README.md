# Pokemon Card Market

- [Pokemon Card Market](#pokemon-card-market)
- [Tech Stack \& Features](#tech-stack--features)
- [Example](#example)
- [TODO](#todo)
- [Screenshot](#screenshot)
- [Source Pokemon TCG API](#source-pokemon-tcg-api)

# Tech Stack & Features

- Nuxt
- Pinia(State Management)
- UI/CSS
  - Tailwindcss
  - Shadcn-vue
- Theme switch Mode (Light, Dark, System)
- Code Quality
  - Eslint
  - Prettier
  - Lint-staged
  - Commitlint
  - Husky
- Pagination
- Filter(set, rarity, type)
- Search(debounced 2000ms)
- Screen detect page size (mobile=5, tablet=10, desktop=20)
- Cart

# Example

<p align="center">
  <img src="doc/pokemon_app.gif" alt="animated" />
</p>

# TODO

- Add tag badge information below card
- Cache request like TanStack Query

# Screenshot

<table>
  <tr>
    <td align="center">
      <img src="doc/mobile-white.jpeg" alt="mobile-white" width="200" height="300" style="object-fit: contain;"/>
    </td>
    <td align="center">
      <img src="doc/tablet-white.jpeg" alt="tablet-white" width="200" height="300" style="object-fit: contain;"/>
    </td>
    <td align="center">
      <img src="doc/desktop-white.jpeg" alt="desktop-white" width="200" height="300" style="object-fit: contain;"/>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="doc/mobile-dark.jpeg" alt="mobile-dark" width="200" height="300" style="object-fit: contain;"/>
    </td>
    <td align="center">
      <img src="doc/tablet-dark.jpeg" alt="tablet-dark" width="200" height="300" style="object-fit: contain;"/>
    </td>
    <td align="center">
      <img src="doc/desktop-dark.jpeg" alt="desktop-dark" width="200" height="300" style="object-fit: contain;"/>
    </td>
  </tr>
</table>
<p align="center">
  <img src="doc/desktop-cart-dark.jpeg" alt="desktop-cart-dark"  height="300"/>
</p></p>

# Source Pokemon TCG API

[Pokémon TCG API Documentation](https://docs.pokemontcg.io/)
