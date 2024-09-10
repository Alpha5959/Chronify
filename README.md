# ∆ Chronify

[![NPM Version](https://img.shields.io/npm/v/chronify?style=for-the-badge)](https://www.npmjs.com/package/chronify)
[![Repository Size](https://img.shields.io/github/repo-size/Alpha5959/chronify?style=for-the-badge)](https://github.com/Alpha5959/chronify)
[![License](https://img.shields.io/npm/l/chronify?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Downloads](https://img.shields.io/npm/dt/chronify?style=for-the-badge)](https://www.npmjs.com/package/chronify)
[![Support](https://img.shields.io/badge/Support-Click%20here-7289d9?style=for-the-badge&logo=discord)](https://discord.com/invite/Rw5gRVqSaK)

`Chronify` is a Node.js package that provides a simple way to calculate and display human-readable time differences between dates. Perfect for applications that need to show elapsed or remaining time in a user-friendly format.

## Features

- **Flexible Time Units:** Shows time differences in years, months, days, hours, and minutes.
- **Customizable Output:** Supports both full and abbreviated unit formats.
- **Human-readable Format:** Easy-to-understand phrases like "2 weeks ago" or "in 3 days."

## Installation

Install `Chronify` via npm:

```bash
npm install chronify
```

## Usage

Import and use `Chronify` in your Node.js project:

```javascript
const { chronify } = require("chronify");
```

### Example

Display the time difference from the current date:

```javascript
console.log(chronify("2024-09-01T12:00:00Z"));
// Example Output: "2 weeks ago" (depending on the current date)
```

### Customizing Output

Control the number of units displayed and use abbreviated formats:

```javascript
console.log(chronify("2024-09-01T12:00:00Z", { maxUnits: 1, short: true }));
// Example Output: "2w ago" (depending on the current date)
```

## Options

- **`maxUnits` (number):** Maximum number of time units to display. Defaults to `2`.
- **`short` (boolean):** Use abbreviated units if `true`. Defaults to `false`.
