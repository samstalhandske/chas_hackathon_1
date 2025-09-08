# Malmö Weather App

This is a simple weather application that fetches and displays the current weather for Malmö, Sweden using the OpenWeatherMap API.

## Project Structure

```
malmo-weather-app
├── src
│   ├── index.html      # Main HTML document for the weather app
│   ├── app.js         # JavaScript code for fetching and displaying weather data
│   └── styles.css     # CSS styles for the weather app
├── package.json        # npm configuration file
└── README.md           # Project documentation
```

## Getting Started

To set up and run the weather app, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd malmo-weather-app
   ```

2. **Install dependencies**:
   Make sure you have Node.js installed. Then run:
   ```bash
   npm install
   ```

3. **Obtain an API Key**:
   Sign up at [OpenWeatherMap](https://openweathermap.org/) to get your free API key.

4. **Update the API Key**:
   In `src/app.js`, replace `YOUR_API_KEY` with your actual OpenWeatherMap API key.

5. **Run the application**:
   Open `src/index.html` in your web browser to view the weather app.

## Features

- Fetches current weather data for Malmö.
- Displays temperature, weather conditions, and other relevant information.
- Responsive design for better usability on different devices.

## License

This project is open-source and available under the [MIT License](LICENSE).